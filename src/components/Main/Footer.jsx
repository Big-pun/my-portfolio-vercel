import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className="">
                {/* Footer Content */}
                <div className=" container mx-auto flex flex-col space-y-2 p-2 md:flex-row justify-around items-center text-gray-300 z-20 mt-12">
                    <div className="p-1 rounded-lg">Designed and Developed by Adrien Thomas</div>
                    <div className="p-1 rounded-lg">Copyright © 2024 AT</div>
                    <div className="flex flex-row space-x-4 text-3xl  p-1 rounded-lg">
                        <a
                            href="https://github.com/Big-pun"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaSquareGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/adrien-thomas-a06b61307"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Cityscape */}
                <div className="w-full h-20 bg-gradient-to-t from-gray-900 to-transparent z-10">
                    <div className="container mx-auto flex justify-around items-end h-full ">
                        <div className="building w-7 h-8 bg-gray-700 relative">
                            <div className="roof-1"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-10 h-16 bg-gray-600 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-6 h-12 bg-gray-800 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-12 h-12 bg-gray-800 relative">
                            <div className="roof-2"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-8 h-16 bg-gray-700 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-4 h-10 bg-gray-600 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-12 h-14 bg-gray-800 relative">
                            <div className="roof-2"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-7 h-8 bg-gray-700 relative">
                            <div className="roof-1"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-10 h-16 bg-gray-600 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                        <div className="building w-6 h-12 bg-gray-800 relative">
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                            <div className="window"></div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
