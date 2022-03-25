const Stack = require('./SQ')

class ThreeInOne {
    constructor(capacity) {
        this.currentSize = 0
        this.capacity = capacity
        this.stack1 = new Stack(capacity / 3)
        this.stack2 = new Stack(capacity / 3)
        this.stack3 = new Stack(capacity / 3)
        // this.container = [ this.stack1, this.stack2, this.stack3 ]

    }


    pushpush(element) {
        if (this.stack1.size < this.stack1.limit) {
            this.stack1.data.push(element)
            this.stack1.size++
            this.currentSize++
        } else if (this.stack2.size < this.stack2.limit) {
            this.stack2.data.push(element)
            this.stack2.size++
            this.currentSize++
        } else if (this.stack3.size < this.stack3.limit){
            this.stack3.data.push( element )
            this.stack3.size++
            this.currentSize++
        } else {return 0}

    }

    poppop () {
        if (this.stack1.size > 0) {
            this.stack1.data.pop()
            this.stack1.size--
            this.currentSize--
        } else if (this.stack2.size > 0) {
            this.stack2.data.pop()
            this.stack2.size--
            this.currentSize--
        } else if (this.stack3.size > 0){
            this.stack3.data.pop()
            this.stack3.size--
            this.currentSize--
        } else {return 0}
    }

    peekpeek(){
        let lastElements = []
        lastElements.push(this.stack1.data[this.stack1.size-1])
        lastElements.push(this.stack2.data[this.stack2.size-1])
        lastElements.push(this.stack3.data[this.stack3.size-1])
        return lastElements
    }

    emptyempty (){
        if (this.currentSize < 1){
            return true
        } else {return false}
    }

    fullfull(){
        if (this.currentSize === this.capacity) {
            return true
        } else {return false}
    }

}

module.exports = ThreeInOne

