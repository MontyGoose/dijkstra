# Dijkstra
Node module to perform Dijkstra on a Graph and return "shortest" paths

## Usage

```Javascript
var DJ = require('dijkstra');

//create new DJ graph
var graph = new DJ();

//add edges to the graph
graph.addEdge(from,to,weight);   // where weight of the edge is +ve

//return shortest path between two nodes
graph.search(from, to);

## Further details
Check out the tests for more examples.
