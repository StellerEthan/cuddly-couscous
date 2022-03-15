import React from "react";
import { useNavigate } from "react-router-dom";

const Forms = (props) => {
  const navigate = useNavigate();
  const forms = props.forms;

  const handleClick = (form) => {
    const targetURL = `/monsters/${form.index}`;
    navigate(targetURL);
  };

  const displayForms = () => {
    const formList = forms.map((form, index) => {
      return(
        <li key={index}><button onClick={()=>{handleClick(form)}}>{form.name}</button></li>
      );
    });
    return (formList);
  };

  return(
    <>
      {forms.length > 0 && (<h4>Forms</h4>)}
      {displayForms(forms)}
    </>
  );
};

export default Forms;
