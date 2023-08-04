"use client"
import SectionWrapper from "@/hoc/SectionWrapper";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React, {useState} from "react";
import SectionText from "@/components/SectionText/SectionText";
import {works} from "@/constants";
import WorkCard from "@/components/WorkCard/WorkCard";
import {AnimatePresence, LayoutGroup, motion} from "framer-motion";
import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import {Work} from "@/interfaces/Work";
import close from "@/public/icons/close.svg";
import menu from "@/public/icons/menu.svg";
import WorkCardModal from "@/components/WorkCardModal/WorkCardModal";

const WorksSection = () => {

    const [selectedWork, setSelectedWork] = useState<Work | null>(null)

    const handleClickWork = (work: Work | null) => {
        setSelectedWork(work)
    }

    return (
        <>
            <SectionHeader title={'Мои работы'}/>
            <div className='max-w-3xl'>
                <SectionText text={`
                    Следующие проекты демонстрируют мои навыки
                    и опыт на реальных примерах. Каждый проекты имеет описание,
                    по возможности предоставлены репозитории и ссылки на онлайн
                    демонстрацию проекта. Работы отражают мою способность решать
                    сложные задачи, работать с различными технологиями
                    и эффективно управлять проектами.`}/>
            </div>
            <LayoutGroup>
                <div className='mt-20 flex flex-wrap gap-2 justify-evenly'>
                    {works.map((work, index) =>
                        <WorkCard key={work.id} work={work} index={index} onClick={() => handleClickWork(work)}/>
                    )}

                    <AnimatePresence>
                        {selectedWork &&
                            <Modal>
                                <WorkCardModal work={selectedWork} onClickClose={() => setSelectedWork(null)}/>
                            </Modal>
                        }
                    </AnimatePresence>
                </div>
            </LayoutGroup>
        </>
    );
};

export default SectionWrapper(WorksSection, 'works');