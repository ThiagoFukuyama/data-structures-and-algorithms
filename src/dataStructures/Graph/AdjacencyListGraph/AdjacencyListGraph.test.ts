import { AdjacencyListGraph, Node } from "./AdjacencyListGraph";

let graph: AdjacencyListGraph<string>;

beforeEach(() => {
    graph = new AdjacencyListGraph();
    graph.addNode("A");
    graph.addNode("B");
});

describe("AdjacencyListGraph", () => {
    describe("#addNode", () => {
        it("Should add new nodes to the graph", () => {
            graph.addNode("C");
            expect(graph.size).toBe(3);
        });
    });

    describe("#getNodes", () => {
        it("Should return all the set nodes ", () => {
            const nodes = graph.getNodes();
            expect(nodes).toEqual([new Node("A"), new Node("B")]);
        });

        it("Should return an empty array when no nodes are set", () => {
            const emptyGraph = new AdjacencyListGraph<string>();
            expect(emptyGraph.getNodes()).toEqual([]);
        });
    });

    describe("#hasEdge", () => {
        it("Should return true when there's an edge between the nodes", () => {
            graph.addEdge(0, 1);
            const result = graph.hasEdge(0, 1);

            expect(result).toBe(true);
        });

        it("Should return false when there's no edge between the nodes", () => {
            const result = graph.hasEdge(0, 1);
            expect(result).toBe(false);
        });
    });

    describe("#addEdge", () => {
        it("Should add an edge to the Graph", () => {
            graph.addEdge(0, 1);
            expect(graph.hasEdge(0, 1)).toBe(true);
        });

        it("Should maintain the edge to the Graph", () => {
            graph.addEdge(0, 1);
            graph.addEdge(0, 1);

            expect(graph.hasEdge(0, 1)).toBe(true);
        });

        it("Should not add an edge when the nodes are invalid", () => {
            graph.addEdge(15, -4);
            expect(graph.hasEdge(15, -4)).toBe(false);
        });
    });

    describe("#removeEdge", () => {
        it("Should remove the edge from the Graph", () => {
            graph.addEdge(0, 1);
            expect(graph.hasEdge(0, 1)).toBe(true);

            graph.removeEdge(0, 1);
            expect(graph.hasEdge(0, 1)).toBe(false);
        });

        it("hould maintain the edge removed", () => {
            graph.removeEdge(0, 1);
            graph.removeEdge(0, 1);

            expect(graph.hasEdge(0, 1)).toBe(false);
        });
    });

    describe("#getNeighbours", () => {
        it("Should return the adjacent nodes from the given one", () => {
            graph.addEdge(1, 0);
            const neighbours = graph.getNeighbours(1);

            expect(neighbours).toEqual([new Node("B"), new Node("A")]);
        });

        it("Should return undefined when the given node is invalid", () => {
            graph.addEdge(1, 0);
            const neighbours = graph.getNeighbours(6);

            expect(neighbours).toBeUndefined();
        });
    });

    describe("#depthFirstSearch", () => {
        it("Should return an array with the order of the traversed nodes data", () => {
            const newNodeNames = ["C"];
            const nodeEdges: [number, number][] = [
                [0, 2],
                [2, 1],
                [1, 0],
            ];

            newNodeNames.forEach((name) => graph.addNode(name));
            nodeEdges.forEach((edge) => graph.addEdge(...edge));

            const result1 = graph.depthFirstSearch(0);
            expect(result1).toEqual(["A", "C", "B"]);

            const result2 = graph.depthFirstSearch(1);
            expect(result2).toEqual(["B", "A", "C"]);
        });

        it("Should return an empty array", () => {
            const emptyGraph = new AdjacencyListGraph<string>();
            const result = emptyGraph.depthFirstSearch(0);

            expect(result).toEqual([]);
        });
    });

    describe("#breadthFirstSearch", () => {
        it("Should return an array with the order of the traversed nodes data", () => {
            const newNodeNames = ["C", "D", "E"];
            const edges: [number, number][] = [
                [0, 1],
                [1, 2],
                [1, 4],
                [2, 3],
                [2, 4],
                [4, 0],
                [4, 2],
            ];

            newNodeNames.forEach((name) => graph.addNode(name));
            edges.forEach((edge) => graph.addEdge(...edge));

            const result1 = graph.breadthFirstSearch(0);
            expect(result1).toEqual(["A", "B", "C", "E", "D"]);

            const result2 = graph.breadthFirstSearch(2);
            expect(result2).toEqual(["C", "D", "E", "A", "B"]);
        });

        it("Should return an empty array when there are no nodes", () => {
            const emptyGraph = new AdjacencyListGraph<string>();
            const result = emptyGraph.breadthFirstSearch(0);

            expect(result).toEqual([]);
        });

        it("Should return an empty array when the given start point is invalid", () => {
            graph.addEdge(0, 1);
            const result = graph.breadthFirstSearch(15);

            expect(result).toEqual([]);
        });
    });

    describe("#get size", () => {
        it("Should return the number of nodes of the Graph", () => {
            expect(graph.size).toBe(2);
        });
    });

    describe("#isEmpty", () => {
        describe("#isEmpty", () => {
            it("Should return false when there's at least one item in the Hashtable", () => {
                expect(graph.isEmpty()).toBe(false);
            });

            it("Should return true when the Hashtable has no elements", () => {
                const emptyListGraph = new AdjacencyListGraph<string>();
                expect(emptyListGraph.isEmpty()).toBe(true);
            });
        });
    });

    describe("#toString", () => {
        it("Should return a string representation of the adjacency list", () => {
            graph.addEdge(1, 0);
            const stringifiedGraph = graph.toString();

            expect(stringifiedGraph).toContain(
                "( Node data = B ) -> ( Node data = A )"
            );
        });

        it("Should return an empty representation of the graph", () => {
            const emptyGraph = new AdjacencyListGraph<string>();
            expect(emptyGraph.toString()).toBe("( )");
        });
    });
});
