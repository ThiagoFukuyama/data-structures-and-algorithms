/**
 * Unweight and directed Graph
 */
export class AdjacencyMatrixGraph {
    private readonly DEFAULT_SIZE: number = 5;
    private matrix: (0 | 1)[][];
    private numNodes: number;

    constructor(size: number) {
        this.numNodes = size > 0 ? size : this.DEFAULT_SIZE;
        this.matrix = Array.from({ length: this.numNodes }, () =>
            Array(this.numNodes).fill(0)
        );
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

    public toString(): string {
        const stringifiedGraph = this.matrix
            .map((row) => row.map((col) => col).join(" "))
            .join("\n");

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
