function solution(digits) {
    let max = 0;
    
    for (let i = 0; i <= digits.length - 5; i++) {
      const addI = parseInt(digits.slice(i, i + 5));
      if (addI > max) {
        max = addI;
      }
    }
    return max;
  }
  