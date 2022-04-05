// I: a sorted, increasing order array with unique integer elements
// O: a binary search tree
// C: minimal height tree
// E:
//Time complexity:
//Space complexity:

let tree = {}


function minimalTree(arr) {

    let middle = getMiddle(arr)
    console.log(arr[middle])
    let left = [...arr.slice(0, middle)]
    let right =[...arr.slice(middle+1, arr.length)]
    console.log(left)
    console.log(right)
    tree[arr[middle]] = {
        v: arr[middle],
        l: left[getMiddle(left)],
        r: right[getMiddle(right)]
    }

    makeTree(left);
    makeTree(right);

    console.log(tree)

};

function makeTree ( arr ) {
    let middle = getMiddle(arr)
    console.log(arr[middle])
    let left = [...arr.slice(0, middle)]
    let right =[...arr.slice(middle+1, arr.length)]
    console.log(left)
    console.log(right)
    tree[arr[middle]] = {
        v: arr[middle],
        l: left[getMiddle(left)],
        r: right[getMiddle(right)]
    }
}

function getMiddle(arr){
    return Math.floor(arr.length/2)
}


// console.log(minimalTree([-10, -3, 0, 4, 22, 109, 201]))
console.log(minimalTree([-30, -10, -3, 0, 4, 22, 56, 109]))
// console.log(minimalTree([1, 3, 4, 6, 7, 8, 10, 13, 14]))
