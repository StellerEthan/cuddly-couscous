import React from "react";

const Senses = ({stats}) => {

  console.log(stats);

  const displaySenses = () => {
    const keys = Object.keys(stats);
    const moveTypes = keys.map((key, index) => {
      return(
        <div key={index}>{`${key}: ${stats[key]}`}</div>
      );
    });
    return moveTypes;
  };

  return(
    <>
      <h4>Senses:</h4>
      <dd>{displaySenses()}</dd>
    </>
  )
};

export default Senses;
