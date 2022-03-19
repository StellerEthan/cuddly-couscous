import React, { useState } from "react";

const SearchBar = ({placeholder, data}) => {

  console.log(data);

  const filterList = () => {
    data.map((value, key) =>{
      return(
        <div>{value.name}</div>
      )
    });
  };

  return(
    <>
      <div>
        <input type='text' placeholder={placeholder}/>
      </div>
      <div>{filterList()}</div>
    </>
  );
};

export default SearchBar;
