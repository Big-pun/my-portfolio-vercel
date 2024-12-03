import { motion } from 'framer-motion';
import Dev from '../../Images/Dev.svg';

function Logo() {
    return (
        <motion.div
            className='text-5xl md:text-6xl mb-12 md:mb-8'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 , duration: 3 }}>
            <img src={Dev} alt="Dev" />
        </motion.div>
    )
}

export default Logo;