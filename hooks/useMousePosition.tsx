import {MutableRefObject, useEffect, useState} from "react";
import {is} from "@react-spring/shared";

interface MousePosition {
    x: number | null
    y: number | null
}

interface UseMousePositionReturnType {
    mousePosition: MousePosition
    isFocused: boolean
}

const useMousePosition = <T extends HTMLElement,>(ref: MutableRefObject<T | null>): UseMousePositionReturnType => {
    const [
        mousePosition,
        setMousePosition
    ] = useState<MousePosition>({ x: null, y: null });
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        const updateMousePosition = (event: HTMLElementEventMap["mousemove"]) => {
            const targetCoords = ref.current?.getBoundingClientRect()
            setMousePosition({ x: event.clientX - targetCoords.left, y: event.clientY - targetCoords.top});
            setIsFocused(true)
        };

        const handleMouseLeave = () => {
            setIsFocused(false)
        }
        if (!ref.current) return
        ref.current!.addEventListener('mousemove', updateMousePosition, {capture: true});
        ref.current!.addEventListener('mouseleave', handleMouseLeave)
    }, [ref]);

    return {
        mousePosition,
        isFocused
    };
};
export default useMousePosition;