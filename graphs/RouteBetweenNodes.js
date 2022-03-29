//Given a directed graph, design an algorithm to find out whether this is a route between two nodes

//Because its looking for paths breadth first search seems more applicable than depth first search
let graph = [
    {node: "Harry", id: 1, neighbor1: 2, neighbor2: 3, neighbor3: 5},
    {node: "Hermione", id:2, neighbor1: 6, neighbor2: 3},
    {node: "Ron", id:3, neighbor1: 2},
    {node: "Dumbledore", id:4, neighbor1: 1},
    {node: "Hagrid", id:5, neighbor1: 4},
    {node: "Ginny", id:6, neighbor1: 8, neighbor2: 3},
    {node: "Neville", id:7, neighbor1: 6, neighbor2: 8},
    {node: "Luna", id:8}
]