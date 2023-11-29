'use client'
import React, {useRef} from 'react';
import SectionWrapper from "@/hoc/SectionWrapper";
import { motion } from 'framer-motion';
import {slideIn} from "@/utils/motion";
import SectionText from "@/components/SectionText/SectionText";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import ContactForm from "@/components/ContactForm/ContactForm";
import EarthCanvas from "@/components/Canvas/Earth";

const ContactSection = () => {

    return (
        <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl z-[0]"
            >
                <SectionText text='Связаться' />
                <SectionHeader title='Контакты.'/>
                <ContactForm />
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px] z-[0]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(ContactSection, 'contacts');