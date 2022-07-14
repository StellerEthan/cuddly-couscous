import React from "react";

import "../css/Skills.css";

const Skills = (props) => {

  // TODO: Turn this into a table eventually

  const skills = props.stats.filter(prof => {
    return prof.proficiency.index.includes('skill');
  });

  const displaySaves = (skill) => {
    const skillList = skill.map((save) => {
      return(
        <div key={save.proficiency.index}>{`${save.proficiency.name} = ${save.value}`}</div>
      );
    });
    return skillList;
  };

  return(
    <div className="skill-box">
      {displaySaves(skills)}
    </div>
  );
};

export default Skills;
