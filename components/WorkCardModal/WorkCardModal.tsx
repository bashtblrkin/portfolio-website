"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import {Work} from "@/interfaces/Work";
import React, {FC} from "react";

interface WorkCardModalProps {
    work: Work
    onClickClose: () => void
}

interface CloseProps {
    onClickClose: () => void
}

const Close: FC<CloseProps> = ({onClickClose}) => {
    return (<div
        className={'absolute w-[30px] h-[30px] top-5 right-5 rounded-full border-2 border-white flex items-center justify-center'}>
        <Image
            src={'/icons/close.svg'}
            width={15}
            height={15}
            alt="menu"
            className='object-contain cursor-pointer'
            onClick={onClickClose}
        />
    </div>);
};

const WorkCardModal: FC<WorkCardModalProps> = ({work, onClickClose}) => {

    const {title, image, description, explanation, tags, github, link, id} = work

    return (
        <motion.div
            layoutId={`card-${id}`}
            className={'relative bg-darkBlue p-5 rounded-2xl w-[1200px] w-full overflow-hidden hover:cursor-pointer'}
        >
            <Close onClickClose={onClickClose}/>
            <div className={'flex gap-5'}>
                <Image
                    src={image}
                    alt={title}
                    height={230}
                    width={320}
                    style={{objectFit: 'cover', borderRadius: '20px', maxHeight: '230px'}}
                />
                <div>
                    <h3 className='text-white font-bold text-[24px]'>{title}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>
            </div>
            <p className='mt-5 text-secondary text-[14px]'>{explanation}</p>
            <div className='mt-5 flex flex-wrap gap-2'>
                {tags.map((tag) => (
                    <p
                        key={`${title}-${tag.name}`}
                        className={`text-[14px]`}
                        style={{color: tag.color}}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </motion.div>
    );
};

export default WorkCardModal;