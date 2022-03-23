function oneAway (s1, s2) {
    let edits = 1
    let maxLength = Math.max(s1.length, s2.length)
    let diff = Math.abs(s1.length-s2.length)

    if (diff > edits) {return false}

    for (i=0, j=0 ; i<maxLength || j<maxLength; i++, j++){
        let a = s1[i]
        let b = s2[j]
        if (a !== b) {
            edits--
            if (edits<0) {return false}
            else if (a === s2[j+1]) {j++}
            else if (s1[i+1] === b) {i++}
        } 
    } return true
}

console.log(oneAway("hi", "ihii"))
console.log(oneAway("hi", ""))
console.log(oneAway("hi", "ho"))
console.log(oneAway("hi", "hoo"))