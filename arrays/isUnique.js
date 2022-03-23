//uses recursion
// function isUnique(string) {
//     if (string.length === 1) {
//         return true
//     } else {
//         let arr = string.split("")
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[0] === arr[i]) {
//                 return false
//             } else {
//                 arr.shift()
//                 let nextString = arr.join("")
//                 return isUnique(nextString)
//             }
//         }
//     }
// } 

//uses hashmap 
function isUnique (string ) {
    let arr = string.split("")
    let map = {}
    for (let i=0; i<arr.length; i++){
        if (map[arr[i]]) {
            return false
        } else {
            map[arr[i]] = true
        } 
    } return true
}

console.log(isUnique(""))
