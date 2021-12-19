import React from 'react';
import Button from "./Button";
import Dice from "./Dice";
import "../App.css";

function GameSettings(props) {
  return (
    <div  className="gameoptions-container">
     
     <p>{props.text}</p>

      <Button text="New Game" className="new-btn"
        handleClick={props.newGameHandle}
        iconclass="fas fa-play"/>


      <Dice source={props.diceImgs[0]}/>
      <Dice source={props.diceImgs[1]}/>


      <Button text="Roll Dice"
        handleClick={props.rollHandle}
        iconclass="fas fa-dice"/>


      <Button  text="Hold"
        handleClick={props.holdHandle}
        iconclass="fas fa-pause"/>


      <input 
        placeholder={"Input Field"}
        disabled={props.disabled}
        type={"number"}
        min={0}
        onChange={(e) => {
          if (e.target.value < 0) {
            e.target.value = 0;
          }
          props.value(e.target.value);
        }}/>
    </div>
  );
};

export default GameSettings;
