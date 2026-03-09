import { useEffect, useRef } from 'react';

export function useScrollReveal<T extends HTMLElement>(
    options: IntersectionObserverInit = {}
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
                ...options,
            }
        );

        const observeElements = () => {
            const revealElements = element.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade');
            revealElements.forEach((el) => {
                // Only observe if it hasn't been revealed yet
                if (!el.classList.contains('revealed')) {
                    observer.observe(el);
                }
            });

            if (
                (element.classList.contains('reveal-up') ||
                    element.classList.contains('reveal-left') ||
                    element.classList.contains('reveal-right') ||
                    element.classList.contains('reveal-scale') ||
                    element.classList.contains('reveal-fade')) &&
                !element.classList.contains('revealed')
            ) {
                observer.observe(element);
            }
        };

        observeElements();

        // Use MutationObserver to watch for newly added elements (e.g. tab switching)
        const mutationObserver = new MutationObserver((mutations) => {
            let shouldReObserve = false;
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    shouldReObserve = true;
                }
            });
            if (shouldReObserve) {
                observeElements();
            }
        });

        mutationObserver.observe(element, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, [options]);

    return ref;
}
