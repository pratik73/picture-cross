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
      matrix[i].push("X");
    }
  }
  return matrix;
};

module.exports = { generateMatrix, generateCrossMatrix, rotateMatrix };
