"use client"
import React, {FC, useEffect} from 'react';
import {Work} from "@/interfaces/Work";
import {fadeIn} from "@/utils/motion";
import {motion} from 'framer-motion'
import Image from "next/image";
import useMousePosition from "@/hooks/useMousePosition";
import cn from "classnames";

interface WorkCardProps {
    work: Work
    index: number
    onClick: () => void
}

const WorkCard: FC<WorkCardProps> = ({work, index, onClick}) => {

    const {title, image, description, explanation, tags, github, link} = work
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const {mousePosition, isFocused} = useMousePosition(containerRef)

    return (
        <motion.div
            ref={containerRef}
            variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
            className='relative bg-darkBlue p-5 rounded-2xl sm:w-[360px] w-full overflow-hidden hover:cursor-pointer m-auto'
            onClick={onClick}
        >
            <div className='flex justify-center'>
                <div className='relative w-[320px] sm:w-full'>
                    <Image
                        src={image}
                        alt={title}
                        width={320}
                        height={230}
                        style={{objectFit: 'cover', borderRadius: '20px'}}
                    />

                    {github && <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                window.open(github || '', "_blank")
                            }}
                            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image
                                width={20}
                                height={20}
                                src='/images/icons/github.png'
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>}
                    {link && <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                window.open(link || '', "_blank")
                            }}
                            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image
                                width={20}
                                height={20}
                                src='/images/icons/world.png'
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>}
                </div>
            </div>


            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px] h-[75px]'>{title}</h3>
                <p className='mt-2 text-secondary text-[14px] h-[105px] overflow-hidden line-clamp-5'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
                {tags.slice(0, 4).map((tag, index) => (
                    <p
                        key={`${title}-${tag.name}`}
                        className={`text-[14px]`}
                        style={{color: tag.color}}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
            {<div
                className={cn('glare', {'opacity-[0.85]': isFocused})}
                style={{top: mousePosition.y || 0, left: mousePosition.x || 0}}
            />}
        </motion.div>
    );
};

export default WorkCard;