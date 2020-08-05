function testSomeThing() {
  // Write this fx

}

window.onload = function() {
  // console.log(maxChar("JeffreyAlanKingTonyaJeanKing"))
  console.log(capitalize("the world might end soon, it seems"));

}

const maxChar = (str) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap) {
    if(charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// // My Solution
// const capitalize = (str) => {
//   const originalWords = str.split(' ');
//   const newWords = [];
  
//   for (const word in originalWords) {   
//     newWords.push(capitalizeFirstLetter(originalWords[word]));
//   }

// return newWords.join(' ');
// }

// const capitalizeFirstLetter = (str) => {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

// Much better solutsion
const capitalize = (str) => {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  
  return words.join(' ');
}
