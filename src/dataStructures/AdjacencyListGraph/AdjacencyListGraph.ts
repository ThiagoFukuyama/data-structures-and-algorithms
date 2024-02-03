import { ArrayList, LinkedList } from "..";

export class AdjacencyListGraph<T> {
    adjacentList: ArrayList<LinkedList<Node<T>>>;

    constructor() {
        this.adjacentList = new ArrayList();
    }

    public addNode(data: T) {
        const newNodeList = new LinkedList<Node<T>>();
        newNodeList.append(new Node(data));

        this.adjacentList.add(newNodeList);
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

    public get size(): number {
        return this.adjacentList.size();
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public toString(): string {
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

export class Node<T> {
    data: T;

    constructor(data: T) {
        this.data = data;
    }
}
