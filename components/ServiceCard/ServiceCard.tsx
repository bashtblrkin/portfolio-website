"use client"
import React, {FC} from 'react';
import {Service} from "@/interfaces";
import Tilt from 'react-parallax-tilt'
import {motion} from "framer-motion";
import {fadeIn} from "@/utils/motion";
import Image from "next/image";

interface ServiceCardProps {
    service: Service
    index: number
}

const ServiceCard: FC<ServiceCardProps> = ({service, index}) => {

    const {title, icon} = service

    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div

                    className='bg-darkBlue rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <Image src={icon} alt={title} width={60} height={60} />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;