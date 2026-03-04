import AnimatedText from '@/components/ui/AnimatedText';
import styles from './page.module.css';
import React from 'react';

export default function Portfolio() {
    const projects = [
        { name: 'Oculus Shift', type: 'Web Experience', color: '#5200FF' },
        { name: 'Aura Analytics', type: 'SaaS Platform', color: '#00F0FF' },
        { name: 'Neon Dash', type: 'Mobile Game', color: '#8A2BE2' },
        { name: 'Zenith SEO', type: 'Marketing Campaign', color: '#00C3FF' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <AnimatedText text="Our Work" className="heading-xl" el="h1" />
                <AnimatedText text="A showcase of our most gravity-defying projects." className="text-lg" el="p" />
            </header>
            <div className={styles.grid}>
                {projects.map((proj, i) => (
                    <div key={i} className={styles.projectCard} style={{ '--hover-color': proj.color } as React.CSSProperties}>
                        <div className={styles.content}>
                            <h3>{proj.name}</h3>
                            <p>{proj.type}</p>
                        </div>
                        <div className={styles.overlay}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
