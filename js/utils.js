/**
 * Utility Functions
 */

export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);

export const debounce = (callback, delay = 250) => {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

};

export const throttle = (callback, limit = 100) => {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, limit);

    };

};