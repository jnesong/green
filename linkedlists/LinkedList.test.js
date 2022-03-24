const LinkedList = require('./LinkedList') // import LinkedList file

describe('#insertAtHead', () => { //# is a convention to say we are testing a method of a class
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)
    })

})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(3)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the element at that index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)

            expect(ll.getByIndex(2).value).toBe(30)
        })
    })

})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(-1, 30)

            expect(ll.length).toBe(2)
        })

    })

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(5, 30)

            expect(ll.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('insert at the head', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.insertAtIndex(0, 30)

            expect(ll.head.value).toBe(30)
            expect(ll.head.next.value).toBe(10)
            expect(ll.length).toBe(3)
        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.insertAtIndex(2, 50)
            const node = ll.getByIndex(2)

            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(ll.length).toBe(5)
        })
    })


})

describe('#removeHead', () => {
    test('removes the head', () => {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeHead()

        expect(ll.head.value).toBe(20)
        expect(ll.length).toBe(2)
    })
})

describe('#removeAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeAtIndex(-1)

            expect(ll.length).toBe(2)
        })

    })

    describe('with index greater than list length', () => {
        test('it does not remove anything', () => {
            const ll = LinkedList.fromValues(10, 20)
            ll.removeAtIndex(5)

            expect(ll.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('remove at the head', () => {
            const ll = LinkedList.fromValues(10, 20, 30)
            ll.removeAtIndex(0)

            expect(ll.head.value).toBe(20)
            expect(ll.head.next.value).toBe(30)
            expect(ll.length).toBe(2)
        })
    })

    describe('with index in the middle', () => {
        test('remove at the given index', () => {
            const ll = LinkedList.fromValues(10, 20, 30, 40)
            ll.removeAtIndex(2)
            const node = ll.getByIndex(1)

            expect(node.value).toBe(20)
            expect(node.next.value).toBe(40)
            expect(ll.length).toBe(3)
        })
    })
})

describe('#removeDupes', () => {
    test('removes duplicates from an unsorted linked list', () => {
        const ll = LinkedList.fromValues(10, 11, 20, 20, 30, 40, 40)
        ll.removeDupes()

        expect(ll.length).toBe(5)
    })
})

describe('#returnK', () => {
    describe('with k less than 1', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.returnK(-1)).toBeNull()
            expect(ll.returnK(0)).toBeNull()
        })
    })

    describe('with k greater than list length', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.returnK(3)).toBeNull()
        })
    })

    describe('with k value between 1 and list length', () => {
        test('it finds the kth to last element', () => {
            const ll = LinkedList.fromValues(10, 11, 12, 13, 14, 15, 16)
            x = ll.returnK(3)

            expect(x).toBe(14)
        })
    })

})

describe('#deleteMiddle', () => {
    describe('with byeValue not in linked list', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 14, 40, 55, 20)

            expect(ll.deleteMiddle(33)).toBeNull()
        })
    })

    describe('with byeValue as head or last node', () => {
        test('it returns unchanged list', () => {
            const ll = LinkedList.fromValues(10, 14, 40, 55, 20)
            ll.deleteMiddle(10)
            ll.deleteMiddle(20)

            expect(ll.length).toBe(5)
        })
    })

    describe('with byeValue in the middle of linked list', () => {
        test('it returns a linked list with the byeValue removed', () => {
            const ll = LinkedList.fromValues(10, 14, 40, 55, 20)
            ll.deleteMiddle(55)

            expect(ll.length).toBe(4)
        })
    })

})
