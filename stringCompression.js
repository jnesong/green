//input: string
//output: compressed string
// constraints: only uppercase and lowercase letters
// edge case: empty or cannot be compressed, so all the letters are different
function stringCompression ( string ){
    let compressed = "";
    let count = 1; 
    for (let i=0 ; i<string.length; i++){
        let curr = string[i];
        let next = string[i+1];
        if (curr === next) {
            count++;
        } else {
            compressed += curr + String(count);
            count = 1;
        }
    }
    return compressed.length < string.length ? compressed : string;
}

console.log(
stringCompression("aabccccaaa") === "a2b1c4a3",
stringCompression("abcdef") === "abcdef",
stringCompression("") === "",
)
