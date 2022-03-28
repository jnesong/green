const Stack = require('./SQ')

class MyQueue {
    constructor(limit) {
        this.stack1 = []
        this.stack2 = []
        this.size = 0
        this.limit = limit
    }

    queue (){
        return this.stack2
    }

    pushQ(element) {
        if (this.size < this.limit) {
            this.stack1.push(element)
            this.size++
        }
        return element
    }

    popQ() {
        this.stack2 = []
        for (let i = this.stack1.length - 1; i >= 0; i--) {
            this.stack2.push(this.stack1[i])
        }
        let x = this.stack2.pop()
        this.stack1 = []
        for (let i = this.stack2.length - 1; i >= 0; i--) {
            this.stack1.push(this.stack2[i])
        }
        this.size--
        return x
    }

    peekQ() {
        for (let i = this.stack1.length - 1; i >= 0; i--) {
            this.stack2.push(this.stack1[i])
        }
        return this.stack2[this.size - 1]
    }

    emptyQ() {
        if (this.size < 1) {
            return true
        } else { return false }
    }

    fullQ() {
        if (this.size === this.limit) {
            return true
        } else { return false }
    }


}

module.exports = MyQueue