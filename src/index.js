module.exports = function towelSort (matrix) {
  const result = [];

  if (arguments.length === 0 || matrix.length === 0) {
    return result;
  }

  for (i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      for (j = 0; j < matrix[i].length; j++) {
        let elem = matrix[i][matrix[i].length - 1 - j];
        result.push(elem);
      }
    }
  }
  return result;
}