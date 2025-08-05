import React from "react";

const Education = () => {
    return (
        <div className="flex justify-center mt-5">
            <div className="flex flex-col max-w-xl w-full px-4">
                <h4 className="text-3xl font-semibold">Education</h4>
                <div className="card flex items-center space-x-5">
                     <img 
                        src="https://oappa.ca/wp-content/uploads/2019/07/YorkULogo_Ver_rgb_square.jpg" 
                        alt="Yorku logo" 
                        className="rounded-full w-16 h-16 "
                    />
                    <div>
                        <h5 className="font-medium">York University</h5>
                        <p className="text-xs text-gray-200">BSC Honours Computer Science</p>
                        <p className="text-xs text-gray-400">2024-Present</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
};

export default Education;