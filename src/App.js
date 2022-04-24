import {selectRandomWord, verifyWordExist} from "./words.js";
import React from "react";
import {Loader} from "./components/Loader";
import Keyboard from "./components/Keyboard";
import Board from "./components/Board";

let globalFila = 0;
let globalColumna = 0;


function App() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);


  const [word, setWord] = React.useState("");
  const [array, setArray] = React.useState([
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
  ]);

  const [gameOver, setGameOver] = React.useState({
    gameOver: false,
    guessedWord: false,
  });

  const [currentFila, setCurrentFila] = React.useState(0);
  const [currentColumna, setCurrentColumna] = React.useState(0);

  const cambiarPosicion = (fila, columna) => {
    setCurrentFila(fila);
    setCurrentColumna(columna);
  }

  React.useEffect(() => {
    console.log("USEEFFECT TO SEE CHANGES IN FILA AND COLUMNA: ",currentFila);
    globalFila = currentFila;
  },[currentFila])
  React.useEffect(() => {
    console.log("USEEFFECT TO SEE CHANGES IN FILA AND COLUMNA: ",currentColumna);
    globalColumna = currentColumna;
  },[currentColumna])

  React.useEffect(() => {
    const fetchData = async () => {
      
      // get the data from the api
      const data = await selectRandomWord();
      // set state with the result
      console.log(data);
      cambiarPosicion(0,0);
      setWord(data);
    }
    
    // call the function
    fetchData()
    console.log(word);
    document.body.addEventListener('keyup', (event)=>{handleKeyboardKeyUp(event)});
  }, []);


  const handleKeyboardClick = (event) => {
    if(!gameOver.gameOver){
      if( /([a-zA-Z]){1}/.test(event.target.dataset.letter) && event.target.dataset.letter !== "backspace" && event.target.dataset.letter !== "enter" ){
        handleKeyboard(event.target.dataset.letter);
      }else if( event.target.dataset.letter === "enter" ){
        handleKeyboardEnter();
      }else if( event.target.dataset.letter === "backspace" ){
        handleKeyboardRemove();
      }
    }
  }
  const handleKeyboardKeyUp = (event) => {
    if(!gameOver.gameOver){
      console.log(event.code);

      if( /([a-zA-Z]){1}/.test(event.code.replace("Key","")) && event.code.replace("Key","").length === 1 ){
        handleKeyboard( event.code.replace("Key","") );
      }else if( event.code === "Enter" ){
        handleKeyboardEnter();
      }else if( event.code === "Backspace" ){
        handleKeyboardRemove();
      }
      
    }
  }


  const handleKeyboardEnter = async () => {
    let fila = globalFila;
    let columna = globalColumna;
    let currrentWord = word;
    console.log("currentWord: ",currrentWord);
    
    let newArray = [...array];

    if (newArray[fila][4] === ""){
      console.log("\n====== 5 SLOT EMPTY ======\n fila:",fila)
      return;
    }
    // console.log("\n====== "+WordlES+" ======\n")
    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += newArray[fila][i].toLowerCase();
    }
    if(await verifyWordExist(currWord)){
      console.log("\n====== WORD EXIST ======\n")
      fila++
      columna = 0;
    } else {
      console.log("\n====== WORD DOES'T EXIST ======\n")
      return;
    }

    if(currWord === currrentWord) {
      console.log("\n====== PALABRA CORRECTA ======\n")
      setGameOver({ gameOver: true, guessedWord: true });
      //establecer colores de succes a la fila correcta
      newArray[fila-1][0] = {letter: currrentWord.split("")[0].toUpperCase() , status: letterStatus(currWord , 0), wins: true };
      newArray[fila-1][1] = {letter: currrentWord.split("")[1].toUpperCase() , status: letterStatus(currWord , 1), wins: true };
      newArray[fila-1][2] = {letter: currrentWord.split("")[2].toUpperCase() , status: letterStatus(currWord , 2), wins: true };
      newArray[fila-1][3] = {letter: currrentWord.split("")[3].toUpperCase() , status: letterStatus(currWord , 3), wins: true };
      newArray[fila-1][4] = {letter: currrentWord.split("")[4].toUpperCase() , status: letterStatus(currWord , 4), wins: true };
      forceUpdate();
      return;
    }else{
      console.log("\n====== PALABRA INCORRECTA ======\n")
      newArray[fila-1][0] = {letter: currWord.split("")[0], status: letterStatus(currWord , 0) };
      newArray[fila-1][1] = {letter: currWord.split("")[1], status: letterStatus(currWord , 1) };
      newArray[fila-1][2] = {letter: currWord.split("")[2], status: letterStatus(currWord , 2) };
      newArray[fila-1][3] = {letter: currWord.split("")[3], status: letterStatus(currWord , 3) };
      newArray[fila-1][4] = {letter: currWord.split("")[4], status: letterStatus(currWord , 4) };

    }
    // console.log(fila);
    if (fila === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }


    setArray(newArray);
    cambiarPosicion(fila,columna);
  }
  //function for know the correct result of a guess
  const letterStatus = ( currentWord , pos ) => {
    console.log(word)
    const correctWord = word;
    let correctArray = correctWord.split("");
    let currentWordArray = currentWord.split("");

    if(correctArray[pos] === currentWordArray[pos]){
      return "correct";
    }

    if(correctArray.includes(currentWordArray[pos])){ 
      let aparicionesLetra = 0;
      correctArray.forEach(letter=>{
        if(letter === currentWordArray[pos]){
          aparicionesLetra++;
        }
      })

      if(aparicionesLetra === 1) return "error"
      else return "almost";
    }


    return "error";
  }

  const handleKeyboardRemove = () => {
    let fila = globalFila;
    let columna = globalColumna;
    let newArray = [...array];

    if (newArray[fila][columna] === ""){
      return;
    }
    console.log(fila,columna)
    newArray[fila][columna] = "";
    
    if(columna !== 0){
      cambiarPosicion(fila,columna-1);
    }

    setArray(newArray);
  }


  const handleKeyboard = (letter) => {
    let fila = globalFila;
    let columna = globalColumna;
    console.log(fila,columna)
    let newArray = [...array];

      if(newArray[fila][0] === "" || newArray[fila][1] === "" || newArray[fila][2] === "" || newArray[fila][3] === "" || newArray[fila][4] === ""){
        for(let j=0; j < newArray[fila].length ; j++ ){
          if(newArray[fila][columna] === "" ){
            newArray[fila][columna] = letter;
            columna !== 4 && columna++;
            break;
          }
          columna !== 4 && columna++;
        }
      }

    setArray(newArray);
    cambiarPosicion(fila,columna);
  }

  return (
      <div className="App h-screen">
        <nav>
          <h1 className="uppercase font-bold tracking-wider text-xl sm:text-3xl">WordlES!</h1>
        </nav>
        {word ? (
          <>
          {gameOver.gameOver ? <p className="text-2xl mt-16">Game Over<br/>Word:{word}<br/>{gameOver.guessedWord? "You guessed the word": "Word is too dificult for you" }</p> : ""}
            <Board array={array} />
          {
            !gameOver.gameOver ?
              <Keyboard handleKeyboardClick={handleKeyboardClick} />
            :
              ""
          }
          </>
        ) : (
          // gameOver.gameOver ? (
          //   <>
          //     <p className="text-2xl mt-16">Game Over<br/>Word:{word}<br/>{gameOver.guessedWord? "You guessed the word": "Word is too dificult for you" }</p>
          //   </>
          // ) : (
            <>
              <p className="text-2xl mt-16">Fetching a random word</p>
              <Loader />
            </>
          // )
        )}
      </div>
  );
}

export default App;




