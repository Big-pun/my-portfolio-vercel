import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md'
import { motion } from 'framer-motion'


function DoubleArrow() {
    return (
        <motion.div
            className='text-green-500 text-5xl md:text-9xl animate-pulse items-center'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3 }}
        >
            <MdOutlineKeyboardDoubleArrowDown />
        </motion.div>
    )
}

export default DoubleArrow