import React from 'react';
import Score from './Score';

function Players(props) {
  return (
    <div className={`players-container   ${props.classes} ${props.isWinner}`}>
      <h1>
      {<i className={props.iconclass}></i>}
        {props.name}</h1>
      <Score score= {props.totalScore} />
      <Score score= {props.currentScore}/>
    </div>
  );
};

export default Players;



