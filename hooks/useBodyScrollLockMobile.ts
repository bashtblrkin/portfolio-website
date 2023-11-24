import {useCallback, useEffect, useState} from "react";

export const useBodyScrollLockMobile = (modalOpen: boolean) => {
    useEffect(() => {
        if (modalOpen) {
            document.body.style.position = 'relative'
            document.body.style.height = '100%'
            document.body.style.touchAction = 'none'
        } else {
            document.body.style.position = ''
            document.body.style.height = ''
            document.body.style.touchAction = ''
        }
    }, [modalOpen])
}