import React from "react";

const Actions = (props) => {


  //TODO: Melee weapons with more than one type of attack. object in dmg array will have keys "choose," "type," and "from."

  // TODO: Fix this! Figure out how to make this dynamic. In case, there is more than 1 type of Damage.
  // const displayDamage = () => {
  //   const damageList = props.stats.map((action,index) => {
  //     // action is object. action.damage is array of Obj. 
  //     return(
  //       <div key={index}>{action.damage[index].damage_dice} {action.damage[index].damage_type.name} Damage</div>
  //     );
  //   });
  //   return damageList;
  // };

  const displayActions = () => {
    const actionList = props.stats.map((action, index)=>{
      return(
        <div key={index}>
          <strong><dt>{action.name}</dt></strong>
          {action.dc && <dd>DC {action.dc.dc_type.name}: {action.dc.dc_value}</dd>}
          {action.damage && <dd>{action.damage.length > 0 && <div>{action.damage[0].damage_dice} {action.damage[0].damage_type.name} Damage</div>}</dd>}
          <br/>
          <dd>{action.desc}</dd>
          <br/>
        </div>
      );
    });
    return actionList;
  };

  return(
    <>
      <dl>{props.stats && displayActions()}</dl>
    </>
  );
};

export default Actions;
