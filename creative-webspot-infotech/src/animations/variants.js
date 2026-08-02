export const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
};

export const staggerItem = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
};