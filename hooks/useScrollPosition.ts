'use client'

import { useState, useEffect } from 'react';

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial scroll position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
}