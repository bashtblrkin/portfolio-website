import React, {FC} from 'react';
import {Experience} from "@/interfaces/Experience";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import Image from "next/image";

interface ExperienceCardProps {
    experience: Experience
    index: number
}

const ExperienceCard: FC<ExperienceCardProps> = ({experience, index}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#151030',
                color: '#fff'
            }}
            contentArrowStyle={{
                borderRight: '7px solid #232631'
            }}
            date={experience.workTime}
            iconStyle={{
                background: experience.iconBackground
            }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image src={experience.icon} alt={experience.companyName} width={35} height={35} style={{objectFit: "contain"}}/>
                </div>
            }
        >
            <div>
                <h3 className='text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-grey text-[16px]' style={{margin: 0}}>{experience.companyName}</p>
            </div>
            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.tasks.map((task, index) =>
                    <li key={task} className='text-[14px] pl-1 tracking-wider'>
                        {task}
                    </li>
                )}
            </ul>
        </VerticalTimelineElement>
    );
};

export default ExperienceCard;