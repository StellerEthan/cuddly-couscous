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
            <td>{props.stats.strength}</td>
            <td>{props.stats.dexterity}</td>
            <td>{props.stats.constitution}</td>
            <td>{props.stats.intelligence}</td>
            <td>{props.stats.strength}</td>
            <td>{props.stats.strength}</td>
          </tr>
        </tbody>
      </table>
    </>
  )};

export default AbilityScores;
