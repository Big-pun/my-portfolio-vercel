import DBZKakarot from '../../Images/DBZKakarot.png';
import TRS from '../../Images/TheRollingStoners.png';
import Campings from '../../Images/Campings.png';
import Library from '../../Images/Library.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';


function Projects() {
        const projects = [

            {
                title: 'The Rolling Stoners',
                description: '"The Rolling Stoners" is a showcase website for a Brazilian Jiu-Jitsu club. Built with HTML, CSS, JavaScript, and Tailwind CSS, it includes features like a dark mode, three forms: one for a newsletter, one for membership subscriptions, and a contact form. It also utilizes various Tailwind components such as a carousel, CTA sections, cards, and an accordion for a clean, modern design. It`s also possible to install the site as a PWA and a service worker is included for offline use.',
                imageUrl: TRS,
                link: 'https://big-pun.github.io/TP-Final_Adrien-Thomas/'
            },
            {
                title: 'DBZ Kakarot',
                description: 'The site is built using HTML, CSS, and JavaScript, and features a database of 20 characters from the game. Initially, the idea was to use an API, but since none existed in French, I translated the data found online and created the database using JSON. Users can collect and display detailed information about each character on the website.',
                imageUrl: DBZKakarot,
                link: 'https://big-pun.github.io/TP1_ThomasAdrien/'
            },
            {
                title: 'Campings',
                description: 'This project is built with PHP and MySQL, and it allows users to search for campsites by region. The site features a list of campsites, a listing by stars and a other listing by possible experiences. Users can also search for campsites by region. The site also includes a section with recipes for camping meals. User can update recipes and add new ones.',
                imageUrl: Campings,
                link: 'http://adrienthomas.free.nf/?i=1'
            },
            {
                title: 'Library',
                description: 'This project is built with Vue.JS and allows users to manage a collection of books. The site features a search function to quickly find books by title or author from the Google Books API. Users can add and delete books from their collection and mark it as read. User can see the details of a book when it has been added to the collection.',
                imageUrl: Library,
                link: 'https://big-pun.github.io/Evaluation-2---Adrien-Thomas/'
            }
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true
        };


        return (
                        <>
                <motion.div 
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 3 }}>
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div key={index} className='bg-slate-600 bg-opacity-50 rounded-lg mt-4'>
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 p-4 h-auto">
                                    <div className='flex w-full mx-auto max-h-full'>
                                        <img src={project.imageUrl} alt={project.title} className='w-full h-auto object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-4 md:gap-8'>
                                        <h2 className='text-xl md:text-2xl font-bold text-green-500'>{project.title}</h2>
                                        <p className='text-base md:text-lg'>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded-lg relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                                            <span className="relative z-10">See project</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </>
        );
    }

export default Projects