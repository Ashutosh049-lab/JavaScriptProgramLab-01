
function rotateMatrix90(matrix) {
    let n = matrix.length;

    // Step 1: Transpose the matrix (swap rows and columns)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Example Usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rotatedMatrix = rotateMatrix90(matrix);
console.log(rotatedMatrix);
