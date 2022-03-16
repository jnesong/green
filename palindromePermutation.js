function palindromePermutation(string) {
    let arr = string.split("")
    let map = { " ": 2 }
    for (i = 0; i < arr.length; i++) {
        let x = arr[i]
        if (map[x] === 2){
            map[x]=2
        }
        else if (map[x]) {
            (map[x] === 0) ? (map[x] = 1) : (map[x] = 0)
        } else {
            map[x] = 1
        } console.log(map)
    }
    let arrValues = Object.values(map)
    let ones = []
    for (i = 0; i < arrValues.length; i++) {
        if (arrValues[i] === 0 || arrValues[i] === 2) {
            console.log("counting evens")
        } else {
            ones.push(arr[i])
        }
    }
    console.log(ones.length)
    return ones.length < 2 ? true : false
}

console.log(palindromePermutation("raddarr"))