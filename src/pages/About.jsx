import { Suspense, lazy } from 'react';
import Avatar from '../Images/Avatar.png';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Hangman from '../components/About/Hangman';


const Icons = lazy(() => import('../components/About/Icons'));
const H1About = lazy(() => import('../components/About/H1About'));

const scrollToTextSection = () => {
  document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })
};

function About() {
  return (
    <div className='container mx-auto p-4'>
      <section id='section1' className='grid grid-cols-12 md:min-h-screen'>
        <div className='col-span-12 md:col-span-6 md:col-start-2'>
          <Suspense fallback={<div>Loading...</div>}>
            <H1About />
          </Suspense>
        </div>

        <div className='col-span-6 col-start-4 md:row-start-1 row-start-3 md:col-span-3 md:col-start-9 my-8 md:mt-40'>
          <img src={Avatar} alt="Avatar" className='rounded-2xl' />
        </div>

        <div className='col-span-12 text-center hidden lg:block -mt-40'>
          <button
            className='text-green-500 text-5xl md:text-9xl animate-pulse items-center'
            aria-label="Scroll to section 2"
            onClick={scrollToTextSection}
          >
            <MdOutlineKeyboardDoubleArrowDown />
          </button>
        </div>

      </section>

      <section id='section2' className='grid grid-cols-12 md:min-h-screen pt-8 lg:-my-16'>
        <div className='col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3'>
          <h2 className='text-5xl mb-12 md:mb-8'>
            What I&apos;m <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>focusing</span> on
          </h2>
          <p className='text-xl md:text-2xl mb-4 md:mb-8 max-w-prose'>
            Currently, my primary focus is on <span className='text-green-500 font-bold'>front-end development</span>, specializing in <span className='text-green-500 font-bold'>React and Vite</span>.<br/> I thrive to create dynamic, responsive, and user-centric interfaces that provide seamless experiences across devices. My approach emphasizes building
            <span className='text-green-500 font-bold'> clean</span>, modular
            <span className='text-green-500 font-bold'> code</span> that ensures both high
            <span className='text-green-500 font-bold'> readability</span> and
            <span className='text-green-500 font-bold'> maintainability</span>.</p>
          <br />
          <p className='text-xl md:text-2xl mb-8'>
            Additionally, I&apos;m expanding my expertise into full-stack development, with Node.js and Next.js.
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <Icons />
          </Suspense>

        </div>

        <div className='col-span-12 md:col-span-10 md:col-start-2 mt-12 '>
        <h2 className='text-5xl mb-12 md:mb-8'>
            Let&apos;s play a <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>game</span></h2>
          <Hangman />
        </div>

      </section>
    </div>
  );
}

export default About;