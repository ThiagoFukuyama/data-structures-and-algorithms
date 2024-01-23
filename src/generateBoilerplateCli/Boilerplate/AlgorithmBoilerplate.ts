import { Boilerplate } from "./Boilerplate";

export class AlgorithmBoilerplate extends Boilerplate {
    constructor(label: string, parentFolderName: string) {
        super(label, parentFolderName);
    }

    public getCode() {
        return `export function ${this.fileName}() {
    
}
        `;
    }

    public getTest() {
        return `import { ${this.fileName} } from "./${this.fileName}";
    
beforeEach(() => {
  
});
    
describe("${this.fileName}", () => {
    it("Should1", () => {

    }) 

    it("Should2", () => {

    }) 

    it("Should3", () => {

    }) 
});
        `;
    }
}
