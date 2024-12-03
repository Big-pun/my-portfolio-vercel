import DBZKakarot from '../../Images/DBZKakarot.png';
import TRS from '../../Images/TheRollingStoners.png';
import Campings from '../../Images/Campings.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
            <h2 className='text-4xl bg-gradient-green bg-clip-text text-transparent font-bold mb-4'>Websites</h2>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className='bg-slate-600 bg-opacity-50 rounded-lg'>
                        <div className="flex items-center gap-12 p-4 h-96 ">
                            <div className='flex w-1/3 mx-auto max-h-full'>
                                <img src={project.imageUrl} alt={project.title} />
                            </div>
                            <div className='flex flex-col gap-8 '>
                                <h2 className='text-2xl font-bold text-green-500'>{project.title}</h2>
                                <p className='max-w-prose text-lg'>{project.description}</p>


                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="rounded-lg relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-500 before:ease-out hover:shadow-green-600 hover:before:h-56 hover:before:w-56">
                                    <span className="relative z-10">See project</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default Projects