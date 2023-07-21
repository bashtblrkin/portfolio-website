"use client"
import React, {FC} from 'react';
import {motion} from "framer-motion";
import {textVariant} from "@/utils/motion";

interface SectionHeaderProps {
    title: string
}

const SectionHeader: FC<SectionHeaderProps> = ({title}) => {
    return (
        <motion.div variants={textVariant(0.75)}>
            <h2 className='sectionHeader'>{title}</h2>
        </motion.div>
    );
};

export default SectionHeader;