import React from "react";
import About from "../body/About";
import Tech from "../body/Tech";

const Body = () => {

    return (
        <div className="flex-1 overflow-y-auto p-8">
            <About />
            <Tech />
            
        </div>
    )
};

export default Body;