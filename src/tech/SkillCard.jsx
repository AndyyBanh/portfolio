import React from "react";

const backgroundColor = {
    language: "bg-blue-600",
    framework: "bg-gray-600",
    backend: "bg-red-600",
    database: "bg-green-600",
    tools: "bg-yellow-600",
};

const textColor = {
    language: "text-blue-200",
    framework: "text-gray-200",
    backend: "text-red-200",
    database: "text-green-200",
    tools: "text-yellow-200",

};
const SkillCard = ({ name, type }) => {
    const bgColor = backgroundColor[type?.toLowerCase()];
    const textBg = textColor[type?.toLowerCase()];

    return (
        <div className={`rounded-2xl ${bgColor} w-fit px-2.5`}>
           <p className={`${textBg} font-medium`}>{name}</p>
        </div>
    )
};

export default SkillCard;