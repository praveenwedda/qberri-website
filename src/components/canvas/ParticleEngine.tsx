'use client';
import { useEffect, useRef } from 'react';
import styles from './ParticleEngine.module.css';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    baseX: number;
    baseY: number;
    density: number;
    color: string;
}

export default function ParticleEngine() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 120,
            isDown: false,
        };

        const colors = ['#5200FF', '#00F0FF', '#8A2BE2', '#00C3FF', '#ffffff'];

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particlesArray = [];
            const numberOfParticles = Math.min((canvas.width * canvas.height) / 8000, 300); // Limit max particles for performance
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const vx = (Math.random() - 0.5) * 0.5;
                const vy = (Math.random() - 0.5) * 0.5;
                const radius = Math.random() * 2 + 0.5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                particlesArray.push({ x, y, vx, vy, radius, baseX: x, baseY: y, density: (Math.random() * 30) + 1, color });
            }
        };

        const drawParticle = (p: Particle) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        };

        const updateParticle = (p: Particle) => {
            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            // If mouse is down, it repels much harder
            const interactForce = mouse.isDown ? force * 10 : force * 3;

            const directionX = forceDirectionX * interactForce * p.density;
            const directionY = forceDirectionY * interactForce * p.density;

            if (distance < mouse.radius) {
                p.x -= directionX;
                p.y -= directionY;
            } else {
                if (p.x !== p.baseX) {
                    const rdx = p.x - p.baseX;
                    p.x -= rdx / 20;
                }
                if (p.y !== p.baseY) {
                    const rdy = p.y - p.baseY;
                    p.y -= rdy / 20;
                }
            }

            // Continuous slow drifting
            p.x += p.vx;
            p.y += p.vy;
            p.baseX += p.vx;
            p.baseY += p.vy;

            // Wrap around screen edges
            if (p.baseX < 0) p.baseX = canvas.width;
            if (p.baseX > canvas.width) p.baseX = 0;
            if (p.baseY < 0) p.baseY = canvas.height;
            if (p.baseY > canvas.height) p.baseY = 0;
        };

        const connectParticles = () => {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        opacityValue = 1 - distance / 120;
                        ctx.strokeStyle = `rgba(0, 240, 255, ${opacityValue * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                updateParticle(particlesArray[i]);
                drawParticle(particlesArray[i]);
            }
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                init();
            }, 200);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleMouseDown = () => { mouse.isDown = true; };
        const handleMouseUp = () => { mouse.isDown = false; };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
