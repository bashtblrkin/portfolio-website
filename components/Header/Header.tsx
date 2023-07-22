"use client"
import React, {useReducer, useState} from 'react';
import {Staatliches} from "next/font/google";
import cn from "classnames";
import Link from 'next/link'
import {navLinks} from "@/constants";
import menu from '../../public/icons/menu.svg'
import close from '../../public/icons/close.svg'
import Image from "next/image";

const staatliches = Staatliches({
    subsets: ['latin'],
    weight: ['400']
})

const reducerIsOpen = (state: boolean) => {
    return !state
}

const initializerIsOpen = (initialState: boolean) => {
    return initialState
}

const Header = () => {

    const [activeLink, setActiveLink] = useState('')
    const [isOpen, toggleIsOpen] = useReducer(reducerIsOpen, false, initializerIsOpen)

    const handleClickLogo = () => {
        setActiveLink('')
        window.scrollTo(0, 0)
    }

    return (
        <header className='paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-transparent'>
            <nav className='w-full flex justify-between items-center max-w-7xl mx-auto'>
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
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map(link =>
                        <li
                            key={link.id}
                            className={cn({'text-white': activeLink === link.id}, {'text-grey': activeLink !== link.id}, 'hover:text-white text-[18px]')}
                            onClick={() => {
                                setActiveLink(link.id)
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    )}
                </ul>
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <Image
                        src={isOpen ? close : menu}
                        width={28}
                        height={28}
                        alt="menu"
                        className='object-contain cursor-pointer'
                        onClick={toggleIsOpen}
                    />
                    <div
                        className={cn({'hidden': !isOpen}, {'flex': isOpen}, 'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl')}>
                        <ul className='list-none flex justify-end items-start flex-col gap-4'>
                            {navLinks.map(link =>
                                <li
                                    key={link.id}
                                    className={cn({'text-white': activeLink === link.id}, {'text-grey': activeLink !== link.id}, 'text-[16px]')}
                                    onClick={() => {
                                        toggleIsOpen()
                                        setActiveLink(link.id)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;