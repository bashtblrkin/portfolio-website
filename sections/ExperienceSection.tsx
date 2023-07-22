"use client"
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import SectionWrapper from "@/hoc/SectionWrapper";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {experiences} from "@/constants";
import {textVariant} from "@/utils/motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React from "react";
import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

const ExperienceSection = () => {
    return (
        <>
            <SectionHeader title={'Опыт работы'} classNames={'text-center'}/>
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => <ExperienceCard key={experience.id} index={index} experience={experience}/>)}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(ExperienceSection, 'experience');