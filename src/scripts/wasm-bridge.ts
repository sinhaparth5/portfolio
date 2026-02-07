/**
 * WASM Bridge — loads the WASM module with JS fallback.
 * Every function has an identical pure-JS implementation so the site
 * works even if WASM fails to load.
 */

export interface AnimMath {
  calc_velocity_skew(velocity: number, factor: number, max: number): number;
  calc_velocity_scale(velocity: number, factor: number, maxExtra: number): number;
  calc_magnetic(mouseX: number, mouseY: number, centerX: number, centerY: number, strength: number): Float64Array | number[];
  calc_tilt_3d(mouseX: number, mouseY: number, centerX: number, centerY: number, divisor: number): Float64Array | number[];
  exponential_ease(t: number): number;
  batch_velocity_transforms(velocity: number, count: number): Float64Array | number[];
}

// JS fallback implementations (identical math to the Rust code)
const jsFallback: AnimMath = {
  calc_velocity_skew(velocity, factor, max) {
    return Math.min(Math.max(velocity * factor, -max), max);
  },
  calc_velocity_scale(velocity, factor, maxExtra) {
    return 1 + Math.min(Math.abs(velocity) * factor, maxExtra);
  },
  calc_magnetic(mouseX, mouseY, centerX, centerY, strength) {
    return [(mouseX - centerX) * strength, (mouseY - centerY) * strength];
  },
  calc_tilt_3d(mouseX, mouseY, centerX, centerY, divisor) {
    return [(mouseY - centerY) / divisor, (centerX - mouseX) / divisor];
  },
  exponential_ease(t) {
    return Math.min(1, 1.001 - Math.pow(2, -10 * t));
  },
  batch_velocity_transforms(velocity, count) {
    const skew = Math.min(Math.max(velocity * 0.3, -10), 10);
    const scale = 1 + Math.min(Math.abs(velocity) * 0.02, 0.15);
    const result: number[] = [];
    for (let i = 0; i < count; i++) {
      result.push(skew, scale);
    }
    return result;
  },
};

let cachedMath: AnimMath | null = null;
let loadPromise: Promise<AnimMath> | null = null;

async function loadWasm(): Promise<AnimMath> {
  try {
    // wasm-glue.js is copied from public/wasm/ during wasm:build so Vite can bundle it
    const wasmModule = await import('./wasm-glue.js');
    await wasmModule.default('/wasm/portfolio_wasm_bg.wasm');
    return wasmModule as unknown as AnimMath;
  } catch (e) {
    console.warn('[wasm-bridge] WASM load failed, using JS fallback:', e);
    return jsFallback;
  }
}

/** Returns a promise that resolves to the math module (WASM or JS fallback). */
export function getAnimMath(): Promise<AnimMath> {
  if (cachedMath) return Promise.resolve(cachedMath);
  if (!loadPromise) {
    loadPromise = loadWasm().then(m => {
      cachedMath = m;
      return m;
    });
  }
  return loadPromise;
}

/**
 * Synchronous access — returns WASM if already loaded, otherwise JS fallback.
 * Use this in hot paths (ticker callbacks, mousemove) where you can't await.
 */
export function getAnimMathSync(): AnimMath {
  return cachedMath || jsFallback;
}
