
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arrTMP = [];
  for (const item in matrix) {
    if (item % 2 > 0) { arrTMP = arrTMP.concat(matrix[item].sort((a, b) => b > a ? 1 : -1)); }
    else { arrTMP = arrTMP.concat(matrix[item].sort((a, b) => a > b ? 1 : -1)); }
  }
  return arrTMP;

}
