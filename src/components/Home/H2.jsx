import { motion } from 'framer-motion'

function H2() {
    return (
        <>
        <motion.h2
                className='text-5xl mb-12 md:mb-8 mt-24'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 3.5 }}
            >
                Quick <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>introduction</span>
            <p className='text-xl md:text-2xl mt-8'>
                I am a web developer who loves to create websites and web applications. Currently following a front-end web development program, I&apos;m currently looking for a intership opportunity to learn and grow as a developer. I&apos;m passionate about learning new technologies and building projects.<br/>Send me a message if you want to work together or just to say hi!
            </p>
            </motion.h2>
        </>
    )
}

export default H2;