const square = (n) => {
  return n * n;
}

const fahrenheit = (celsius) => {
  return (celsius * 1.8) + 32;
}

const rectangleArea = (a, b) => {
  return a * b;
}

const isPalindrome = (str) => {
  const str2 = str.toLowerCase();
  const reverse =  str2.split('').reverse().join('');
  
  return str2 === reverse; 
}
