const LinkedList = require ('./LinkedList') // import LinkedList file

// const ll = LinkedList.fromValues(10, 20, 30, 40)

// ll.print()
// ll.insertAtIndex(2, 60) //this is not efficient 
// ll.print()
// ll.removeHead()
// ll.print()

const ll = LinkedList.fromValues(10, 11, 20, 20, 30, 40, 40)

ll.print()
ll.removeDupes()
ll.print()