import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../util/constants";
import AbilityScores from "../components/AbilityScores";
import DamageModify from "../components/DamageModify";
import Forms from "../components/Forms";
import SavingThrows from "../components/SavingThrows";
import Senses from "../components/Senses";
import Skills from "../components/Skills";
import Actions from "../components/Actions";

import "../css/MonsterStats.css";

const MonsterStats = () => {
  const { monsterIndex } = useParams();
  const [monster, setMonster] = useState();

  useEffect(()=>{
    fetch(`${API_URL}/monsters/${monsterIndex}`)
      .then(response => response.json())
      .then(response => {
        console.log("monster load in", response);
        setMonster(response);
      })
      .catch(error => console.error(error))
  }, [monsterIndex]);


  const monsterMove = (movement) => {
    const keys = Object.keys(movement);
    const moveTypes = keys.map((key, index) => {
      return(
        <ul key={index}><div>{`${key}: ${movement[key]}`}</div></ul>
      );
    });
    return moveTypes;
  };

  const ifBlank = (blank) => {
    if (blank === null){
      blank = 'None';
    };
    return blank;
  };


  // TODO: senses

  const displayMonsterStats = () => {
    return(
      <div className="flex-container">
        <h1 className="name">{monster.name}</h1>
        <div className="general-info">
          <h4 className="gen-item">Alignment: {monster.alignment}</h4>
          <h4 className="gen-item">Type: {monster.type}</h4>
          {monster.subtype && <h4 className="gen-item">Subtype: {ifBlank(monster.subtype)}</h4>}
          <h4 className="gen-item">Challenge Rating: {monster.challenge_rating}</h4>
          <h4 className="gen-item">Size: {monster.size}</h4>
          <h4 className="gen-item">XP: {monster.xp}</h4>
          <h4 className="gen-item">Armor Class: {monster.armor_class}</h4>
          <h4 className="gen-item">Hit Dice: {`${monster.hit_dice} (${monster.hit_points} HP)`}</h4>
        </div>
        <AbilityScores stats={monster} className="ability-scores"/>
        <SavingThrows stats={monster.proficiencies} />
        <Skills stats={monster.proficiencies}/>
        <h4>Actions:</h4>
        <Actions stats={monster.actions}/>
        {monster.legendary_actions && monster.legendary_actions.length > 0 && <h4>Legenendary Actions:</h4>}
        <Actions stats={monster.legendary_actions}/>
        {monster.reactions && monster.reactions.length > 0 && <h4>Reactions:</h4>}
        <Actions stats={monster.reactions}/>
        {monster.speed && <h4>Movement</h4>}
        {monster.speed && <h4>{monsterMove(monster.speed)}</h4>}
        <DamageModify immune={monster.damage_immunities} resist={monster.damage_resistances} vulnerable={monster.damage_vulnerabilities} condition={monster.condition_immunities} />
        {monster.languages && <h4>Languages</h4>}
        {monster.languages && <dd>{monster.languages}</dd>}
        {monster.special_abilities && monster.special_abilities.length > 0 && <h4>Special Abilities:</h4>}
        <Actions stats={monster.special_abilities}/>
        { monster.senses && <Senses stats={monster.senses}/>}
        <Forms forms={monster.forms}/>
      </div>
    );
  };

  return(
    <>
      {monster ?
        displayMonsterStats() :
        null
      }
    </>
  )};

export default MonsterStats;
