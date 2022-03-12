import React from "react";

const AbilityScores = (props) => {
  return(
    <>
      <table>
        <tbody>
          <tr>
            <th>STR</th>
            <th>DEX</th>
            <th>CON</th>
            <th>INT</th>
            <th>WIS</th>
            <th>CHA</th>
          </tr>
           <tr>
            <th>{props.stats.strength}</th>
            <th>{props.stats.dexterity}</th>
            <th>{props.stats.constitution}</th>
            <th>{props.stats.intelligence}</th>
            <th>{props.stats.strength}</th>
            <th>{props.stats.strength}</th>
          </tr>
        </tbody>
      </table>
    </>
  )};

export default AbilityScores;