'use client'
import React from 'react';
import SectionWrapper from "@/hoc/SectionWrapper";
import { motion } from 'framer-motion';
import {slideIn} from "@/utils/motion";

const ContactSection = () => {
    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p>Связаться</p>
                <h3>Контакты.</h3>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(ContactSection, 'contact');