export interface Graph<T> {
    addNode: (data: T) => void;
    getNodes: () => GraphNode<T>[];
    addEdge: (src: number, dest: number) => void;
    removeEdge: (src: number, dest: number) => void;
    hasEdge: (src: number, dest: number) => boolean;
    toString: () => string;
}

export interface GraphNode<T> {
    data: T;
}
