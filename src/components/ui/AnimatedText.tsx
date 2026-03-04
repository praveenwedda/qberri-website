'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    el?: React.ElementType;
    once?: boolean;
}

export default function AnimatedText({ text, className = '', el: Wrapper = 'h1', once = true }: AnimatedTextProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.02, delayChildren: 0.1 },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-50px" }}
            className={className}
        >
            <Wrapper>
                {text.split(' ').map((word, index) => (
                    <span key={index} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                        {word.split('').map((char, charIndex) => (
                            <motion.span key={charIndex} variants={childVariants} style={{ display: 'inline-block' }}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </Wrapper>
        </motion.div>
    );
}
