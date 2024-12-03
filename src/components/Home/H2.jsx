import { motion } from 'framer-motion'

function H2() {
    return (
        <>
        <motion.h2
                className='text-5xl mb-12 md:mb-8 mt-24'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 5 }}
            >
                Quick <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>introduction</span>
            <p className='text-xl md:text-2xl mt-8'>
                I am a web developer who loves to create websites and web applications. Currently following a front-end web development program, I&apos;ll soon be looking for a intership opportunity ... but that&apos;s not our subject here
            </p>
            </motion.h2>
        </>
    )
}

export default H2;