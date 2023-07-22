"use client"
import SectionWrapper from "@/hoc/SectionWrapper";
import {technologies} from "@/constants/technologies";
import Image from "next/image";

const StackSection = () => {
    return (
        <>
            <h3 className='font-bold md:text-[30px] text-[25px]'>Мой стек технологий</h3>
            <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
                {technologies.map((technology =>
                    <div key={technology.name} className='w-[80px] h-[80px] flex justify-center items-center'>
                        <Image src={technology.icon} alt={technology.name} width={65} height={65} className={'h-auto w-auto'}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(StackSection, 'stack');