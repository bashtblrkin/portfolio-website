"use client";
import Image from "next/image";
import {Work} from "@/interfaces/Work";
import React, {FC} from "react";

interface WorkCardModalProps {
    work: Work
}

const WorkCardModal: FC<WorkCardModalProps> = ({work}) => {

    const {title, image, description, explanation, tags, github, link, id} = work

    return (
       <div className={'sm:w-[1200px]'}>
           <div className={'flex lg:flex-row flex-col gap-5'}>
               <div className='flex justify-center'>
                   <div className='relative shrink-0 w-[320px]'>
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
       </div>
    );
};

export default WorkCardModal;