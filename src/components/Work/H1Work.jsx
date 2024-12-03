import { motion } from 'framer-motion';

function H1Work() {
  return (
    <>
      <motion.h1
        className='text-5xl md:text-6xl mb-12 md:mb-8'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Various <span className='font-bold bg-gradient-green bg-clip-text text-transparent'>projects</span><br /> I&apos;ve <span className='font-bold bg-gradient-green bg-clip-text text-transparent'>work </span>on
      </motion.h1>

      <motion.p
        className='text-2xl md:text-3xl max-w-prose'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
      >
        Here are some of the projects I&apos;ve worked on. Feel free to check the code on my <a href='https://github.com/Big-pun' target='_blank' className='underline hover:text-green-500'>GitHub</a>.
      </motion.p>
    </>
  );
}

export default H1Work;