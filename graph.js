class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(source, destination) {
    this.nodes.get(source).push(destination);
    this.nodes.get(destination).push(source);
  }

  removeNode(node) {
    let neighbors = this.nodes.get(node);

    for (let neighbor of neighbors) {
      let adjacencyListOfNeighbor = this.nodes.get(neighbor);
      this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor);
    }

    this.nodes.delete(node);
  }

  removeEdge(source, destination) {
    let adjacencyListOfSource = this.nodes.get(source);
    let adjacencyListOfDestination = this.nodes.get(destination);

    this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
    this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
  }

  getIndexAndRemoveItem(item, list) {
    const index = list.indexOf(item);
    list.splice(index, 1);
  }

  display() {
    for (let [node, adjacencyList] of this.nodes) {
      console.log(`${node}: ${adjacencyList}`);
    }
  }
}

let graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('D');
graph.addNode('C');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.display();


graph.removeNode("D")
graph.display()

graph.removeEdge("A","B")
graph.display()