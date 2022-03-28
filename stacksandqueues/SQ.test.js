const Stack = require ('./SQ')

describe('#Min', () => {
    describe('with empty stack', () => {
        test('it returns null', () => {
            const ss = new Stack (10)

            expect(ss.min()).toBeNull()
        })
    })

    describe('with stack', () => {
        test ('it returns minimum', () => {
            const ss = Stack.fromValues(10, 33, 42, 14, 2, 6, 16)
            const sa = Stack.fromValues(10, 33, 42, 14, 2)
            sa.pop()

            expect(ss.min()).toBe(2)
            expect(sa.min()).toBe(10)
        })
    })


    })
