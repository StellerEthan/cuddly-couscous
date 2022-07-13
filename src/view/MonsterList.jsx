import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {API_URL} from '../util/constants';

const MonsterList = () => {
  const navigate = useNavigate();
  const [monsters, setMonsters] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    fetch(`${API_URL}/monsters`)
      .then(response => response.json())
      .then(response => {
        setMonsters(response.results)})
      .catch(error => console.error(error))
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;

    let newFilter = monsters.filter((value) => {
      return value.index.includes(searchWord.toLowerCase());
    });

   setFilteredData(newFilter);
  };


  const handleClick = (monster) => {
    const targetURL = `/monsters/${monster.index}`;
    navigate(targetURL);
  };

  const displayMonsterList = () => {
    if (filteredData.length === 0){
      setFilteredData(monsters);
    }

    const monsterList = filteredData.map((monster, index) => {
      return(
        <div key={index}><button className="myButton" onClick={()=>{handleClick(monster)}}>{monster.name}</button></div>
      );
    });
    return monsterList;
  };

  return(
    <div>
      <div>
        <input type='text' placeholder='Search Monster' onChange={handleFilter}/>
      </div>
      <div className="button-box">
        {monsters ? 
          displayMonsterList() :
          null
        }
      </div>
    </div>
  );
};

export default MonsterList;
