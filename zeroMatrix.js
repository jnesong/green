// double for loop
// first loop, push array into larger array and reset call stack
// second loop, with count, if 0, push amount of 0s to match count in an array
// 

function zeroMatrix (m) {

    let rowHasZero = false
    let colHasZero = false

    for (let j = 0 ; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            rowHasZero = true;
        }
    }
}