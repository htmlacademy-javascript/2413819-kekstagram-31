// 1 assigment
const checkLength = (str, maxLength) => str.length <= maxLength;
console.log(checkLength('Строка', 20));
console.log(checkLength('Строка', 18));
console.log(checkLength('Строка', 10));

// 2 assigment
const isItPalindrom = (str) => {
  let deleteSpace = str.replaceAll('', ' ').toLowerCase();
  deleteSpace = deleteSpace.toUpperCase();

  let controlStr = '';

  for (let i = deleteSpace.length - 1; i > 0; i--) {
    controlStr += deleteSpace[i];
  }
  return controlStr === deleteSpace;
};
console.log(isItPalindrom('Топот'));
