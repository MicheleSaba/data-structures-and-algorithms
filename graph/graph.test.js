"use strict";
const Graph = require('./graph');

describe('Graph', () => {
 it('can create a graph', () => {
   const graph = new Graph()
   graph.addVertex('A');
   expect(graph).toBeDefined();
 })
})
