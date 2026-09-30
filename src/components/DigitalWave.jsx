import { useEffect, useRef } from "react";
const DigitalWave = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;
        let time = 0;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = 350;
        };
        resizeCanvas();
        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.015;
            const lineCount = 18;
            const spacing = 18;
            for (let line = 0; line < lineCount; line++) {
                ctx.beginPath();
                const baseY = 80 + line * spacing;
                for (let x = 0; x <= canvas.width; x += 8) {
                    const distanceFromCenter =
                        Math.abs(x - canvas.width / 2);
                    const centerEffect = Math.max(
                        0,
                        1 - distanceFromCenter / (canvas.width * 0.5)
                    );
                    const wave =
                        Math.sin(x * 0.012 + time + line * 0.15) *
                        10 *
                        centerEffect;
                    const secondWave =
                        Math.sin(x * 0.005 - time * 1.5) *
                        6 *
                        centerEffect;
                    const y =
                        baseY +
                        wave +
                        secondWave;
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                const opacity =
                    0.08 +
                    (line / lineCount) * 0.15;
                ctx.strokeStyle =
                    `rgba(30, 110, 255, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
            animationFrameId =
                requestAnimationFrame(drawWave);
        };
        drawWave();
        const handleResize = () => {
            resizeCanvas();
        };
        window.addEventListener(
            "resize",
            handleResize
        );
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="digital-wave"
        />
    );
};
export default DigitalWave;