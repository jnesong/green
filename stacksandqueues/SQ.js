class Stack {
    constructor(limit) {
        this.data = []
        this.limit = limit
        this.size = 0
        this.mins = []
    }

    push(element) {
        if (!this.mins[this.mins.length - 1]) {
            this.mins.push(element)
        }
        else if (element < this.mins[this.mins.length - 1]) {
            this.mins.push(element)
        }

        this.data.push(element)
        this.size++
    }

    pop() {
        let x = this.data.pop()
        this.size--
        if (x === this.mins[this.mins.length - 1]) {
            this.mins.pop()
        }
    }

    peek() {
        return this.data[this.size - 1]
    }

    empty() {
        if (this.size < 1) {
            return true
        } else { return false }
    }

    full() {
        if (this.size === this.limit) {
            return true
        } else { return false }
    }

    min(){
        if (this.mins[this.mins.length - 1]) {
            return this.mins[this.mins.length - 1]
        } else {return null}
    }
}

Stack.fromValues = function (...values){
    const ss = new Stack ( 10 )
    for (let i=0 ; i < values.length; i++ ){
        ss.push(values[i])
    }
    return ss
}

module.exports = Stack