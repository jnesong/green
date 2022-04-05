
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
    if (nodeA === nodeB) {
        return true
    }
    let queue = []
    nodeA.visited = 1
    queue.push(nodeA)
    while (queue[0]) {
        let current = queue.shift()
        if (current.follows[0]) {
            for (let i = 0; i < current.follows.length; i++) {
                // console.log(current.follows[i])

                if (current.follows[i] === nodeB.id) {
                    return true
                }

                let x = current.follows[i]
                if (graph[x].visited === 0) {
                    graph[x].visited = 1
                    queue.push(graph[x])
                }
                // console.log(queue)
            }
        }

    }
    return false
}

function DepthSearch(nodeA, nodeB) {
    if (nodeA === nodeB) {
        return true
    }
    let current = nodeA
    if (current.follows[0]) {
        for (let i = 0; i < current.follows.length; i++) {

            if (current.follows[i] === nodeB.id) {
                return true
            }

            let x = current.follows[i]
            // console.log(graph[x])
            if (graph[x].visited === 0) {
                graph[x].visited = 1
                if (DepthSearch(graph[x], nodeB)) {
                    return true
                }
            }
        }
    }

    return false

}

// console.log(BreadthSearch(graph[1], graph[7]) === true)
// console.log(BreadthSearch(graph[0], graph[3]) === true)
// console.log(BreadthSearch(graph[0], graph[0]) === true)
// console.log(BreadthSearch(graph[0], graph[8]) === false)
// console.log(BreadthSearch(graph[4], graph[8]) === false)

console.log(DepthSearch(graph[1], graph[7]) === true)
console.log(DepthSearch(graph[0], graph[3]) === true)
console.log(DepthSearch(graph[0], graph[0]) === true)
console.log(DepthSearch(graph[0], graph[8]) === false)
console.log(DepthSearch(graph[4], graph[8]) === false)





