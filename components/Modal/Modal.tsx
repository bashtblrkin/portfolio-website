import { motion } from 'framer-motion';
import React, {FC, PropsWithChildren} from 'react';

const Modal: FC<PropsWithChildren> = ({children}) => {
    return (
        <motion.div
            /*initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}*/
            className={'fixed w-full h-screen top-0 left-0 flex justify-center overflow-visible items-center xl:px-0 px-5 bg-primary bg-opacity-[0.8] z-50'}
        >
            {children}
        </motion.div>
    );
};

export default Modal;