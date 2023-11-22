"use client"
import React from 'react';
import {staggerContainer} from "@/utils/motion";
import {motion} from 'framer-motion'
import {useMobile} from "@/hooks/useMobile";

const SectionWrapper = (Component: () => React.ReactNode, anchor: string, amount: number = 0.25) => {



    return function Wrapper() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount}}
                className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative`}
            >
                <span className='hash-span' id={anchor}>
                  &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    }
}

export default SectionWrapper;