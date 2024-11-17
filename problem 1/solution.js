function reverseWords(str){
    let stringSplit = str.split(' ');
    let stringReverseSplit = stringSplit.reverse();
    return stringReverseSplit.join(' ');
  }

console.log(reverseWords('Hello world!'));