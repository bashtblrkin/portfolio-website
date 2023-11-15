import {Dispatch, SetStateAction, useEffect, useState} from "react";

export const useVisibleDelay = (delay: number = 300): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(true)
        }, delay)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [delay])

    return [visible, setVisible]
}