"use client"
import React, {FC} from 'react';
import {motion} from "framer-motion";
import {textVariant} from "@/utils/motion";
import cn from "classnames";

interface SectionHeaderProps {
    title: string
    classNames?: string
}

const SectionHeader: FC<SectionHeaderProps> = ({title, classNames = ''}) => {
    return (
        <motion.div variants={textVariant(0)}>
            <h2 className={cn('sectionHeader', {[classNames]: classNames})}>{title}</h2>
        </motion.div>
    );
};

export default SectionHeader;