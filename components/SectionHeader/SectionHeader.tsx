"use client"
import React, {FC} from 'react';
import {motion} from "framer-motion";
import {textVariant} from "@/utils/motion";

interface SectionHeaderProps {
    title: string
    classNames?: string
}

const SectionHeader: FC<SectionHeaderProps> = ({title, classNames}) => {
    return (
        <motion.div variants={textVariant(0)}>
            <h2 className={'sectionHeader ' + classNames}>{title}</h2>
        </motion.div>
    );
};

export default SectionHeader;