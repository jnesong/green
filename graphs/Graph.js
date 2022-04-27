class Graph {
    #privateCount;
    #privateFirst;
    constructor(){
        this.#privateCount = 0
        this.#privateFirst = null
    }

    insertFirst (value, pointsTo) {

        const newNode = new GraphNode (value, pointsTo)

        if (!this.first){
            this.#privateCount++
            this.first = newNode
        }
    }

    addNewChildNode(currentNode, newNode){
        currentNode.newChild(newNode);
        this.#privateCount++;
    }



}


class GraphNode {
    constructor(value){
        this.value = value
        this.pointsTo= []
        this.visited=0
        this.id = null
        
    }

    newChild(childNode){
        this.pointsTo.push(childNode)
    }
}

// let gg = new Graph
// gg.insertToGraph("peaches")
// gg.insertToGraph("oranges")
// console.log(gg)
// gg.first.pointsTo = [];



let ng = new Graph
ng.insertFirst("peaches");
ng.addNewChildNode(ng.first, new GraphNode("oranges"))
console.log(ng)
console.log(ng.count)