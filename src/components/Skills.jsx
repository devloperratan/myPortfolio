import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const skillsData = [
    { src: "./skills/html.png", alt: "HTML" },
    { src: "./skills/css.png", alt: "CSS" },
    { src: "./skills/js.png", alt: "JavaScript" },
    { src: "./skills/react.png", alt: "React" },
    { src: "./skills/nodejs.png", alt: "Node.js" },
    { src: "./skills/express-logo.png", alt: "Express.js" },
    { src: "./skills/mongodb.png", alt: "MongoDB" },
    { src: "./skills/mongodbCompass.png", alt: "MongoDB" },
    { src: "./skills/mongoose.png", alt: "MongoDB" },
    { src: "./skills/redux.png", alt: "SQL" },
    { src: "./skills/wordpress.png", alt: "WordPress" },
    { src: "./skills/angular.png", alt: "Angular" },
    { src: "./skills/Bootstrap.png", alt: "Bootstrap" },
    { src: "./skills/mui.png", alt: "Material-UI" },
    { src: "./skills/Mysql_logo.png", alt: "MySQL" },
    { src: "./skills/sql.svg", alt: "SQL" },
    { src: "./skills/scss.png", alt: "SCSS" },
    { src: "./skills/git.png", alt: "GIT" },
    { src: "./skills/github.png", alt: "GITHUB" },
];

const Skills = () => {
    const firstRowSkills = skillsData.slice(0, Math.ceil(skillsData.length / 2));
    const secondRowSkills = skillsData.slice(Math.ceil(skillsData.length / 2));

    return (
        <section className="skills-section" id="skills">
            <h2 className="skills-heading text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] marker">Skills</h2>
            <div className="skills-container">
                <div className="skills-row">
                    {firstRowSkills.map((skill, index) => (
                        <img key={index} src={skill.src} alt={skill.alt} className="skill-image" />
                    ))}
                </div>
                <div className="skills-row">
                    {secondRowSkills.map((skill, index) => (
                        <img key={index} src={skill.src} alt={skill.alt} className="skill-image" />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
