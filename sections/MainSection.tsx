
import ComputerCanvas from '../components/Canvas/Computer'
import Scroller from "@/components/Scroller/Scroller";

const MainSection = () => {

    return (
        <section className='relative w-full h-screen mx-auto bg-main-pattern bg-center bg-cover bg-no-repeat '>
            <div className='absolute inset-0 top-[120px]  max-w-7xl mx-auto paddingX flex flex-row items-start gap-5'>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-violet' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div>
                    <h1 className='header'>Привет, я <span className='text-violet'>Иван</span></h1>
                    <p className='subHeader mt-2'>
                        Я занимаюсь разработкой
                        <br className='md:block hidden'/>
                        графических интерфейсов,
                        созданием PWA и
                        <br className='md:block hidden'/>
                         проектированием архитектуры
                        <br className='md:block hidden'/>
                         frontend приложений
                    </p>
                </div>
            </div>
            <ComputerCanvas />
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <Scroller href={'#about'} />
            </div>
        </section>
    );
};

export default MainSection;