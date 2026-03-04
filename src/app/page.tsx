import AnimatedText from '@/components/ui/AnimatedText';
import AnimatedButton from '@/components/ui/AnimatedButton';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <AnimatedText text="Gravity-Defying Creativity." className="heading-xl" el="h1" />
          <AnimatedText
            text="We don't just build digital experiences. We engineer stunning reality-bending software, apps, and brands fueled by AI."
            className="text-lg"
            el="p"
          />
          <div className={styles.heroActions}>
            <AnimatedButton href="/services">Explore Our Work</AnimatedButton>
            <AnimatedButton href="/contact" className={styles.secondaryBtn}>Get in Touch</AnimatedButton>
          </div>
        </div>
      </section>

      <section className={styles.servicesTeaser}>
        <div className="container">
          <AnimatedText text="Our Expertise" className="heading-lg" el="h2" />
          <div className={styles.grid}>
            <div className={`glass-panel ${styles.card}`}>
              <h3>Software Engineering</h3>
              <p>Scalable, robust, AI-driven applications built for the future and designed for performance.</p>
            </div>
            <div className={`glass-panel ${styles.card}`}>
              <h3>Stunning Websites</h3>
              <p>Converting visitors into loyal customers through mesmerizing UX/UI and dynamic animations.</p>
            </div>
            <div className={`glass-panel ${styles.card}`}>
              <h3>Digital Marketing</h3>
              <p>Data-driven SEO & Social Media strategies that dominate the feed and elevate your brand.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
