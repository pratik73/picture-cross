const generateMatrix = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    let val = 0,
      total = 12;
    for (let j = 0; j < cols; j++) {
      val = Math.floor(Math.random() * 12) + 1;
      total = total - val;

      matrix[i].push(total < 0 ? "-" : val);

      total -= 1;
    }
  }

  return matrix;
};

const rotateMatrix = (matrix) => {
  const newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][i]);
    }
  }
  return newMatrix;
};

// we can use this to generate the matrix for the game
// while also add a click handler to it, so that we can update the matrix when clicked on
// we will need to store the matrix here globally for now
const generateCrossMatrix = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < cols; j++) {
      matrix[i].push("-"); // we can change this to "-" later
    }
  }
  return matrix;
};

const generateMatrixWithValues = (rows, cols) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < cols; j++) {
      Math.random() > 0.5 ? matrix[i].push("-") : matrix[i].push("X");
    }
  }
  return matrix;
};

const calculateHints = (matrix) => {
  const top = [];
  const left = [];

  for (let i = 0; i < matrix.length; i++) {
    left[i] = [];
    let count = 0,
      found = false;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === "-") {
        found = true;
        count++;
      } else {
        if (found) {
          left[i].push(count);
          count = 0;
          found = false;
        }
      }
    }

    if (count > 0) left[i].push(count);
  }

  const leftMax = Math.max(...left.map((x) => x.length));

  for (let i = 0; i < left.length; i++) {
    if (left[i].length < leftMax) {
      for (let j = left[i].length; j < leftMax; j++) {
        left[i].unshift(" ");
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    top[i] = [];
    let count = 0,
      found = false;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === "-") {
        found = true;
        count++;
      } else {
        if (found) {
          top[i].push(count);
          count = 0;
          found = false;
        }
      }
    }
    if (count > 0) top[i].push(count);
  }

  const topMax = Math.max(...top.map((x) => x.length));

  for (let i = 0; i < top.length; i++) {
    if (top[i].length < topMax) {
      for (let j = top[i].length; j < topMax; j++) {
        top[i].unshift(" ");
      }
    }
  }

  return {
    top: rotateMatrix(top),
    left,
  };
};

module.exports = {
  generateMatrix,
  generateCrossMatrix,
  rotateMatrix,
  generateMatrixWithValues,
  calculateHints,
};
