const LinkedList = require ('./LinkedList') // import LinkedList file

// const ll = LinkedList.fromValues(10, 20, 30, 40)

// ll.print()
// ll.removeHead()
// ll.print()

const ll = LinkedList.fromValues(10, 11, 33, 42, 18, 14, 19, 6)

ll.print()
ll.partition(ll.getByIndex(0), 17)
ll.print()

