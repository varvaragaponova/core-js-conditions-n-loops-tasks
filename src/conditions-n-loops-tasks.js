/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }
  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */

function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let value;
  if (queen.x === king.x || queen.y === king.y) {
    value = true;
  } else if (queen.x === queen.y && king.x === king.y) {
    value = true;
  } else {
    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        if (i === king.x || j === king.y) {
          value = true;
        } else {
          value = false;
        }
      }
    }
  }

  return value;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (
    (a === c || a === b || b === c) &&
    b !== 0 &&
    a !== 0 &&
    c !== 0 &&
    a < b + c &&
    b < a + c &&
    c < a + b
  ) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const one = 'I';
  const two = 'II';
  const three = 'III';
  const four = 'IV';
  const five = 'V';
  const six = 'VI';
  const seven = 'VII';
  const eight = 'VIII';
  const nine = 'IX';
  const ten = 'X';

  let result = '';

  if (num === 1) return one;
  if (num === 2) return two;
  if (num === 3) return three;
  if (num === 4) return four;
  if (num === 5) return five;
  if (num === 6) return six;
  if (num === 7) return seven;
  if (num === 8) return eight;
  if (num === 9) return nine;
  if (num === 10) return ten;

  const number = String(num);
  if (num > 10) {
    for (let i = 0; i < number[0]; i += 1) {
      result += ten;
    }

    if (number[1] === '1') result += one;
    if (number[1] === '2') result += two;
    if (number[1] === '3') result += three;
    if (number[1] === '4') result += four;
    if (number[1] === '5') result += five;
    if (number[1] === '6') result += six;
    if (number[1] === '7') result += seven;
    if (number[1] === '8') result += eight;
    if (number[1] === '9') result += nine;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const one = ' one';
  const two = ' two';
  const zero = ' zero';
  const three = ' three';
  const four = ' four';
  const five = ' five';
  const six = ' six';
  const seven = ' seven';
  const eight = ' eight';
  const nine = ' nine';
  const point = ' point';
  const minus = ' minus';

  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '1':
        result += one;
        break;
      case '2':
        result += two;
        break;
      case '3':
        result += three;
        break;
      case '4':
        result += four;
        break;
      case '5':
        result += five;
        break;
      case '6':
        result += six;
        break;
      case '7':
        result += seven;
        break;
      case '8':
        result += eight;
        break;
      case '9':
        result += nine;
        break;
      case '0':
        result += zero;
        break;
      case '-':
        result += minus;
        break;
      case '.':
        result += point;
        break;
      case ',':
        result += point;
        break;
      default:
        result += '';
    }
  }

  let resultStr = '';
  for (let j = 1; j < result.length; j += 1) {
    resultStr += result[j];
  }

  return resultStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strReverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    strReverse += str[i];
  }
  if (strReverse === str) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    } else {
      result = -1;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numToStr = `${num}`;
  const digitToStr = `${digit}`;
  let result;

  for (let i = 0; i < numToStr.length; i += 1) {
    if (numToStr[i] === digitToStr) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (!arr.length || arr.length === 2) return -1;

  let leftSum = 0;
  let skippedBlock = -1;

  for (let i = 0; i < arr.length; i += 1) {
    let sum = 0;
    let idx = i + 2;

    while (idx < arr.length) {
      sum += arr[idx];
      idx += 1;
    }

    leftSum += arr[i];

    if (sum === leftSum) {
      skippedBlock = i + 1;
      break;
    }
  }

  return skippedBlock;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = new Array(size);
  }

  let row = 0;
  let col = 0;

  let rowEnd = size - 1;
  let colEnd = size - 1;

  let counter = 1;

  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = counter;
      counter += 1;
    }
    row += 1;

    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = counter;
      counter += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = counter;
      counter += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = counter;
      counter += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyMatrix = matrix;
  for (let row = 0; row < copyMatrix.length; row += 1) {
    for (let column = 0; column < row; column += 1) {
      const step = copyMatrix[row][column];
      copyMatrix[row][column] = copyMatrix[column][row];
      copyMatrix[column][row] = step;
    }
  }

  for (let i = 0; i < copyMatrix.length; i += 1) {
    let start = 0;
    let finish = copyMatrix.length - 1;
    while (start < finish) {
      const move = copyMatrix[i][start];
      copyMatrix[i][start] = copyMatrix[i][finish];
      copyMatrix[i][finish] = move;

      start += 1;
      finish -= 1;
    }
  }

  return copyMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  let current;
  const copy = arr;
  for (let i = 1; i < copy.length; i += 1) {
    current = copy[i];
    let j = i - 1;

    while (j >= 0 && copy[j] > current) {
      copy[j + 1] = copy[j];
      j -= 1;
    }
    copy[j + 1] = current;
  }

  return copy;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let copyStr = str;

  let step = iterations % (str.length - 2);

  if (iterations > 100) {
    step *= 5;
  }

  for (let x = 0; x < step; x += 1) {
    for (let y = 1; y < copyStr.length / 2 + 1; y += 1) {
      const i = copyStr[y];
      copyStr = copyStr.substring(0, y) + copyStr.substring(y + 1, str.length);
      copyStr += i;
    }
  }

  return copyStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNumber = [];
  let num = number;

  for (let i = 0; i < String(number).length; i += 1) {
    arrNumber.push(String(number)[i]);
  }

  const sortInitNumber = arrNumber.sort().join('');
  let numArr = [];
  let sortCurrentNumber;
  do {
    num += 1;
    numArr = [];
    for (let i = 0; i < String(num).length; i += 1) {
      numArr.push(String(num)[i]);
    }
    sortCurrentNumber = numArr.sort().join('');
  } while (sortInitNumber !== sortCurrentNumber);

  return num;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
