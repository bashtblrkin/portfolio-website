import React, {FC, PropsWithChildren} from 'react';

const Modal: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={'fixed w-full h-screen top-0 left-0 flex justify-center items-center xl:px-0 px-5 z-10'}>
            {children}
        </div>
    );
};

export default Modal;