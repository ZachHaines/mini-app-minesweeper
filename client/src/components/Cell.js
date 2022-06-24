import React from 'react';

const Cell = ({details, updateFlag, revealCell}) => {

  return (
    <div 
      onContextMenu={(e) => updateFlag(e, details.x, details.y)}
      onClick={() => revealCell(details.x, details.y)} 
      style={style.cellStyle} 
    >
      {!details.revealed && details.flagged 
      ? "🚩" 
      : details.revealed && details.value !== 0 
      ? details.value === 'X' 
        ? "💣"
        : details.value
      : ""}
    </div>
  )
};

const style = {
  cellStyle: {
    width: 40,
    height: 40,
    background: "lightgrey",
    border: "2px solid green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}

const bombChexPatteron = (x, y) => {
  if (x % 2 === 0 && y % 2 === 0) {
    return "#e5c295";
  } else if(x % 2 === 0 && y % 2 !== 0 ) {
    return "#d7b899";
  } else if(x % 2 !== 0 && y % 2 === 0) {
    return "#d7b899";
  } else {
    return "#e5c295"
  };
};

export default Cell;
