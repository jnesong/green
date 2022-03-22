class LinkedList {
    constructor() { // no parameters, default empty linked list
        this.head = null// beginning of linked list
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head) //create new node, give it the value of data we want, make the current head the next node
        this.head = newNode // new start of list is the new node
        this.length++ // increase the length of the LinkedList
    } // first method - add elements to linked list at the beginning, data is the value we want to insert 

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null // passes first 2 tests

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null

        prev.next = new LinkedListNode(value, prev.next) //create new node between two nodes
        this.length++
    }

    removeHead() {
        this.head = this.head.next
        this.length--
    }

    removeAtIndex(index) {
        if (index === 0) return this.removeHead()

        const prev = this.getByIndex(index - 1)
        if (prev == null) return null

        prev.next = prev.next.next //cut out previous value's next and set as the next 
        this.length--
    }

    removeDupes() {
        let current = this.head;
        while (current) {
            let runner = current;
            while (runner.next) {
                if (runner.next.value === current.value) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
        }

    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

}

class LinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

//helper function to create LinkedList from array of values 
LinkedList.fromValues = function (...values) {
    const ll = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i])
    }
    return ll
}

module.exports = LinkedList
// so we can access this inside test file