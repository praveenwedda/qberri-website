'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedButton({ href, children, className = '' }: AnimatedButtonProps) {
    return (
        <Link href={href} style={{ display: 'inline-block' }}>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`gradient-button ${className}`}
                style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    padding: '1rem 2.5rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px -10px rgba(0, 240, 255, 0.5)'
                }}
            >
                {children}
            </motion.div>
        </Link>
    );
}
