import React, {FC, PropsWithChildren, useEffect, useRef, useState} from 'react';
import {createPortal} from "react-dom";

const Portal: FC<PropsWithChildren> = ({children}) => {

    const ref = useRef<HTMLBodyElement | null>(null)
    const [mounted, setMounted] = useState(false)


    useEffect(() => {
        ref.current = document.querySelector("body")
        setMounted(true)

        return () => setMounted(false)
    }, [])

    return (mounted && ref.current)
        ? createPortal(children,
            ref.current)
        : null
};

export default Portal;