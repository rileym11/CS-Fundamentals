class ES6Graph {
  constructor() {
    this.vertices = []; //Array that will store all the vertices
    this.adjList = new Map(); //ES6 map class to store the adjacent list
  }
  addVertex(v) {
    this.vertices.push(v); //Push the vertex to the array of vertices
    this.adjList.set(v, []); //Initialize a key with the new vertex and an empty adjacent array as the value
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w); //Add the w vertex into the v vertex's adjacent list
    this.adjList.get(w).push(v); //If using Un-directed graphs then push v vertex into the w vertex's adjacent list
  }
  toString() {
    var s = '';
    let vertices = this.vertices;
    let adjList = this.adjList;
    for (var i = 0; i < vertices.length; i++) {
      //Iterate through all the vertices
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //Next get each vertex's adjacent list
      for (var j = 0; j < neighbors.length; j++) {
        // Iterate the adj list and add each one to the string
        s += neighbors[j] + ' ';
      }
      s += '\n'; //so each vertex is printed on a new line
    }
    return s;
  }
}

//Tests
var graph = new ES6Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
  //Add all the vertices
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //Create some edges (connections)
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());
