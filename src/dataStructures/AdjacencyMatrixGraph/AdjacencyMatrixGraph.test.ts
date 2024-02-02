import { AdjacencyMatrixGraph } from "./AdjacencyMatrixGraph";

let adjacencyMatrixGraph: AdjacencyMatrixGraph;

beforeEach(() => {
    adjacencyMatrixGraph = new AdjacencyMatrixGraph(5);
});

describe("AdjacencyMatrixGraph", () => {
    describe("#hasEdge", () => {
        it("Should return true when there's an edge between the nodes", () => {
            adjacencyMatrixGraph.addEdge(1, 3);
            const result = adjacencyMatrixGraph.hasEdge(1, 3);

            expect(result).toBe(true);
        });

        it("Should return false when there's no edge between the nodes", () => {
            const result = adjacencyMatrixGraph.hasEdge(0, 4);
            expect(result).toBe(false);
        });
    });

    describe("#addEdge", () => {
        it("Should add an edge to the Graph", () => {
            adjacencyMatrixGraph.addEdge(3, 1);
            expect(adjacencyMatrixGraph.hasEdge(3, 1)).toBe(true);
        });

        it("Should maintain the edge to the Graph", () => {
            adjacencyMatrixGraph.addEdge(0, 2);
            adjacencyMatrixGraph.addEdge(0, 2);

            expect(adjacencyMatrixGraph.hasEdge(0, 2)).toBe(true);
        });

        it("Should not add an edge when the nodes are invalid", () => {
            adjacencyMatrixGraph.addEdge(15, -4);
            expect(adjacencyMatrixGraph.hasEdge(15, -4)).toBe(false);
        });
    });

    describe("#removeEdge", () => {
        it("Should remove the edge from the Graph", () => {
            adjacencyMatrixGraph.addEdge(3, 4);
            adjacencyMatrixGraph.removeEdge(3, 4);

            expect(adjacencyMatrixGraph.hasEdge(3, 4)).toBe(false);
        });

        it("hould maintain the edge removed", () => {
            adjacencyMatrixGraph.removeEdge(2, 1);
            expect(adjacencyMatrixGraph.hasEdge(2, 1)).toBe(false);
        });
    });

    describe("#getNeighbours", () => {
        it("Should return the adjacent nodes from the given one", () => {
            adjacencyMatrixGraph.addEdge(4, 0);
            adjacencyMatrixGraph.addEdge(2, 0);
            const neighbours = adjacencyMatrixGraph.getNeighbours(4);

            expect(neighbours).toEqual([1, 0, 0, 0, 0]);
        });

        it("Should return undefined when the given node is invalid", () => {
            adjacencyMatrixGraph.addEdge(0, 3);
            const neighbours = adjacencyMatrixGraph.getNeighbours(6);

            expect(neighbours).toBeUndefined();
        });
    });

    describe("#get size", () => {
        it("Should return the number of nodes of the Graph", () => {
            expect(adjacencyMatrixGraph.size).toBe(5);
        });
    });

    describe("#toString", () => {
        it("Should return a string representation of the adjacency matrix", () => {
            adjacencyMatrixGraph.addEdge(1, 0);
            adjacencyMatrixGraph.addEdge(2, 4);
            adjacencyMatrixGraph.addEdge(4, 2);

            const expectedString = `0 0 0 0 0\n1 0 0 0 0\n0 0 0 0 1\n0 0 0 0 0\n0 0 1 0 0`;

            expect(adjacencyMatrixGraph.toString()).toBe(expectedString);
        });
    });
});
