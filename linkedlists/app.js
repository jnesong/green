const LinkedList = require ('./LinkedList') // import LinkedList file

// const ll = LinkedList.fromValues(10, 20, 30, 40)

// ll.print()
// ll.removeHead()
// ll.print()

const ll = LinkedList.fromValues(10, 33, 42, 14, 2, 6, 16)

ll.print()
ll.partition(15)
ll.print()
