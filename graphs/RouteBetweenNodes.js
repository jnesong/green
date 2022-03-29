
let graph = [
    {node: "Harry", id: 1, follows: [2, 3, 5], visited: 0},
    {node: "Hermione", id:2, follows: [6, 3], visited: 0},
    {node: "Ron", id:3, follows: [2], visited: 0},
    {node: "Dumbledore", id:4, follows:[1], visited: 0},
    {node: "Hagrid", id:5, follows: [4], visited: 0},
    {node: "Ginny", id:6, follows: [8,3], visited: 0},
    {node: "Neville", id:7, follows: [6, 8], visited: 0},
    {node: "Luna", id:8, follows: [], visited: 0}
]

//Given a directed graph, design an algorithm to find out whether this is a route between two nodes
//Because its looking for paths breadth first search seems more applicable than depth first search

function BreadthSearch(nodeA, nodeB) {

}

function DepthSearch(nodeA, nodeB) {

}


console.log(BreadthSearch(graph[0], graph[7]))

