# Mini-App Challenge: Minesweeper

## Basic Requirements
Create a full-stack implementation of Minesweeper  . The basic requirements are:

- Use React for all the components
- Write jest tests to verify your gameplay logic and presentation logic. Achieve 80% test coverage.
- Add CSS to style your game (Do Not use any frameworks ie: MaterialUI, BootStrap....)
**Reminder:** emphasis should be placed on creating well-defined interfaces, writing code with a clear separation of concerns, and using the principles of modularity, encapsulation, abstraction.

## Starting a game:
- Default board size is 10x10
- Place 10 hidden mines randomly on the board

## Gameplay Rules
On each turn, the user clicks on a square to uncover it. If the square:

- Contains a mine, the user loses, and the game is over!
- Is adjacent to a mine, the square displays the total number of mines in the 8 squares around it.
- Is not adjacent to a mine, the square is blank and should behave as if the 8 adjacent squares were also clicked. For each of those squares, their neighboring squares continue to be revealed in each direction (i.e., this step is applied recursively to all neighboring squares) until the edge of the board is reached or until a square is reached that is adjacent to a mine, in which case the previous rule applies.
- The last rule winds up uncovering large areas of the board in one turn. This helps speed up gameplay. The user wins when they uncover all squares that don’t have mines.

## Setup:
- [ ] Create an empty git repository with a client and server directory.
- [ ] Link this repository to a new repository on GitHub as your remote.

## Submitting the project:
- [ ] Submit a link to your repository below.

## Level 1
- [ ] Establish a react front-end minesweeper game board with in-memory game data.
- [ ] Establish basic game logic that enforces the above game rules on a 10x10 board.
- [ ] Write JEST test to verify gameplay logic and presentation logic (achieve 80% test coverage).

## Level 2
- [ ] Add the ability to change the difficulty (size of the board and quantity of mines).
- [ ] Add a timer to the game.
- [ ] View a list of recently played user times and difficulty setting.

## Level 3
- [ ] Define a RESTful API that connects to a postgres database.
- [ ] Create a login page that takes in a username (no authentication required).
- [ ] Database should store each user, their top time, and the game's difficulty setting.
- [ ] Refactor the frontend to persist and retrieve data to the API.

## Level 4
- [ ] Establish the ability to undo and redo moves
- [ ] Establish game logic that increases the duration of the game by 10 seconds for each time the undo/redo feature is used.
- [ ] Create a user page that shows all times and difficulties for a given user.

## Level 5
- [ ] Establish the ability to close the browser and reload the previously played game.
- [ ] Establish the ability to click on a previously completed game and click through the moves that were made.
- [ ] Deploy to Heroku.