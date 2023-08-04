import React, {FC, PropsWithChildren} from 'react';

const Modal: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={'fixed w-full h-screen top-0 left-0 flex justify-center items-center'}>
            {children}
        </div>
    );
};

export default Modal;