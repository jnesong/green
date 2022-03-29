
let graph = [
    { node: "Harry", id: 0, follows: [1, 2, 4], visited: 0 },
    { node: "Hermione", id: 1, follows: [5, 2], visited: 0 },
    { node: "Ron", id: 2, follows: [1], visited: 0 },
    { node: "Dumbledore", id: 3, follows: [0], visited: 0 },
    { node: "Hagrid", id: 4, follows: [3], visited: 0 },
    { node: "Ginny", id: 5, follows: [7, 2], visited: 0 },
    { node: "Neville", id: 6, follows: [5, 7], visited: 0 },
    { node: "Luna", id: 7, follows: [], visited: 0 },
    { node: "Voldemort", id: 8, follows: [], visited: 0 }
]

//Given a directed graph, design an algorithm to find out whether this is a route between two nodes
//Because its looking for paths breadth first search seems more applicable than depth first search

function BreadthSearch(nodeA, nodeB) {
    let queue = []
    queue.push(nodeA)
    while (queue) {
        let current = queue.shift()
        for (let i = 0; i < current.follows.length; i++) {
            if (current.follows[i] === nodeB.id) {
                return true
            }
            current.visited = 1
            let x = current.follows[i]
            if (!graph[x].visited) {
                queue.push(graph[x])
            }
            // console.log(queue)
        }
    }
    return false
}

function DepthSearch(nodeA, nodeB) {

}


console.log(BreadthSearch(graph[0], graph[3]))

