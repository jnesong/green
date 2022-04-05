// I: a sorted, increasing order array with unique integer elements
// O: a binary search tree
// C: minimal height tree
// E:
//Time complexity:
//Space complexity:

let tree = {}

function minimalTree(arr) {
    let middle = Math.ceil(arr.length / 2)
    if (middle<3){
        tree[arr[middle]] = {v: arr[1], l:arr[0], r:arr[2]}
        return tree[arr[middle]].v
    }
    let left = []
    for (let i = 0; i < middle; i++) {
        left.push(arr[i])
    }
    let right = []
    for (let j = middle+1; j < arr.length; j++) {
        right.push(arr[j])
    }

    tree[arr[middle]] = {v: arr[middle], l: minimalTree(left), r: minimalTree(right) }

    return tree[arr[middle]].v

};


// console.log(minimalTree([-10, -3, 0, 4, 22, 109, 201]))
console.log(minimalTree([-30, -10, -3, 0, 4, 22, 56, 109, 201]))
// console.log(minimalTree([1, 3, 4, 6, 7, 8, 10, 13, 14]))
console.log(tree)
