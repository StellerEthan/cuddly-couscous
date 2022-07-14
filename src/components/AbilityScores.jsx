import React from "react";

import "../css/AbilityScores.css";

const AbilityScores = (props) => {
  return(
    <>
      <table className="ability-table">
        <tbody>
          <tr>
            <th className="ability-item">STR</th>
            <th className="ability-item">DEX</th>
            <th className="ability-item">CON</th>
            <th className="ability-item">INT</th>
            <th className="ability-item">WIS</th>
            <th className="ability-item">CHA</th>
          </tr>
           <tr>
            <td className="ability-item">{props.stats.strength}</td>
            <td className="ability-item">{props.stats.dexterity}</td>
            <td className="ability-item">{props.stats.constitution}</td>
            <td className="ability-item">{props.stats.intelligence}</td>
            <td className="ability-item">{props.stats.strength}</td>
            <td className="ability-item">{props.stats.strength}</td>
          </tr>
        </tbody>
      </table>
    </>
  )};

export default AbilityScores;
