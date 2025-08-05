import React from "react";
import SkillCard from "../tech/SkillCard";

const Tech = () => {
    return (
        <div className="flex justify-center mt-4">
            <div className="flex flex-col max-w-xl w-full px-4">
                <h4 className="text-3xl font-semibold">Technical Expertise</h4>
                {/* Languages */}
                <h5 className="mt-5  text-2xl">Languages</h5>
                <div className="flex flex-wrap mt-2.5 space-x-3">
                    <SkillCard name="Java" type="language"  />
                    <SkillCard name="JavaScript" type="language" />
                    <SkillCard name="Python" type="language" />
                </div>

                 {/* Framework */}
                <h5 className="mt-5  text-2xl">Framework</h5>
                <div className="flex flex-wrap mt-2.5 space-x-3">
                    <SkillCard name="Express.js" type="framework" />
                    <SkillCard name="React.js" type="framework" />
                </div>

                {/* Backend */}
                <h5 className="mt-5  text-2xl">Backend</h5>
                <div className="flex flex-wrap mt-2.5 space-x-3">
                    <SkillCard name="Node.js" type="backend" />
                    <SkillCard name="REST APIs" type="backend" />
                </div>

                {/* DB */}
                <h5 className="mt-5  text-2xl">Database</h5>
                <div className="flex flex-wrap mt-2.5 space-x-3">
                    <SkillCard name="MongoDB" type="database" />
                </div>

                {/* Tools */}
                <h5 className="mt-5  text-2xl">Tools</h5>
                <div className="flex flex-wrap mt-2.5 space-x-3">
                    <SkillCard name="Git" type="tools" />
                </div>
            </div>
        </div>
    )
};
export default Tech;
