'use client'
import React, {FC} from 'react';
import {motion} from "framer-motion";

interface ScrollerProps {
    href: string
}

const Scroller: FC<ScrollerProps> = ({href}) => {
    return (
        <a href={href}>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
                <motion.div
                    animate={{
                        y: [0, 24, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }}
                    className='w-3 h-3 rounded-full bg-white mb-1'
                />
            </div>
        </a>
    );
};

export default Scroller;