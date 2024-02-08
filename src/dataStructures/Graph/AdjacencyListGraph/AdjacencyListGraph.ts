import { ArrayList, LinkedList, Queue } from "../..";
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

        const visited: boolean[] = [];
        const data: T[] = [];
        this.dfsHelper(src, visited, data);

        return data;
    }

    private dfsHelper(src: number, visited: boolean[], data: T[]): T[] {
        const currentNodeList = this.adjacentList.get(src);
        const currentNodeData = currentNodeList?.getFirst()?.data;

        if (currentNodeData === undefined || currentNodeList === undefined)
            return data;

        if (visited[src]) return data;

        visited[src] = true;
        data[data.length] = currentNodeData;

        for (const node of currentNodeList) {
            const neighbourIndex = this.adjacentList.search(
                (list) => list.getFirst() === node
            );

            this.dfsHelper(neighbourIndex, visited, data);
        }

        return data;
    }

    public breadthFirstSearch(src: number): T[] {
        if (this.isEmpty()) return [];

        const queue = new Queue<number>();
        const visited: boolean[] = [];
        const data: T[] = [];

        queue.enqueue(src);

        while (!queue.isEmpty()) {
            const currentIndex = queue.dequeue();
            const currentList = this.adjacentList.get(currentIndex);
            const currentNode = currentList?.getFirst();

            if (currentList === undefined || currentNode === undefined)
                return data;

            visited[currentIndex] = true;
            data[data.length] = currentNode.data;

            for (let i = 0; i < currentList.size(); i++) {
                const adjacentNodeIndex = this.adjacentList.search(
                    (list) => list.getFirst() === currentList.get(i)
                );

                if (adjacentNodeIndex !== -1 && !visited[adjacentNodeIndex]) {
                    queue.enqueue(adjacentNodeIndex);
                    visited[adjacentNodeIndex] = true;
                }
            }
        }

        return data;
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
