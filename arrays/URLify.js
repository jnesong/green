function URLify (string) {
    let arr = string.split(" ")
    console.log(arr)
    let newStr = []
    for (let i=0 ; i<arr.length-1; i++){
        newStr.push(`${arr[i]}%`)
    }
    newStr.push(arr[arr.length-1])
    return newStr.join("")
}

console.log (URLify("hello sir, my name is Jenny"))