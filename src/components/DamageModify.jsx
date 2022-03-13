import React from "react";

const DamageModify = (props) => {
  //immune, resist, vulnerable, condition

  const ifBlank = (blank) => {
    if (blank.toString() === ''){
      blank = 'None';
    };
    return blank;
  };

  const displayConditions = (condition) => {
    const conditionArr = [];
    condition.map((condition)=>{
      conditionArr.push(condition.name);
    });
    return conditionArr.join(', ');
  };


  return(
    <>
      <div>Damage Immunities: {ifBlank(props.immune.join(', '))}</div>
      <div>Condition Immunities: {ifBlank(displayConditions(props.condition))}</div>
      <div>Damage Resistance: {ifBlank(props.resist.join(', '))}</div>
      <div>Damage Vulnerabilities: {ifBlank(props.vulnerable.join(', '))}</div>
    </>
  );
};

export default DamageModify;
