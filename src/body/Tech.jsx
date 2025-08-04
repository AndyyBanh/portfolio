import React from "react";
import Skills from "../tech/Skills";

const Tech = () => {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex flex-col max-w-xl w-full px-4">
                <h4 className="text-3xl font-semibold">Technical Expertise</h4>
                <Skills />
            </div>
        </div>
    )
};
export default Tech;
