import { motion } from 'framer-motion'
import Avatar from '../../Images/Avatar.png'

function AvatarMotion() {
    return (
        <motion.img
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            src={Avatar} alt="Avatar" className='rounded-2xl' />
    )
}

export default AvatarMotion