import AnimatedText from '@/components/ui/AnimatedText';
import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <AnimatedText text="Our Story" className="heading-xl" el="h1" />
                <AnimatedText text="Blurring the lines between art and code." className="text-lg" el="p" />
            </header>

            <div className={styles.content}>
                <div className={`glass-panel ${styles.panel}`}>
                    <h2>We are Qberri.</h2>
                    <p>
                        Established at the intersection of imagination and technology, we are a digital creative agency
                        that refuses to accept the mundane. We believe that every line of code, every pixel, and every
                        campaign is an opportunity to build something extraordinary.
                    </p>
                    <p>
                        By leveraging state-of-the-art AI, WebGL, and Next.js, we don't just build websites or apps—we
                        engineer interactive experiences that captivate users and redefine industry standards.
                    </p>
                </div>
            </div>
        </div>
    );
}
