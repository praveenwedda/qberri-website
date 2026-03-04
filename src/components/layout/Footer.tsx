import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brandInfo}>
                        <h2 className={styles.logo}>Qberri<span className="text-gradient">.</span></h2>
                        <p className="text-lg">Engineering gravity-defying digital experiences.</p>
                    </div>
                    <div className={styles.links}>
                        <h3>Company</h3>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Work</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className={styles.links}>
                        <h3>Social</h3>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Qberri. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
