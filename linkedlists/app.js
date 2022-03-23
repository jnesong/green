const LinkedList = require ('./LinkedList') // import LinkedList file

// const ll = LinkedList.fromValues(10, 20, 30, 40)

// ll.print()
// ll.removeHead()
// ll.print()

const ll = LinkedList.fromValues(10, 11, 14, 18, 19, 20)

ll.print()
ll.deleteWOHead(ll.getByIndex(4))
ll.print()

