class MySet {
    // throw an error if called with anything other than string, array or nothing
    // if an iterable is provided only its unique values should be in data
    // strings and arrays will need to be broken down by their elements/characters
    constructor(iterable) {
        this.data = {};
        this.count = 0;
        for (let i = 0; i < iterable.length; i++) {
            if (this.data[iterable[i]]) {

            } else {
                this.data[iterable[i]] = true;
                this.count++
            }
        };
    }

    // return number of elements in MySet
    size() {
        return this.count
    }

    // add an item to MySet as is
    // don't worry about arrays here!
    // return the MySet instance
    add(item) {
        if (this.data[item]){

        } else {
            this.data[item] = true ;
            this.count++
        }
        return this
    }

    // delete an item from MySet
    // don't worry about arrays here!
    // return true if successful, otherwise false
    delete(item) {

    }

    // return true if in MySet, otherwise false
    // don't worry about arrays here!
    has(item) {

    }

    // return data as an array
    // don't worry about arrays here!
    entries() {

    }
}

if (require.main === module) {
    // add your own tests in here

}

module.exports = MySet;


let ms = new MySet("aaaab")
console.log(ms)
console.log(ms.size())
console.log(ms.add("a"))
console.log(ms.add("d"))