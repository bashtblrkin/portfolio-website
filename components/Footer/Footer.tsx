'use client'
import React from 'react';
import cn from "classnames";
import Link from "next/link";
import {Staatliches} from "next/font/google";
import Image from "next/image";

const staatliches = Staatliches({
    subsets: ['latin'],
    weight: ['400']
})

const Footer = () => {

    const handleClickLogo = () => {
        window.scrollTo(0, 0)
    }

    return (
        <footer className='paddingX w-full flex items-center py-5'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    href="/"
                    className='flex items-center gap-2'
                    onClick={handleClickLogo}
                >
                    <div className='w-[30px] h-[30px] rounded-full bg-red-500 flex items-center justify-center'>
                        <div className={cn(staatliches.className, 'text-[20]')}>I</div>
                    </div>
                    <p className={cn(staatliches.className, 'text-[20px] flex')}>
                        IVAN BATURIN &nbsp;
                        <span className='lg:block hidden'>| FRONTEND DEVELOPER</span>
                    </p>
                </Link>
                <div className='flex items-center justify-center gap-6'>
                    <a target='_blank' href={'https://vk.com/vanya370023'} className='hover:opacity-80'>
                        <Image src='/images/icons/vk.png' alt='vk' width={30} height={30}/>
                    </a>
                    <a target='_blank' href={'https://t.me/bashtblrkin'} className='hover:opacity-80'>
                        <Image src='/images/icons/telegram.png' alt='vk' width={25} height={25}/>
                    </a>
                    <a target='_blank' href={'https://github.com/bashtblrkin'} className='hover:opacity-80'>
                        <Image src='/images/icons/github-footer.png' alt='vk' width={25} height={25}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;