import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    // hide cursor on mobile
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        return null; // Don't render or run effect on mobile devices
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorBorder = cursorBorderRef.current;

        // initial position
        gsap.set([cursor, cursorBorder], { 
            xPercent: -50,
            yPercent: -50,
        });

        const xTo = gsap.quickTo(cursor, "x", {
            duration: 0.2,
            ease: "power3.out"
        });

        const yTo = gsap.quickTo(cursor, "y", {
            duration: 0.2,
            ease: "power3.out"
        });

        const xToBorder = gsap.quickTo(cursorBorder, "x", {
            duration: 0.5,
            ease: "power3.out"
        });
        const yToBorder = gsap.quickTo(cursorBorder, "y", {
            duration: 0.5,
            ease: "power3.out"
        });

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            xTo(clientX);
            yTo(clientY);
            xToBorder(clientX);
            yToBorder(clientY);
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        document.addEventListener('mousedown', () => {
            gsap.to(cursor, { scale: 0.6, duration: 0.2 });
            gsap.to(cursorBorder, { scale: 0.6, duration: 0.2 });
        });

        document.addEventListener('mouseup', () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(cursorBorder, { scale: 1, duration: 0.2 });
        });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
            />
            <div
                ref={cursorBorderRef}
                className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[998] mix-blend-difference opacity-50"
            />
        </>
    )
}

export default CustomCursor