import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsPersonArmsUp } from "react-icons/bs";
import { FaSuitcase, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? "text-xl text-green-500 px-3 py-2 underline flex items-center relative transition-all duration-500 ease-out transform scale-105"
      : "text-xl text-white px-3 py-2 flex items-center relative hover:text-green-500 transition-all duration-500 ease-out hover:scale-110";
  };
  
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav id="navbar" className="bg-transparent backdrop-blur-md lg:mb-16" aria-label="Main Navigation">
        <div className="container mx-auto flex justify-end md:justify-between items-center p-4">
          <div className="hidden md:flex md:items-center md:justify-between md:w-full md:ml-4">
            <NavLink to="/" className={getNavLinkClass} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaHome /> Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp /> About</NavLink>
            <NavLink to="/work" className={getNavLinkClass} aria-label="Work" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase /> Work</NavLink>
            <NavLink to="/contact" className={getNavLinkClass} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact /> Contact</NavLink>
          </div>
          <button className="md:hidden text-3xl items-end" onClick={toggleMenu} aria-label="Toggle Menu">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden flex flex-col items-center mt-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NavLink to="/" className={getNavLinkClass} onClick={closeMenu} aria-label="Home" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaHome /> Home</NavLink>
              <NavLink to="/about" className={getNavLinkClass} onClick={closeMenu} aria-label="About" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BsPersonArmsUp /> About</NavLink>
              <NavLink to="/work" className={getNavLinkClass} onClick={closeMenu} aria-label="Work" aria-current={({ isActive }) => isActive ? 'page' : undefined}><FaSuitcase /> Work</NavLink>
              <NavLink to="/contact" className={getNavLinkClass} onClick={closeMenu} aria-label="Contact" aria-current={({ isActive }) => isActive ? 'page' : undefined}><BiSolidContact /> Contact</NavLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;