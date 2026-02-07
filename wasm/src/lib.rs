use wasm_bindgen::prelude::*;

/// Calculate velocity-based skew transform
#[wasm_bindgen]
pub fn calc_velocity_skew(velocity: f64, factor: f64, max: f64) -> f64 {
    (velocity * factor).clamp(-max, max)
}

/// Calculate velocity-based scale transform
#[wasm_bindgen]
pub fn calc_velocity_scale(velocity: f64, factor: f64, max_extra: f64) -> f64 {
    1.0 + (velocity.abs() * factor).min(max_extra)
}

/// Calculate magnetic pull offset [dx, dy]
#[wasm_bindgen]
pub fn calc_magnetic(
    mouse_x: f64,
    mouse_y: f64,
    center_x: f64,
    center_y: f64,
    strength: f64,
) -> Vec<f64> {
    vec![
        (mouse_x - center_x) * strength,
        (mouse_y - center_y) * strength,
    ]
}

/// Calculate 3D tilt rotation [rotX, rotY]
#[wasm_bindgen]
pub fn calc_tilt_3d(
    mouse_x: f64,
    mouse_y: f64,
    center_x: f64,
    center_y: f64,
    divisor: f64,
) -> Vec<f64> {
    vec![
        (mouse_y - center_y) / divisor,
        (center_x - mouse_x) / divisor,
    ]
}

/// Lenis exponential easing: min(1, 1.001 - 2^(-10t))
#[wasm_bindgen]
pub fn exponential_ease(t: f64) -> f64 {
    (1.001 - 2.0_f64.powf(-10.0 * t)).min(1.0)
}

/// Batch velocity transforms for N elements sharing the same velocity
/// Returns [skew, scale] as a flat array
#[wasm_bindgen]
pub fn batch_velocity_transforms(velocity: f64, count: u32) -> Vec<f64> {
    let skew = (velocity * 0.3).clamp(-10.0, 10.0);
    let scale = 1.0 + (velocity.abs() * 0.02).min(0.15);
    let mut result = Vec::with_capacity((count as usize) * 2);
    for _ in 0..count {
        result.push(skew);
        result.push(scale);
    }
    result
}

/// Batch parallax calculations
/// Takes scroll progress values and speed multipliers, returns y-offsets
#[wasm_bindgen]
pub fn batch_parallax(scroll_progress: &[f64], speeds: &[f64], count: u32) -> Vec<f64> {
    let n = count as usize;
    let mut result = Vec::with_capacity(n);
    for i in 0..n {
        let progress = if i < scroll_progress.len() { scroll_progress[i] } else { 0.0 };
        let speed = if i < speeds.len() { speeds[i] } else { 0.5 };
        result.push(progress * speed * 100.0);
    }
    result
}
