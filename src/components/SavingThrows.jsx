import React from "react";

const SavingThrows = (props) => {

  const saves = props.stats.filter(prof => {
    return prof.proficiency.index.includes('saving');
  });

  const displaySaves = (saves) => {
    const saveThrows = saves.map((save) => {
      return(
        <h4 className="saving-throw" key={save.proficiency.index}>{`${save.proficiency.name} : ${save.value}`}</h4>
      );
    });
    return saveThrows;
  };

  return(
    <div className="saving-box">
      {displaySaves(saves)}
    </div>
  );
};

export default SavingThrows;
