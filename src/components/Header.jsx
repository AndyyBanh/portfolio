import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#181818] p-8 overflow-y-auto ">
            <h2 className="font-bold text-3xl text-white">Andy Banh</h2>
            <p className="text-gray-400">Full Stack Web Developer</p>
            <p className="text-xs text-gray-400 mt-1.5">📍Toronto, Canada 🇨🇦</p>

            {/* Links + icons */}
            <div className="flex flex-col mt-4">
                <div className="flex gap-1.5">
                    <a 
                        className="border px-2 rounded text-white hover:underline hover:text-gray-500"
                        aria-label="Resume"
                    >
                        Resume
                    </a>
                    <a 
                        className="text-3xl flex items-center hover:text-gray-500"
                        aria-label="Linkedin"
                        href="https://www.linkedin.com/in/andy-banh-a643a0278"
                    >
                        <AiOutlineLinkedin />
                    </a>

                    <a 
                        className="text-3xl flex items-center hover:text-gray-500"
                        aria-label="Github"
                        href="https://github.com/AndyyBanh"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
                <a
                    className="w-fit border font-semibold hover:text-gray-500 px-2 text-white rounded mt-4"
                    href="mailto:andybanhab@gmail.com"
                >
                    Get in Touch
                </a>
                
            </div>
        </div>
    )
};

export default Header;