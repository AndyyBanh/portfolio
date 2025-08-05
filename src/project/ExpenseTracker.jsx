import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const ExpenseTracker = () => {
    return (
        <div className="">
            <h4 className="font-semibold text-2xl">Expense Tracker</h4>
            <p className="text-xs text-gray-200">Fullstack web app that allows users to track inventory, sales, and profits.</p>
            <a
                className="flex hover:text-blue-500"
                aria-label="Expense Tracker"
                href=""
            >
                <FaGithubSquare />
                Github
            </a>
        </div>
    )
};

export default ExpenseTracker;