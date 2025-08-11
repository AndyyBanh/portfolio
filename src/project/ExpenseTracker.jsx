import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const ExpenseTracker = () => {
    return (
        <div className="mt-5 outline rounded-2xl">
            <div className="p-5">
                <h4 className="font-semibold text-2xl">Expense Tracker</h4>
                <p className="text-xs text-gray-200">Fullstack web app that allows users to track inventory, sales, and profits.</p>
                <div className="flex space-x-2.5">
                    <div className="mt-2 rounded-2xl bg-gray-700 w-fit px-1.5">
                        <p className="text-xs">React</p>
                    </div>
                    <div className="mt-2 rounded-2xl bg-gray-700 w-fit px-1.5">
                        <p className="text-xs">Node.js</p>
                    </div>
                    <div className="mt-2 rounded-2xl bg-gray-700 w-fit px-1.5">
                        <p className="text-xs">Express.js</p>
                    </div>
                    <div className="mt-2 rounded-2xl bg-gray-700 w-fit px-1.5">
                        <p className="text-xs">MongoDB</p>
                    </div>
                </div>
            </div>
            
            <a
                className="flex gap-1.5 hover:text-blue-500 mt-5 p-5" 
                aria-label="Expense Tracker"
                href="https://github.com/AndyyBanh/expense-tracker"
            >
                <FaGithubSquare />
                Github
            </a>
        </div>
    )
};

export default ExpenseTracker;