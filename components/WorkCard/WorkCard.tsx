"use client"
import React, {FC} from 'react';
import {Work} from "@/interfaces/Work";
import {fadeIn} from "@/utils/motion";
import {motion} from 'framer-motion'
import Tilt from "react-parallax-tilt";
import Image from "next/image";

interface WorkCardProps {
    work: Work
    index: number
    onClick: () => void
}

const WorkCard: FC<WorkCardProps> = ({work, index, onClick}) => {

    const {title, image, description, explanation, tags, github, link} = work

    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} onClick={onClick}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className='bg-darkBlue p-5 rounded-2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <Image
                        src={image}
                        alt={title}
                        fill={true}
                        style={{objectFit: 'cover', borderRadius: '20px'}}
                    />

                    {github && <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(github || '', "_blank")}
                            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image
                                src='/images/github.png'
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>}
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${title}-${tag.name}`}
                            className={`text-[14px] text-${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default WorkCard;