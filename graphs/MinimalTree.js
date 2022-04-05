// I: a sorted, increasing order array with unique integer elements
// O: a binary search tree
// C: minimal height tree
// E:
//Time complexity:
//Space complexity:

let tree = {}

function minimalTree(arr) {
    let middle = Math.floor(arr.length / 2)
    let left = []
    for (let i = 0; i < middle; i++) {
        left.push(arr[i])
    }
    let right = []
    for (let j = middle+1; j < arr.length; j++) {
        right.push(arr[j])
    }

    tree[arr[middle]] = { a: arr[middle-1], b: arr[middle+1] }

    console.log(left)
    console.log(right)

    if (middle > 1) {
        minimalTree(left)
        minimalTree(right)
    }
}

console.log(minimalTree([-10, -3, 0, 4, 22, 109, 201]))
console.log(tree)