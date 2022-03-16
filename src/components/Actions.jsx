import React from "react";

const Actions = (props) => {

  console.log(props.stats)

  // TODO: Figure out how to make this dynamic. In case, there is more than 1 type of Damage.
  const displayDamage = () => {
    const damageList = props.stats.map((action,index) => {
      console.log('action', action);
      // action is object. action.damage is array of Obj. 
      return(
        <div key={index}>{action.damage[0].damage_dice} {action.damage[0].damage_type.name} Damage</div>
      );
    });
    return damageList;
  };

  const displayActions = () => {
    const actionList = props.stats.map((action, index)=>{
      return(
        <div key={index}>
          <strong><dt>{action.name}</dt></strong>
          {action.dc && <dd>DC {action.dc.dc_type.name}: {action.dc.dc_value}</dd>}
          <dd>{displayDamage()}</dd>
          <dd>{action.desc}</dd>
        </div>
      );
    });
    return actionList;
  };

  return(
    <>
      <h4>Actions</h4>
      <dl>{displayActions()}</dl>
    </>
  );
};

export default Actions;
