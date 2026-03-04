import AnimatedText from '@/components/ui/AnimatedText';
import styles from './page.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <AnimatedText text="Get in Touch" className="heading-xl" el="h1" />
                <AnimatedText text="Let's build something impossible together." className="text-lg" el="p" />
            </header>

            <div className={styles.content}>
                <form className={`glass-panel ${styles.form}`}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={6} required></textarea>
                    </div>

                    <button type="button" className={`gradient-button ${styles.submitBtn}`}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
