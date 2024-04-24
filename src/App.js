import { useState } from "react";

function Square({value, onSquareClick}) {
  /*
  const [value, setValue] = useState(null);
  // value stores the value
  // setValue is used to change the stored value

  function handleClick() {
    setValue('X');
    // when clicked, the value of the square becomes 'X'
    // the square is re-rendered
  }

  return (
    <button 
      className="square"
    >
      {value}
    </button>
    );
    */
  return (
    <button className="square"> onClick={onSquareClick}
      {value}
    </button>)
    ;
}

export default function Board() {
  // Array(9).fill(null) creates an array with nine elements and sets each of them to null
  // useState() call around it declares a squares state variable that's initially set to that array
  // example of array mid game: ['O', null, 'x', 'x', 'x', 'O', 'O', null, null]
  const [squares, setSquares] = useState(Array(9).fill(null))
  // export make this function accessible outside of this file
  // default tells other files using this code that this is the main function
  // <button> is a JSX element, a combination of javascript code and html tags
  // className="square" is a button and </button> closes the JSX element
  return (
  <>
  <div className="board-row">               
    <Square value = {squares[0]} />
    <Square value = {squares[1]}/>
    <Square value = {squares[2]} />
  </div>
  <div className="board-row">
    <Square value = {squares[3]} />
    <Square value = {squares[4]} />
    <Square value = {squares[5]} />
  </div>
  <div className="board-row">
    <Square value = {squares[6]}/>
    <Square value = {squares[7]} />
    <Square value = {squares[8]}/>
  </div>
  </>
  );

}