import { AdjacencyMatrixGraph, Node } from "./AdjacencyMatrixGraph";

let graph: AdjacencyMatrixGraph<string>;

beforeEach(() => {
    graph = new AdjacencyMatrixGraph(5);
});

describe("AdjacencyMatrixGraph", () => {
    describe("#addNode", () => {
        it("Should add a new node on the graph", () => {
            graph.addNode("A");

            const newNodeData = graph
                .getNodes()
                .find((node) => node.data === "A")?.data;

            expect(newNodeData).toBe("A");
        });

        it("Should not add a node if it exceeds the matrix length", () => {
            const nodeNames = ["A", "B", "C", "D", "E", "ZZZZ"];

            nodeNames.forEach((name) => graph.addNode(name));
            const expected = nodeNames.map((name) => new Node(name));

            expected.pop();

            expect(graph.getNodes()).toEqual(expected);
        });
    });

    describe("#getNode", () => {
        it("Should return all the set nodes ", () => {
            const nodeNames = ["A", "B", "C"];

            nodeNames.forEach((name) => graph.addNode(name));
            const expected = nodeNames.map((name) => new Node(name));

            const nodes = graph.getNodes();

            expect(nodes).toEqual(expected);
        });

        it("Should return an empty array when no nodes are set", () => {
            const nodes = graph.getNodes();
            expect(nodes).toEqual([]);
        });
    });

    describe("#hasEdge", () => {
        it("Should return true when there's an edge between the nodes", () => {
            graph.addEdge(1, 3);
            const result = graph.hasEdge(1, 3);

            expect(result).toBe(true);
        });

        it("Should return false when there's no edge between the nodes", () => {
            const result = graph.hasEdge(0, 4);
            expect(result).toBe(false);
        });
    });

    describe("#addEdge", () => {
        it("Should add an edge to the Graph", () => {
            graph.addEdge(3, 1);
            expect(graph.hasEdge(3, 1)).toBe(true);
        });

        it("Should maintain the edge to the Graph", () => {
            graph.addEdge(0, 2);
            graph.addEdge(0, 2);

            expect(graph.hasEdge(0, 2)).toBe(true);
        });

        it("Should not add an edge when the nodes are invalid", () => {
            graph.addEdge(15, -4);
            expect(graph.hasEdge(15, -4)).toBe(false);
        });
    });

    describe("#removeEdge", () => {
        it("Should remove the edge from the Graph", () => {
            graph.addEdge(3, 4);
            graph.removeEdge(3, 4);

            expect(graph.hasEdge(3, 4)).toBe(false);
        });

        it("Should maintain the edge removed", () => {
            graph.removeEdge(2, 1);
            expect(graph.hasEdge(2, 1)).toBe(false);
        });
    });

    describe("#getNeighbours", () => {
        it("Should return the adjacent nodes from the given one", () => {
            graph.addEdge(4, 0);
            graph.addEdge(2, 0);
            const neighbours = graph.getNeighbours(4);

            expect(neighbours).toEqual([1, 0, 0, 0, 0]);
        });

        it("Should return undefined when the given node is invalid", () => {
            graph.addEdge(0, 3);
            const neighbours = graph.getNeighbours(6);

            expect(neighbours).toBeUndefined();
        });
    });

    describe("#get size", () => {
        it("Should return the number of nodes of the Graph", () => {
            expect(graph.size).toBe(5);
        });
    });

    describe("#toString", () => {
        it("Should return a string representation of the adjacency matrix", () => {
            const nodeNames = ["A", "B", "C", "D", "E"];

            nodeNames.forEach((name) => graph.addNode(name));

            graph.addEdge(1, 0);
            graph.addEdge(2, 4);
            graph.addEdge(3, 2);
            graph.addEdge(4, 2);

            const expectedString =
                "  A B C D E \nA 0 0 0 0 0 \nB 1 0 0 0 0 \nC 0 0 0 0 1 \nD 0 0 1 0 0 \nE 0 0 1 0 0 ";

            expect(graph.toString()).toBe(expectedString);
        });

        it("Should return an empty representation of the graph", () => {
            expect(graph.toString()).toBe("( )");
        });
    });
});
