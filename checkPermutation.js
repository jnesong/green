function checkPermutation (a, b) {
    if (a.length !== b.length ) {
        return false
    } else {
        let x = a.split("").sort()
        let y = b.split("").sort()
        for (i=0; i<x.length; i++){
            if (x[i] !== y[i]) {
                return false
            } else {
                return true
            }
        }
    }
}

console.log(checkPermutation("dog", "God"))