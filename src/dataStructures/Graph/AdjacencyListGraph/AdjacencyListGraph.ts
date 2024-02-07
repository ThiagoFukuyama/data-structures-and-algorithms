import { ArrayList, LinkedList } from "../..";
import { Graph, GraphNode } from "../Graph";

export class AdjacencyListGraph<T> implements Graph<T> {
    adjacentList: ArrayList<LinkedList<Node<T>>>;

    constructor() {
        this.adjacentList = new ArrayList();
    }

    public addNode(data: T) {
        const newNodeList = new LinkedList<Node<T>>();
        newNodeList.append(new Node(data));

        this.adjacentList.add(newNodeList);
    }

    public getNodes() {
        if (this.adjacentList.isEmpty()) return [];

        return [...this.adjacentList].map(
            (nodeList) => nodeList.getFirst() as Node<T>
        );
    }

    public addEdge(src: number, dest: number) {
        const srcList = this.adjacentList.get(src);
        const destNode = this.adjacentList.get(dest)?.getFirst();

        if (srcList === undefined || destNode === undefined) return;

        srcList.append(destNode);
    }

    public removeEdge(src: number, dest: number) {
        const srcList = this.adjacentList.get(src);
        const destNode = this.adjacentList.get(dest)?.getFirst();

        if (srcList === undefined || destNode === undefined) return;

        const index = srcList.search((node) => node === destNode);
        if (index === -1) return;

        srcList.delete(index);
    }

    public hasEdge(src: number, dest: number): boolean {
        const srcList = this.adjacentList.get(src);
        const destNode = this.adjacentList.get(dest)?.getFirst();

        if (srcList === undefined || destNode === undefined) return false;

        return srcList.contains((node) => node === destNode);
    }

    public getNeighbours(node: number): Node<T>[] | undefined {
        const nodeList = this.adjacentList.get(node);

        if (nodeList === undefined) return;

        return [...nodeList];
    }

    public depthFirstSearch(src: number): T[] {
        if (this.isEmpty()) return [];

        const visited: T[] = [];
        const result = this.dfsHelper(src, visited);

        return result;
    }

    private dfsHelper(src: number, visited: T[]): T[] {
        const currentNodeList = this.adjacentList.get(src);
        const currentNodeData = currentNodeList?.getFirst()?.data;

        if (currentNodeData === undefined || currentNodeList === undefined)
            return visited;

        if (visited.includes(currentNodeData)) return visited;

        visited[visited.length] = currentNodeData;

        for (const node of currentNodeList) {
            const neighbourIndex = this.adjacentList.search(
                (list) => list.getFirst() === node
            );

            this.dfsHelper(neighbourIndex, visited);
        }

        return visited;
    }

    public get size(): number {
        return this.adjacentList.size();
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public toString(): string {
        if (this.isEmpty()) return "( )";

        let stringifiedGraph = "";

        for (const nodeList of this.adjacentList) {
            for (const node of nodeList) {
                stringifiedGraph += `( Node data = ${node.data} )` + " -> ";
            }
            stringifiedGraph = stringifiedGraph.slice(0, -3);
            stringifiedGraph += "\n";
        }

        return stringifiedGraph;
    }
}

export class Node<T> implements GraphNode<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }
}
