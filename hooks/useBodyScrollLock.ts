import {useCallback, useEffect, useState} from "react";

export const useBodyScrollLock = (modalOpen: boolean) => {
    useEffect(() => {
        if (modalOpen) {
            document.body.style.position = 'fixed'
            console.log(scrollY)
            document.body.style.top = `-${window.scrollY}px`
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [modalOpen])
}