import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../util/constants";
import AbilityScores from "../components/AbilityScores";
import SavingThrows from "../components/SavingThrows";
import DamageModify from "../components/DamageModify";

const MonsterStats = () => {
  const { monsterIndex } = useParams();
  const [monster, setMonster] = useState();

  useEffect(()=>{
    fetch(`${API_URL}/monsters/${monsterIndex}`)
      .then(response => response.json())
      .then(response => {
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

  console.log(monster);

  // actions, Languages, forms, senses, legend actions, reactions,
  // special Ability, skills(inside proficiency),

  const displayMonsterStats = () => {
    return(
    <>
    <h1>{monster.name}</h1>
    <AbilityScores stats={monster}/>
    <h4>Armor Class: {monster.armor_class}</h4>
    <h4>Hit Dice: {`${monster.hit_dice} (${monster.hit_points} HP)`}</h4>
    <h4>Challenge Rating: {monster.challenge_rating}</h4>
    <h4>XP: {monster.xp}</h4>
    <h4>Size: {monster.size}</h4>
    <h4>Movement</h4>
    <h4>{monsterMove(monster.speed)}</h4>
    <SavingThrows stats={monster.proficiencies} />
    <h4>Alignment: {monster.alignment}</h4>
    <h4>Type: {monster.type}</h4>
    <h4>Subtype: {ifBlank(monster.subtype)}</h4>
    <DamageModify immune={monster.damage_immunities} resist={monster.damage_resistances} vulnerable={monster.damage_vulnerabilities} condition={monster.condition_immunities} />
    </>
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
