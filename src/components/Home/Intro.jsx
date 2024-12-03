import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const TypeWritterIntro = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    
    const h1Timeout = setTimeout(() => {
      setShowIntro(true);
    }, 2000); // motion h1 + 1 sec

    return () => clearTimeout(h1Timeout);
  }, []);

  useEffect(() => {
    if (showIntro) {
      new Typewriter('#typewriter', {
        pauseFor: 2500,
        strings: ["Welcome to my portfolio <br/> I'm a student front-end developer"],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 50,
      });
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div id="typewriter" className='text-2xl md:text-3xl mb-8'></div>
      )}
    </>
  );
};

export default TypeWritterIntro;