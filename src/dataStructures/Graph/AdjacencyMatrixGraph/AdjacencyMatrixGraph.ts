import { Queue } from "../..";
import { Graph, GraphNode } from "../Graph";

/**
 * Unweight and directed Graph
 */
export class AdjacencyMatrixGraph<T> implements Graph<T> {
    private readonly DEFAULT_SIZE: number = 5;
    private nodes: Node<T>[];
    private matrix: (0 | 1)[][];
    private numNodes: number;

    constructor(size: number) {
        this.numNodes = size > 0 ? size : this.DEFAULT_SIZE;
        this.nodes = [];
        this.matrix = Array.from({ length: this.numNodes }, () =>
            Array(this.numNodes).fill(0)
        );
    }

    public addNode(data: T) {
        if (this.nodes.length >= this.numNodes) return;

        this.nodes[this.nodes.length] = new Node(data);
    }

    public getNodes(): Node<T>[] {
        return this.nodes;
    }

    public addEdge(src: number, dest: number) {
        if (!this.isValidEdge(src, dest)) return;

        this.matrix[src][dest] = 1;
    }

    public removeEdge(src: number, dest: number) {
        if (!this.isValidEdge(src, dest)) return;

        this.matrix[src][dest] = 0;
    }

    public hasEdge(src: number, dest: number): boolean {
        if (!this.isValidEdge(src, dest)) return false;

        return this.matrix[src][dest] === 1;
    }

    public getNeighbours(node: number): (0 | 1)[] | undefined {
        return this.matrix[node];
    }

    public depthFirstSearch(src: number): T[] {
        if (this.nodes.length <= 0) return [];

        const visited: boolean[] = [];
        const data: T[] = [];
        this.dfsHelper(src, visited, data);

        return data;
    }

    private dfsHelper(src: number, visited: boolean[], data: T[]): T[] {
        if (visited[src]) return data;

        visited[src] = true;
        data[data.length] = this.nodes[src].data;

        for (let i = 0; i < this.matrix[src].length; i++) {
            if (this.matrix[src][i] === 1) {
                this.dfsHelper(i, visited, data);
            }
        }

        return data;
    }

    public breadthFirstSearch(src: number): T[] {
        if (this.nodes.length <= 0) return [];

        const queue = new Queue<number>();
        const visited: boolean[] = [];
        const data: T[] = [];

        queue.enqueue(src);

        while (!queue.isEmpty()) {
            const currentIndex = queue.dequeue();
            const currentNode = this.nodes[currentIndex];

            if (currentNode === undefined) return data;

            visited[currentIndex] = true;
            data[data.length] = currentNode.data;

            for (let i = 0; i < this.matrix[currentIndex].length; i++) {
                if (this.matrix[currentIndex][i] === 1 && !visited[i]) {
                    queue.enqueue(i);
                    visited[i] = true;
                }
            }
        }

        return data;
    }

    public toString(): string {
        if (this.nodes.length <= 0) return "( )";

        let stringifiedGraph = "  ";

        for (const node of this.nodes) {
            stringifiedGraph += `${node.data} `;
        }

        for (let i = 0; i < this.matrix.length; i++) {
            stringifiedGraph += `\n${this.nodes[i].data} `;

            for (let j = 0; j < this.matrix[i].length; j++) {
                stringifiedGraph += `${this.matrix[i][j]} `;
            }
        }

        return stringifiedGraph;
    }

    public get size() {
        return this.numNodes;
    }

    private isValidEdge(src: number, dest: number): boolean {
        return (
            src >= 0 &&
            src <= this.numNodes &&
            dest >= 0 &&
            dest <= this.numNodes
        );
    }
}

export class Node<T> implements GraphNode<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }
}
