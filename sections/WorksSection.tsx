"use client"
import SectionWrapper from "@/hoc/SectionWrapper";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import React, {useState} from "react";
import SectionText from "@/components/SectionText/SectionText";
import {works} from "@/constants";
import WorkCard from "@/components/WorkCard/WorkCard";

const WorksSection = () => {

    const [selectedId, setSelectedId] = useState<string | null>(null)

    const handleClickCard = (id: string) => () => {
        setSelectedId(id)
    }

    return (
        <>
            <SectionHeader title={'Мои работы'} />
            <div className='max-w-3xl'>
                <SectionText text={`
                    Следующие проекты демонстрируют мои навыки
                    и опыт на реальных примерах. Каждый проекты имеет описание,
                    по возможности предоставлены репозитории и ссылки на онлайн
                    демонстрацию проекта. Работы отражают мою способность решать
                    сложные задачи, работать с различными технологиями
                    и эффективно управлять проектами.`} />
            </div>
            <div className='mt-20 flex flex-wrap gap-10 justify-evenly'>
                {works.map((work, index) =>
                    <WorkCard key={work.id} work={work} index={index} onClick={handleClickCard(work.id)}/>
                )}
            </div>
        </>
    );
};

export default SectionWrapper(WorksSection, 'works');