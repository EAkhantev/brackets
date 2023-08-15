module.exports = function check(str, bracketsConfig) {
  // const bracketPairs = Object.fromEntries(bracketsConfig.map(item => item.reverse()));
  const bracketPairs = Object.fromEntries(JSON.parse(JSON.stringify(bracketsConfig)).map(item => item.reverse()));
  const openBrackets = Object.values(bracketPairs);
  const closeBrackets = Object.keys(bracketPairs);
  let stackBracket = [];

  for (let id = 0; id < str.length; id++) {
    let item = str[id];
    if (openBrackets.includes(item)) {
      stackBracket.push(item);
    } else {
      if (stackBracket.length == 0) {return false};
      
      let pair = bracketPairs[item];
      let stackItemLast = stackBracket.slice(-1);
      if (stackItemLast != pair) {
        return false;
      } else {
        stackBracket.pop(item);
      };
    };
  };

  if (stackBracket.length) {
    return false;
  } else {
    return true;
  };
};

function check (str, bracketsConfig) {
  // const bracketPairs = Object.fromEntries(bracketsConfig.map(item => item.reverse()));
  const bracketPairs = Object.fromEntries(JSON.parse(JSON.stringify(bracketsConfig)).map(item => item.reverse()));
  const openBrackets = Object.values(bracketPairs);
  const closeBrackets = Object.keys(bracketPairs);
  let stackBracket = [];

  for (let id = 0; id < str.length; id++) {
    let item = str[id];
    if (openBrackets.includes(item)) {
      stackBracket.push(item);
    } else {
      if (stackBracket.length == 0) {return false};
      
      let pair = bracketPairs[item];
      let stackItemLast = stackBracket.slice(-1);
      if (stackItemLast != pair) {
        return false;
      } else {
        stackBracket.pop(item);
      };
    };
  };
  console.log(stackBracket);
  if (stackBracket.length) {
    return false;
  } else {
    return true;
  };

};

console.log( check ("||", [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]) );
// console.log( check ("|()|", [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]) );

// const myArray = [[1, 22222], [3, 33333]];
// console.log("myArray", myArray);
// const arrayCopy = myArray.concat();
// const arrayCopy = myArray.map((copyArray) => copyArray);
// const arrayCopy = myArray.slice(0);
// const arrayCopy = Array.from(myArray);
// const arrayCopy = JSON.parse(JSON.stringify(myArray));


// const arrayCopy = (myArray.concat()).map(item => item.reverse()); // меняет исходный массив
// const arrayCopy = myArray.map(copyArray => copyArray).map(item => item.reverse()); // меняет исходный массив
// const arrayCopy = myArray.slice(0).map(item => item.reverse()); // меняет исходный массив
// const arrayCopy = Array.from(myArray).forEach(item => item.reverse()); // меняет исходный массив
// const arrayCopy = JSON.parse(JSON.stringify(myArray)).map(item => item.reverse());
// console.log("myArray", myArray);
// console.log("arrayCopy", arrayCopy);
// console.log(myArray === arrayCopy)