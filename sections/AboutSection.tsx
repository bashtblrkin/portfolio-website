import React from 'react';
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SectionText from "@/components/SectionText/SectionText";
import {services} from "@/constants/services";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import SectionContainer from "@/components/SectionContainer/SectionContainer";
import Image from "next/image";
import avatar from '../public/images/avatar.png'


const AboutSection = () => {
    return (
        <SectionContainer>
            <div className='flex md:flex-row md:gap-0 gap-5 flex-col-reverse items-center justify-between'>
                <div className='max-w-3xl'>
                    <SectionHeader title={'Обо мне'}/>
                    <SectionText text={`Я опытный разработчик программного 
                        обеспечения с опытом работы более 3 лет. Пишу код на TypeScript
                        и JavaScript, работаю с такими фреймворками, как React, Next.js,
                        Node.js и Angular. Имею диплом бакалавра с отличием по направлению
                        “Технологии разработки программного обеспечения”, а также диплом магистра по
                        направлению “Управление разработкой и внедрением бизнес-приложений”.
                        Мне нравится учиться и узнавать новые технологии, чтобы создавать эффективные,
                        масштабируемые и удобные для пользователя приложения, а также решать бизнес задачи.`}/>
                </div>
                <Image src={avatar} alt={'Аватар'}/>
            </div>
            <div className='mt-20 flex flex-wrap gap-10 justify-between'>
                {services.map((service, index) => <ServiceCard key={service.id} service={service} index={index}/>)}
            </div>
        </SectionContainer>
    );
};

export default AboutSection;