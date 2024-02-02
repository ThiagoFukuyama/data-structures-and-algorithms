export class Hashtable<K extends EntryKey, V> {
    private table: Entry<K, V>[][];
    private length: number = 0;

    constructor(capacity: number = 10) {
        this.table = new Array(capacity < 1 ? 10 : capacity);
    }

    public set(key: K, value: V) {
        const index = this.hash(key);

        if (this.table[index] === undefined) {
            this.table[index] = [[key, value]];
            this.length++;
            return;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }

        const bucketSize = this.table[index].length;
        this.table[index][bucketSize] = [key, value];
        this.length++;
    }

    public get(key: K): V | undefined {
        const index = this.hash(key);

        if (this.table[index] === undefined) return;

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i]?.[0] === key) {
                return this.table[index][i][1];
            }
        }
    }

    public remove(key: K) {
        const index = this.hash(key);

        if (this.table[index] === undefined || this.table[index].length <= 0) {
            return;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i]?.[0] === key) {
                delete this.table[index][i];
                this.length--;
            }
        }
    }

    public get size() {
        return this.length;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public toString(): string {
        if (this.isEmpty()) return "[]";

        let string = "";

        this.table.forEach((bucket) => {
            string += bucket
                .map(([key, value]) => `  ${key} => ${value}\n`)
                .join("");
        });

        return "[\n" + string + "]";
    }

    public static from<K extends EntryKey, V>(...entries: Entry<K, V>[]) {
        const hashtable = new Hashtable<K, V>();
        entries.forEach(([key, value]) => hashtable.set(key, value));

        return hashtable;
    }

    private hash(key: K): number {
        if (typeof key === "number") return key;

        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }
}

type Entry<T extends EntryKey, V> = [key: T, value: V];

type EntryKey = string | number;
