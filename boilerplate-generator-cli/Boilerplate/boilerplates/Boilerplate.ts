export abstract class Boilerplate {
    public fileName: string;
    public parentFolderName: string;

    constructor(fileName: string, parentFolderName: string) {
        this.fileName = fileName;
        this.parentFolderName = parentFolderName;
    }

    public abstract getCode(): string;
    public abstract getTest(): string;

    public getExport(): string {
        return `export { ${this.fileName} } from "./${this.fileName}/${this.fileName}";\n`;
    }
}
