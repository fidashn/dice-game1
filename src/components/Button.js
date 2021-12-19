import React from 'react';

function Button(props) {
  return (
    <button className='gamesettings-btn' onClick={props.handleClick}>
      <i className={props.iconclass}></i> {props.text}  
    </button>
  );
};

export default Button;
