import {useEffect} from "react";

export const useBodyScrollLock = (modalOpen: boolean) => {
    useEffect(() => {
       /* const header = document.querySelector('header')
        if (modalOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = '8px'
            if (!header) return;
            header.style.marginRight = '8px'
        } else {
            document.body.style.overflow = ''
            document.body.style.paddingRight = ''
            if (!header) return;
            header.style.marginRight = ''
        }*/
    }, [modalOpen])
}