import {useEffect} from "react";

export const useBodyScrollLock = (modalOpen: boolean) => {
    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [modalOpen])
}