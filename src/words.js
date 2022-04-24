import wordBank from "./es-words.txt";

export async function verifyWordExist(word){
  let result = await fetch(wordBank)

  let wordArr = (await result.text()).toString();
  // wordArr = wordArr.replaceAll("\r","").split("\n");

  let existWord = wordArr.includes(word.toLowerCase().trim());
  // console.log("received word: ",word)
  return existWord;
}


export async function selectRandomWord(){

    let todaysWord;
    let result = await fetch(wordBank)
    let wordArr = (await result.text()).toString();
    wordArr = wordArr.split("\n");
  
  
    todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)].toLowerCase().replaceAll("\r","").replaceAll("á","a").replaceAll("é","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u");
    while( ! /^[a-z]{5}$/.test(todaysWord) ){
    // while( todaysWord.length !== 5 && \\.test(todaysWord) ){
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)].toLowerCase().replaceAll("\r","").replaceAll("á","a").replaceAll("é","e").replaceAll("í","i").replaceAll("ó","o").replaceAll("ú","u");
    }
  // console.log("today word: ", todaysWord )
    return todaysWord;
  };