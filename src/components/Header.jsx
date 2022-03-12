import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = (target) =>{
    navigate(target);
  };

  return(
    <>
      <button onClick={() => {handleClick('/')}}>Home</button>
      <button onClick={() => {handleClick('/monsters')}}>Monsters</button>
      <hr />
    </>
  );
};

export default Header;
