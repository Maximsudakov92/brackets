module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === '(' && arr[i + 1] === ')') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '{' && arr[i + 1] === '}') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '|' && arr[i + 1] === '|') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '[' && arr[i + 1] === ']') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '1' && arr[i + 1] === '2') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '3' && arr[i + 1] === '4') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '5' && arr[i + 1] === '6') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '7' && arr[i + 1] === '7') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    if (arr[i] === '8' && arr[i + 1] === '8') {
      arr.splice(i, 2);
      i = 0;
      continue;
    }
    i++
  }
  return arr.length === 0 ? true : false;
}