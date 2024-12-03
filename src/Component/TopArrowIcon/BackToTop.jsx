import {motion, useAnimationControls, useScroll} from 'framer-motion'
import { useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
const isBrowser = () => typeof window !== 'undefined'; 

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
};

export function BackToTop() {
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if (latestValue > 0.5) {
                controls.start('show');
            } else {
                controls.start('hide');
            }
        });
    },[scrollYProgress,controls]);

    return (
        <motion.button
            className="btt "
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}
            >
            <FaArrowUp  style={{color: 'white'}}/>
        </motion.button>
    );
}