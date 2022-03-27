class Stack {
    constructor( limit ){
        this.data = []
        this.limit = limit
        this.size = 0
        this.min = []
    }

    push (element) {
        this.data.push( element )
        this.size++
        if (element < min){
            this.min.push (element)
        }

    }

    pop () {
        this.data.pop()
        this.size--
    }

    peek(){
        return this.data[this.size-1]
    }

    empty (){
        if (this.size < 1){
            return true
        } else {return false}
    }

    full(){
        if (this.size === this.limit) {
            return true
        } else {return false}
    }
}

module.exports = Stack