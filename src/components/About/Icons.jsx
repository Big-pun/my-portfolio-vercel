import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconContext } from 'react-icons';
import { SiNextdotjs } from "react-icons/si";
import { motion } from 'framer-motion';



function Icons() {
    return (
        <div className='flex flex-row flex-wrap justify-evenly gap-4 md:justify-around z-10'>
            <IconContext.Provider value={{ color: 'orange', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                   
                >
                    <FaHtml5 />
                </motion.div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'blue', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}

                >
                    <FaCss3Alt />
                </motion.div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#0481a2', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}

                >
                    <FaReact />
                </motion.div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'yellow', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}

                >
                    <IoLogoJavascript />
                </motion.div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#42bdf0', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}

                >
                    <RiTailwindCssFill />
                </motion.div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: 'white', size: 50 }}>
                <motion.div
                    className="border-2 border-gray-300 p-2 rounded-lg"
                    whileHover={{ scale: 1.2, rotate: 360, backgroundColor: '#d6dae1' }}
                    transition={{ type: 'spring', stiffness: 300 }}

                >
                    <SiNextdotjs />
                </motion.div>
            </IconContext.Provider>
        </div>
    );
}

export default Icons;