import React from "react";
import { useEffect } from "react";

export default function useDebounce(value: string, delay: number = 500) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler: NodeJS.Timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Debounce a function by time
 * @param {Function} func
 * @param {Number} delay
 */

export function useDebouncedFunction(handler, watchedValue, delay) {
    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            handler();
        }, delay);
        return () => {
            clearTimeout(timeoutHandler);
        };
    }, [watchedValue, delay]);
}
