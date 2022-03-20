import React, { useState } from "react";

const SearchBar = (props) => {
  const [filteredData, setFilteredData] = useState([]);
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;

    let newFilter = props.data.filter((value) => {
      return value.name.includes(searchWord);
    });

   setFilteredData(newFilter);
  };


  return(
    <>
      <div>
        <input type='text' placeholder={props.placeholder} onChange={handleFilter}/>
      </div>
    {filteredData.length != 0 && <div>{
          filteredData.map((value, key) =>{
          return(
            <div key={key}>{value.name}</div>
          );
        })
      }</div>}
    </>
  );
};

export default SearchBar;
