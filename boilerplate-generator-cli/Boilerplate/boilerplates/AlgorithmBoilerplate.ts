import { Boilerplate } from "./Boilerplate";

export class AlgorithmBoilerplate extends Boilerplate {
    constructor(fileName: string) {
        super(fileName, "algorithms");
    }

    public getCode() {
        return `export function ${this.fileName}<T>() {
    
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
