import { motion } from 'framer-motion';

function H1About() {
    return (
        <>
            <motion.h1
                className='text-5xl md:text-6xl mb-12 md:mb-8 '
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Let me <br/> <span className='font-bold bg-gradient-green bg-clip-text text-transparent'>introduce</span> myself
            </motion.h1>
            <motion.p
                className='text-2xl md:text-3xl max-w-prose'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 2 }}
            >
                Following over a decade of culinary experience, I&apos;ve chosen to pivot into a new career. During the 2020 pandemic, I took my first steps into coding with <a href='https://www.freecodecamp.org/' className='underline hover:text-green-500'>freeCodeCamp</a>, exploring foundational integrations.<br />
                In 2023, I expanded my skills through a specialized front-end development program at a reputable institution, further solidifying my passion for innovative web solutions.
            </motion.p>

        </>
    )
}

export default H1About