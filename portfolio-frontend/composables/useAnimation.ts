import { ref, onMounted } from 'vue';

export const useAnimation = (animationClass: string, duration: string = '1s') => {
    const element = ref<HTMLElement | null>(null);

    const applyAnimation = () => {
        if (element.value) {
            element.value.style.animationDuration = duration;
            element.value.classList.add('animate__animated', animationClass);

            element.value.addEventListener('animationend', () => {
                element.value?.classList.remove('animate__animated', animationClass);
            }, { once: true });
        }
    };

    onMounted(() => {
        applyAnimation();
    });

    return {
        element,
        applyAnimation,
    };
};
