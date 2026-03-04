import AnimatedText from '@/components/ui/AnimatedText';
import styles from './page.module.css';

export default function Services() {
    const services = [
        { title: 'Software Engineering', desc: 'Custom tailored software solutions engineered to scale seamlessly as your business grows. We employ AI inside the core logic.' },
        { title: 'Mobile Apps', desc: 'Native and cross-platform applications with stunning UI and offline-first capabilities.' },
        { title: 'Mesmerizing Websites', desc: 'We build experiences like this one. Gravity-defying animations and perfect accessibility.' },
        { title: 'SEO Mastery', desc: 'Dominate search rankings with algorithm-proof strategies and high-quality content.' },
        { title: 'Social Media Marketing', desc: 'Viral campaigns that capture attention and convert audiences into fierce brand advocates.' },
        { title: 'AI Innovations', desc: 'Integration of LLMs and machine learning models to automate and revolutionize your workflow.' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <AnimatedText text="Our Services" className="heading-xl" el="h1" />
                <AnimatedText text="Everything you need to dominate the digital landscape." className="text-lg" el="p" />
            </header>
            <div className={styles.grid}>
                {services.map((service, i) => (
                    <div key={i} className={`glass-panel ${styles.card}`}>
                        <h2>{service.title}</h2>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
