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

    const handleClick = () => {
        onClickClose()
    }

    return (<div
        className={`sm:absolute fixed w-[30px] h-[30px] sm:top-5 right-5 top-[10%] rounded-full border-2 border-white flex items-center justify-center`}
    >
        <Image
            src={'/icons/close.svg'}
            width={15}
            height={15}
            alt="menu"
            className='object-contain cursor-pointer'
            onClick={handleClick}
        />
    </div>);
};

const WorkCardModal: FC<WorkCardModalProps> = ({work, onClickClose}) => {

    const {title, image, description, explanation, tags, github, link, id} = work

    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.75,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: {
                    ease: "easeOut",
                    duration: 0.15,
                },
            }}
            exit={{
                opacity: 0,
                scale: 0.75,
                transition: {
                    ease: "easeIn",
                    duration: 0.15
                },
            }}
            className={'relative bg-darkBlue p-5 rounded-2xl sm:w-[1200px] modal-height lg:overflow-hidden overflow-y-scroll'}
        >
            <Close onClickClose={onClickClose}/>
            <div className={'flex lg:flex-row flex-col gap-5'}>
                <div className='flex justify-center'>
                    <div className='relative shrink-0 w-[320px] '>
                        <Image
                            src={image}
                            alt={title}
                            height={230}
                            width={320}
                            style={{objectFit: 'cover', borderRadius: '20px', maxHeight: '230px'}}
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