import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {API_URL} from '../util/constants';
import SearchBar from "../components/SearchBar";

const MonsterList = () => {
  const navigate = useNavigate();
  const [monsters, setMonsters] = useState();

  useEffect(()=>{
    fetch(`${API_URL}/monsters`)
      .then(response => response.json())
      .then(response => {
        setMonsters(response.results)})
      .catch(error => console.error(error))
  }, []);

  const handleClick = (monster) => {
    const targetURL = `/monsters/${monster.index}`;
    navigate(targetURL);
  };

  const displayMonsterList = () => {
    const monsterList = monsters.map((monster, index) => {
      return(
        <li key={index}><button onClick={()=>{handleClick(monster)}}>{monster.name}</button></li>
      );
    });
    return monsterList;
  };

  return(
    <>
      <SearchBar data={monsters} placeholder="Search Monsters"/>
      {monsters ? 
        displayMonsterList() :
        null
      }
    </>
  );
};

export default MonsterList;
