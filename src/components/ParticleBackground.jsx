import { useEffect, useRef } from "react";
const ParticleBackground = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // -----------------------------------------
        // CANVAS SIZE
        // -----------------------------------------
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        // -----------------------------------------
        // MOUSE
        // -----------------------------------------
        const mouse = {
            x: 0,
            y: 0,
        };
        const handleMouseMove = (event) => {
            // Convert mouse position to -1 to +1
            mouse.x =
                (event.clientX / canvas.width - 0.5) * 2;
            mouse.y =
                (event.clientY / canvas.height - 0.5) * 2;
        };
        window.addEventListener("mousemove", handleMouseMove);
        // -----------------------------------------
        // PARTICLES
        // -----------------------------------------
        const particles = [];
        const sphereParticles = [];
        const particleCount = 200;
        const sphereParticleCount = 1200;
        // -----------------------------------------
        // BACKGROUND PARTICLES
        // -----------------------------------------
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 0.5,
                speedX: Math.random() * 0.4 - 0.2,
                speedY: Math.random() * 0.4 - 0.2,
            });
        }
        // -----------------------------------------
        // SPHERE PARTICLES
        // -----------------------------------------
        const sphereRadius = 220;
        for (let i = 0; i < sphereParticleCount; i++) {
            const theta =
                Math.random() * Math.PI * 2;
            const phi =
                Math.acos(2 * Math.random() - 1);
            const x =
                sphereRadius *
                Math.sin(phi) *
                Math.cos(theta);
            const y =
                sphereRadius *
                Math.sin(phi) *
                Math.sin(theta);
            const z =
                sphereRadius *
                Math.cos(phi);
            sphereParticles.push({
                x,
                y,
                z,
                size: Math.random() * 1.5 + 0.5,
            });
        }
        // -----------------------------------------
        // DRAW BACKGROUND PARTICLE
        // -----------------------------------------
        const drawParticle = (particle) => {
            ctx.beginPath();
            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );
            ctx.fillStyle =
                "rgba(70, 140, 255, 0.9)";
            ctx.fill();
        };
        // -----------------------------------------
        // DRAW SPHERE PARTICLE
        // -----------------------------------------
        const drawSphereParticle = (particle) => {
            const centerX = canvas.width / 2;
            const centerY =
                canvas.height / 2.3;
            // Controls the 3D perspective
            const perspective = 500;
            const scale =
                perspective /
                (perspective + particle.z);
            const x =
                centerX +
                particle.x * scale;
            const y =
                centerY +
                particle.y * scale;
            const size =
                particle.size * scale;
            ctx.beginPath();
            ctx.arc(
                x,
                y,
                Math.max(size, 0.2),
                0,
                Math.PI * 2
            );
            // Particles closer to viewer are brighter
            const brightness = Math.max(
                0.25,
                Math.min(1, scale)
            );
            ctx.fillStyle =
                `rgba(40, 160, 255, ${brightness})`;
            ctx.fill();
        };
        // -----------------------------------------
        // ANIMATION VARIABLES
        // -----------------------------------------
        let animationFrameId;
        let rotation = 0;
        let time = 0;
        let smoothMouseX = 0;
        let smoothMouseY = 0;
        // -----------------------------------------
        // ANIMATION
        // -----------------------------------------
        const animate = () => {
            // Clear previous frame
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );
            // -------------------------------------
            // BACKGROUND PARTICLE MOVEMENT
            // -------------------------------------
            particles.forEach((particle) => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                // Wrap particles around screen
                if (particle.x < 0) {
                    particle.x = canvas.width;
                }
                if (particle.x > canvas.width) {
                    particle.x = 0;
                }
                if (particle.y < 0) {
                    particle.y = canvas.height;
                }
                if (particle.y > canvas.height) {
                    particle.y = 0;
                }
                drawParticle(particle);
            });
            // -------------------------------------
            // SMOOTH MOUSE MOVEMENT
            // -------------------------------------
            smoothMouseX +=
                (mouse.x - smoothMouseX) * 0.03;
            smoothMouseY +=
                (mouse.y - smoothMouseY) * 0.03;
            // -------------------------------------
            // AUTOMATIC ROTATION
            // -------------------------------------
            rotation += 0.003;
            // -------------------------------------
            // BREATHING EFFECT
            // -------------------------------------
            time += 0.02;
            const breathe =
                1 + Math.sin(time) * 0.025;
            // -------------------------------------
            // SPHERE
            // -------------------------------------
            sphereParticles.forEach((particle) => {
                // Automatic rotation around Y axis
                const cos =
                    Math.cos(rotation);
                const sin =
                    Math.sin(rotation);
                const rotatedX =
                    particle.x * cos -
                    particle.z * sin;
                const rotatedZ =
                    particle.x * sin +
                    particle.z * cos;
                // -----------------------------------
                // MOUSE TILT
                // -----------------------------------
                const tiltX =
                    smoothMouseY * 0.35;
                const tiltY =
                    smoothMouseX * 0.35;
                const cosTiltX =
                    Math.cos(tiltX);
                const sinTiltX =
                    Math.sin(tiltX);
                const tiltedY =
                    particle.y * cosTiltX -
                    rotatedZ * sinTiltX;
                const tiltedZ =
                    particle.y * sinTiltX +
                    rotatedZ * cosTiltX;
                // -----------------------------------
                // DRAW FINAL PARTICLE
                // -----------------------------------
                drawSphereParticle({
                    ...particle,
                    x:
                        (rotatedX + tiltY * 30) *
                        breathe,
                    y:
                        tiltedY *
                        breathe,
                    z:
                        tiltedZ *
                        breathe,
                });
            });
            // Run next animation frame
            animationFrameId =
                requestAnimationFrame(animate);
        };
        animate();
        // -----------------------------------------
        // RESIZE
        // -----------------------------------------
        const handleResize = () => {
            setCanvasSize();
        };
        window.addEventListener(
            "resize",
            handleResize
        );
        // -----------------------------------------
        // CLEANUP
        // -----------------------------------------
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
            window.removeEventListener(
                "resize",
                handleResize
            );
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="particle-canvas"
        />
    );
};
export default ParticleBackground;