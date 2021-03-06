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
      <div className="grid-container">
        <h1>{monster.name}</h1>
        <Forms forms={monster.forms}/>
        <h4>Alignment: {monster.alignment}</h4>
        <h4>Type: {monster.type}</h4>
        {monster.subtype && <h4>Subtype: {ifBlank(monster.subtype)}</h4>}
        <h4>Challenge Rating: {monster.challenge_rating}</h4>
        <h4>Size: {monster.size}</h4>
        <h4>XP: {monster.xp}</h4>
        <AbilityScores stats={monster} className="ability-scores"/>
        <SavingThrows stats={monster.proficiencies} />
        <h4>Armor Class: {monster.armor_class}</h4>
        <h4>Hit Dice: {`${monster.hit_dice} (${monster.hit_points} HP)`}</h4>
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
