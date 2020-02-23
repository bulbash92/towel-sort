
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix.length > 1) {
    const arrTMP = [];
    const arrTwo = [];
    for (const item in matrix) {
      if (item % 2 > 0) {
        arrTwo.push(matrix[item].sort((a, b) => b > a ? 1 : -1));
      }
      else {
        arrTMP.push(matrix[item].sort((a, b) => a > b ? 1 : -1));
      }
    }
    return arrTMP.concat(arrTwo);
  }
  else { return matrix.concat().sort((a, b) => a > b ? 1 : -1); }

}
