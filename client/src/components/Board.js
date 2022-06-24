import React, { useEffect, useState }from 'react';
import createBoard from "../util/createBoard";
import Cell from "./Cell";
import revealed from '../util/reveal';

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // ComponentDidMount
  useEffect(() => {
    // Creating a board
    function freshBoard() {
      const newBoard = createBoard(10, 10, 20);
      setNonMineCount(10*10 - 15);
      setMineLocations(newBoard.mineLocation);
      setGrid(newBoard.board);
    }
    // Calling function
    freshBoard()
  },[]);

  // On Right click / Flag Cell
  const updateFlag = (e, x, y) => {
    // to not have dropdown on right click
    e.preventDefault();
    // Deep copy of a state
    let newGrid = JSON.parse(JSON.stringify(grid))
    console.log('New Grid:', newGrid[x][y]);
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    if (grid[x][y].revealed || gameOver) return;
    let newGrid = JSON.parse(JSON.stringify(grid));
    if(newGrid[x][y].value === 'X') {
      alert('Mine Found!')
      for(let i = 0; i < mineLocations.length; i++) {
        newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
      }
      setGrid(newGrid);
      setGameOver(true);
    } else {
      let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      setNonMineCount(newRevealedBoard.newNonMinesCount)
      if(newRevealedBoard.newNonMinesCount === 0) {
        setGameOver(true);
      }
    };
  };

  return (
    <div>
      <p>{nonMineCount}</p>
      <p>{nonMineCount === 0 ? "You Win" : gameOver ? "Game Over" : ""}</p>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        {grid.map((singleRow, index1) => {
          return (
            <div key={index1} style={{display: "flex"}}>
              {singleRow.map((singleBlock, index2) => {
                return (
                  <Cell 
                    key={index2} 
                    revealCell={revealCell} 
                    details={singleBlock} 
                    updateFlag={updateFlag}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;