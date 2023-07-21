import React, {FC, PropsWithChildren} from 'react';

const SectionContainer: FC<PropsWithChildren> = ({children}) => {
    return (
        <section className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'>
            {children}
        </section>
    );
};

export default SectionContainer;