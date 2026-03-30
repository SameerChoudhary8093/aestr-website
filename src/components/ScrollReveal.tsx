'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    staggerChildren?: boolean;
    staggerDelay?: number;
    yOffset?: number;
}

export function ScrollReveal({
    children,
    className = '',
    delay = 0,
    duration = 0.8,
    staggerChildren = false,
    staggerDelay = 0.2,
    yOffset = 30
}: ScrollRevealProps) {
    if (staggerChildren) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: staggerDelay,
                            delayChildren: delay,
                        }
                    }
                }}
                className={className}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScrollRevealItem({ children, className = '', yOffset = 30 }: { children: ReactNode; className?: string; yOffset?: number }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
