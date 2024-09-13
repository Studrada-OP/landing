'use client';

import Image from 'next/image';
import React from 'react';

import logo from '@/public/logo.png';

export const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className='flex w-full flex-row items-center justify-between bg-black bg-opacity-10 px-10 py-8'>
            <div className='flex flex-row items-center space-x-2'>
                <Image src={logo} alt={'logo'} width={50} height={50} />
                <h2 className='text-center text-2xl leading-none'>
                    СТУД
                    <br />
                    РАДА
                </h2>
            </div>
            <nav>
                <ul className='flex space-x-4'>
                    <li>
                        <button onClick={() => scrollToSection('about')}>
                            Про нас
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('achievement')}>
                            Досягнення
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('docs')}>
                            Документи
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection('contact')}>
                            Контакти
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
