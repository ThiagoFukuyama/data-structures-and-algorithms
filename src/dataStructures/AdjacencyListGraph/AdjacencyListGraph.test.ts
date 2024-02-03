import { AdjacencyListGraph, Node } from "./AdjacencyListGraph";

let adjacencyListGraph: AdjacencyListGraph<string>;

beforeEach(() => {
    adjacencyListGraph = new AdjacencyListGraph();
    adjacencyListGraph.addNode("A");
    adjacencyListGraph.addNode("B");
});

describe("AdjacencyListGraph", () => {
    describe("#addNode", () => {
        it("Should add new nodes to the graph", () => {
            adjacencyListGraph.addNode("C");
            expect(adjacencyListGraph.size).toBe(3);
        });
    });

    describe("#hasEdge", () => {
        it("Should return true when there's an edge between the nodes", () => {
            adjacencyListGraph.addEdge(0, 1);
            const result = adjacencyListGraph.hasEdge(0, 1);

            expect(result).toBe(true);
        });

        it("Should return false when there's no edge between the nodes", () => {
            const result = adjacencyListGraph.hasEdge(0, 1);
            expect(result).toBe(false);
        });
    });

    describe("#addEdge", () => {
        it("Should add an edge to the Graph", () => {
            adjacencyListGraph.addEdge(0, 1);
            expect(adjacencyListGraph.hasEdge(0, 1)).toBe(true);
        });

        it("Should maintain the edge to the Graph", () => {
            adjacencyListGraph.addEdge(0, 1);
            adjacencyListGraph.addEdge(0, 1);

            expect(adjacencyListGraph.hasEdge(0, 1)).toBe(true);
        });

        it("Should not add an edge when the nodes are invalid", () => {
            adjacencyListGraph.addEdge(15, -4);
            expect(adjacencyListGraph.hasEdge(15, -4)).toBe(false);
        });
    });

    describe("#removeEdge", () => {
        it("Should remove the edge from the Graph", () => {
            adjacencyListGraph.addEdge(0, 1);
            expect(adjacencyListGraph.hasEdge(0, 1)).toBe(true);

            adjacencyListGraph.removeEdge(0, 1);
            expect(adjacencyListGraph.hasEdge(0, 1)).toBe(false);
        });

        it("hould maintain the edge removed", () => {
            adjacencyListGraph.removeEdge(0, 1);
            adjacencyListGraph.removeEdge(0, 1);

            expect(adjacencyListGraph.hasEdge(0, 1)).toBe(false);
        });
    });

    describe("#getNeighbours", () => {
        it("Should return the adjacent nodes from the given one", () => {
            adjacencyListGraph.addEdge(1, 0);
            const neighbours = adjacencyListGraph.getNeighbours(1);

            expect(neighbours).toEqual([new Node("B"), new Node("A")]);
        });

        it("Should return undefined when the given node is invalid", () => {
            adjacencyListGraph.addEdge(1, 0);
            const neighbours = adjacencyListGraph.getNeighbours(6);

            expect(neighbours).toBeUndefined();
        });
    });

    describe("#get size", () => {
        it("Should return the number of nodes of the Graph", () => {
            expect(adjacencyListGraph.size).toBe(2);
        });
    });

    describe("#isEmpty", () => {
        describe("#isEmpty", () => {
            it("Should return false when there's at least one item in the Hashtable", () => {
                expect(adjacencyListGraph.isEmpty()).toBe(false);
            });

            it("Should return true when the Hashtable has no elements", () => {
                const emptyListGraph = new AdjacencyListGraph<string>();
                expect(emptyListGraph.isEmpty()).toBe(true);
            });
        });
    });

    describe("#toString", () => {
        it("Should return a string representation of the adjacency list", () => {
            adjacencyListGraph.addEdge(1, 0);
            const stringifiedGraph = adjacencyListGraph.toString();

            expect(stringifiedGraph).toContain(
                "( Node data = B ) -> ( Node data = A )"
            );
        });
    });
});
