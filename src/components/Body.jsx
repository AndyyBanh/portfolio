import React from "react";
import About from "../body/About";
import Tech from "../body/Tech";
import Project from "../body/Project";
import Education from "../body/Education";

const Body = () => {

    return (
        <div className="flex-1 overflow-y-auto p-8">
            <About />
            <Tech />
            <Project />
            <Education />
        </div>
    )
};

export default Body;