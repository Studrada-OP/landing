import Image from 'next/image';
import React from 'react';

import logo from '@/public/hero_logo.png';

const Hero = () => {
    return (
        <section className='relative h-fit'>
            <div className='relative z-50 mt-40 max-w-4xl rounded-[40px] border-[3.5px] border-[#B88AF269] bg-[#D8C8EC] bg-opacity-20 px-14 py-10 backdrop-blur-lg'>
                <h1 className='text-center'>СТУДРАДА</h1>
                <p className='text-wrap text-6xl tracking-wider'>
                    *від студентів для студентів
                </p>
            </div>
            <div className='absolute -top-[50%] right-[-10%]'>
                <Image src={logo} alt={'hero logo'} />
            </div>
            <div></div>
        </section>
    );
};

export default Hero;
