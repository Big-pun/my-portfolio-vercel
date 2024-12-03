import { motion } from 'framer-motion';

function H1Contact() {
    return (
        <>
            <motion.h1
                className='text-5xl md:text-6xl mb-12 md:mb-8'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >How to <span className='font-bold bg-gradient-green bg-clip-text text-transparent'>reach</span> me</motion.h1>
            <motion.p
                className='text-2xl md:text-3xl max-w-prose'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
            >
                Email me at <a href='mailto:adrienthomas419@gmail.com' className='hover:text-green-500 font-bold underline'>adrienthomas419@gmail.com
                </a><br />
            </motion.p>
        </>
    )
}

export default H1Contact