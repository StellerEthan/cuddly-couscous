import React from "react";

const SavingThrows = (props) => {

  const saves = props.stats.filter(prof => {
    return prof.proficiency.index.includes('saving');
  });

  console.log('saves', saves);

  const displaySaves = (saves) => {
    const saveThrows = saves.map((save) => {
      console.log('displaySaves', save);
      return(
        <div key={save.proficiency.index}>{`${save.proficiency.name} : ${save.value}`}</div>
      );
    });
    return saveThrows;
  };

  return(
    <>
      {displaySaves(saves)}
    </>
  );
};

export default SavingThrows;
