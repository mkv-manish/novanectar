'use client'

import React from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Navbar from './Navbar';

export function Hero() {
    // const scrollY = useScrollPosition();

    return (
        <section id="home" className="min-h-screen w-full relative flex flex-col items-center justify-center antialiased">
            <Navbar />
            <div className="flex flex-col h-full items-center justify-center antialiased">
                <h1 className="relative z-10 max-w-5xl text-xl md:text-7xl px-3 md:px-0 bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-600  text-center font-sans font-bold mb-7">
                    Welcome to Novanectar Solutions
                </h1>
                <div className="max-w-4xl mx-auto p-4 space-y-4">
                    <h2 className="relative z-10 text-4xl text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">Innovative Tech Solutions for Your Business</h2>
                    <p className="text-neutral-500 max-w-3xl mx-auto my-2 text-base text-center relative z-10">
                        At Novanectar Solutions, we believe in the transformative power of technology to drive business success. Our mission is to empower your business by leveraging the latest advancements in technology and delivering exceptional, personalized service.
                    </p>
                    <div className="flex justify-center">
                        <button className="relative z-10 inline-flex h-12 overflow-hidden rounded-full p-[1px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f5ef45_0%,#74f7f5_50%,#f5ef45_100%)]" />

                            <a href="#contact" className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                                Get Started
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <BackgroundBeams />
        </section>
    );
}
