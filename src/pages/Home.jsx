import TypeWritterIntro from '../components/Home/Intro';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import H1 from '../components/Home/H1';
import H2 from '../components/Home/H2';
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import Logo from '../components/Home/Logo';

function Home() {

    const scrollToTextSection = () => {
        document.getElementById('portfolioStack').scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <div className='container mx-auto p-4'>
            <section className='grid grid-cols-12 lg:min-h-screen'>
                <div className='col-span-12 md:col-span-7 md:col-start-2'>
                    <H1 />
                    <div className='relative'>
                        <div className='h-16 md:h-20'>
                            <TypeWritterIntro />
                        </div>
                        <H2 className='absolute top-0 left-0' />
                    </div>
                </div>

                <div className='col-span-6 col-start-4 md:col-span-3 md:col-start-9 mb-12 md:mb-0 md:mt-24'>
                    <Logo/>
                </div>

                <div className='col-span-12 text-center hidden lg:block lg:-mt-32'>
                    <button
                        className='text-green-500 text-5xl md:text-9xl animate-pulse items-center'
                        aria-label="Scroll to section 2"
                        onClick={scrollToTextSection}
                    >
                        <MdOutlineKeyboardDoubleArrowDown />
                    </button>
                </div>
            </section>

            <section id='portfolioStack' className='grid grid-cols-12 pt-8 lg:-my-16'>
                <div className='col-span-12 md:col-span-10 md:col-start-2 xl:col-span-8 xl:col-start-3 mb-36'>
                    <div className='bg-slate-700 bg-opacity-50 p-8 rounded-lg'>
                        <h2 className='text-5xl mb-8'>
                            How this <span className='bg-gradient-green bg-clip-text text-transparent font-bold'>portfolio</span> was built
                        </h2>
                        <p className='text-xl md:text-2xl mb-8'>
                            This portfolio was built using modern web development technologies to ensure a responsive and dynamic user experience. Here are some key aspects of its construction:
                        </p>
                        <ul className='list-disc list-inside text-xl md:text-2xl mb-8'>
                            <li><span className='font-bold text-green-500'>React</span> The entire application is built using React.</li>
                            <li><span className='font-bold text-green-500'>Vite</span> is used as the build tool, offering fast development and optimized production builds.</li>
                            <li><span className='font-bold text-green-500'>React Router</span> is used for navigation.</li>
                            <li><span className='font-bold text-green-500'>Tailwind CSS</span> is used for styling, providing a utility-first approach that allows for rapid and responsive development.</li>
                            <li><span className='font-bold text-green-500'>tsParticles</span> is used to create the stary night background</li>
                            <li><span className='font-bold text-green-500'>Framer motion</span> is used for animations.</li>
                            <li><span className='font-bold text-green-500'>Typewritter</span> is used for the typewritter effect.</li>
                            <li><span className='font-bold text-green-500'>React Icons</span> Icons are provided by the React Icons library.</li>
                            <li><span className='font-bold text-green-500'>Charts.js</span> The Pie Charts is created using the Chart.js library.</li>
                            <li><span className='font-bold text-green-500'>GitHub API</span> is used to fetch the languages used in my repositories.</li>
                            <li><span className='font-bold text-green-500'>Email.js</span> is used to send emails from the contact form.</li>
                        </ul>

                        <p className='text-lg md:text-xl'>
                            Feel free to explore the code and reach out if you have any questions or suggestions!
                        </p>
                        <div className="flex justify-center items-center">
                            <a className='text-xl md:text-2xl mx-auto text-center bg-green-500 px-6 my-4 border-2 border-gray-300 rounded-lg text-black animate-pulse' href='https://github.com/Big-pun/my-portfolio' target='_blank'>
                                <RiGitRepositoryCommitsLine />
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;