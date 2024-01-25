export abstract class Boilerplate {
    public label: string;
    public parentFolderName: string;
    public fileName: string | null = null;

    constructor(label: string, parentFolderName: string) {
        this.label = label;
        this.parentFolderName = parentFolderName;
    }

    public abstract getCode(): string;
    public abstract getTest(): string;

    public getExport(): string {
        return `export { ${this.fileName} } from "./${this.fileName}/${this.fileName}";\n`;
    }
}
