
// You should implement your task here.


module.exports = function towelSort (matrix) {
    let arr = [];
    let columnIndex;
    
    if (matrix !== undefined)
        {
        for (i = 0 ; i < matrix.length ; i++) {
            for (j = 0; j < matrix[i].length; j++) {
                if (i % 2 === 0) {
                    columnIndex = j;
                } else {
                    columnIndex = matrix[i].length - 1 - j;
                }
                arr.push(matrix[i][columnIndex]);
        }
        }
        return arr;
    } else {
        return [];
    }
}
