import React from "react";
import ExpenseTracker from "../project/ExpenseTracker";

const Project = () =>{
    return (
        <div className="flex justify-center mt-5">
            <div className="flex flex-col max-w-xl w-full px-4">
                <h4 className="text-3xl font-semibold">Projects</h4>
                <ExpenseTracker />
            </div>
        </div>
    )
};

export default Project;