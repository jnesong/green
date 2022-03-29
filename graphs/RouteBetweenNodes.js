
let graph = [
    {node: "Harry", id: 1, nextTos: [2, 3, 5], visited: 0},
    {node: "Hermione", id:2, nextTos: [6, 3], visited: 0},
    {node: "Ron", id:3, nextTos: [2], visited: 0},
    {node: "Dumbledore", id:4, nextTos:[1], visited: 0},
    {node: "Hagrid", id:5, nextTos: [4], visited: 0},
    {node: "Ginny", id:6, nextTos: [8,3], visited: 0},
    {node: "Neville", id:7, nextTos: [6, 8], visited: 0},
    {node: "Luna", id:8, nextTos: [], visited: 0}
]

//Given a directed graph, design an algorithm to find out whether this is a route between two nodes
//Because its looking for paths breadth first search seems more applicable than depth first search

function RouteBetweenNodes(nodeA, nodeB) {

}

console.log(RouteBetweenNodes(graph[0], graph[7]))

