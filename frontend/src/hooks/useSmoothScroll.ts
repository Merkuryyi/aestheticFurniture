import { useCallback } from 'react';

export const useSmoothScroll = () => {
    const scrollToSection = useCallback((sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, []);
    const scrollToNextSection = useCallback(() => {
        const snapContainer = document.querySelector('.snap-container') as HTMLElement;
        if (snapContainer) {
            const currentScroll = snapContainer.scrollTop;
            const viewportHeight = snapContainer.clientHeight;
            const nextScroll = currentScroll + viewportHeight;

            snapContainer.scrollTo({
                top: nextScroll,
                behavior: 'smooth'
            });
        }
    }, []);
    const scrollToPrevSection = useCallback(() => {
        const snapContainer = document.querySelector('.snap-container') as HTMLElement;
        if (snapContainer) {
            const currentScroll = snapContainer.scrollTop;
            const viewportHeight = snapContainer.clientHeight;
            const prevScroll = Math.max(0, currentScroll - viewportHeight);

            snapContainer.scrollTo({
                top: prevScroll,
                behavior: 'smooth'
            });
        }
    }, []);

    return {
        scrollToSection,
        scrollToNextSection,
        scrollToPrevSection
    };
};