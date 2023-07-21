'use client'
import React, {FC} from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "@/utils/motion";

interface SectionTextProps {
    text: string
}

const SectionText: FC<SectionTextProps> = ({text}) => {

    return (
        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='sectionSubHeader mt-4 leading-[30px]'
        >
            {text}
        </motion.p>
    );
};

export default SectionText;