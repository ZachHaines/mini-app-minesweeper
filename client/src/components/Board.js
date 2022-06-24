import React, { useEffect, useState }from 'react';
import createBoard from "../util/createBoard";

const Board = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      console.log('New Board:', newBoard)
      setGrid(newBoard);
    }
    freshBoard()
  },[]);

  if (!grid.board) {
    return <div>Loading</div>
  }

  return grid.board.map(singleRow => {
    return (
      <div style={{display: "flex"}}>
        {singleRow.map(singleBlock => {
          return (
            <div style={{ width: 30, height: 30, border: "2px solid black"}}>
              {singleBlock.value}
            </div>
          );
        })}
      </div>
    );
  });
};

export default Board;