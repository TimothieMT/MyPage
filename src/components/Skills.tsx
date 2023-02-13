import React from "react";
import "../styles/skills.scss"
import SkillBar from "react-skillbars";

interface ISkill {
    type: string;
    level: number;
}

const SKILLS: ISkill[] = [
    {
        type: "JAVASCRIPT",
        level: 80
    },
    {
        type: "TYPESCRIPT",
        level: 85
    },
    {
        type: "REACT",
        level: 80
    },
    {
        type: "PYTHON",
        level: 60
    },
    {
        type: "EXPRESS.JS",
        level: 75
    },
    {
        type: "NODE.JS",
        level: 90
    },
    {
        type: "HTML",
        level: 90
    },
    {
        type: "SASS",
        level: 85
    },
    {
        type: "GIT",
        level: 75
    },
];

const Skills = () => {
    return (
          <div  className={'mySkills'}>
              <p>Fähigkeiten</p>

              <div className="skills-container">
                  <SkillBar
                      skills={SKILLS}
                      animationDuration={2000}
                      animationDelay={1000}
                  />
              </div>
          </div>

    );
};

export default Skills;
