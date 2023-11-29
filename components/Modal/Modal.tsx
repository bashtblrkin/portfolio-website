import {motion} from 'framer-motion';
import React, {FC, PropsWithChildren, useEffect, useRef} from 'react';
import Image from "next/image";
import {createPortal} from "react-dom";
import Portal from "@/hoc/Portal";

interface ModalProps extends PropsWithChildren {
    isOpen: boolean
    onClose: () => void
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

const Modal: FC<ModalProps> = ({isOpen, onClose, children}) => {

    return (
        <Portal>
            {isOpen && <motion.div
                className={'fixed w-full h-screen top-0 left-0 flex justify-center overflow-visible items-center xl:px-0 px-5 bg-primary bg-opacity-[0.8] z-50'}
            >
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
                    className={'relative bg-darkBlue p-5 rounded-2xl modal-height lg:overflow-hidden overflow-y-scroll'}
                >
                    <Close onClickClose={onClose}/>
                    {children}
                </motion.div>
            </motion.div>}
        </Portal>
    );
};

export default Modal;