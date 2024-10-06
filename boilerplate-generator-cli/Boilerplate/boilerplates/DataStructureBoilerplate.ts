import { Boilerplate } from "./Boilerplate";

export class DataStructureBoilerplate extends Boilerplate {
    constructor(fileName: string) {
        super(fileName, "dataStructures");
    }

    public getCode(): string {
        return `export class ${this.fileName}<T> {
    constructor() {
        
    }
}
        `;
    }

    public getTest() {
        return `import { ${this.fileName} } from "./${this.fileName}";
    
beforeEach(() => {

});
    
describe("${this.fileName}", () => {
    describe("#method1", () => {
        it("Should1", () => {

        })
    }) 

    describe("#method2", () => {
        it("Should2", () => {

        })
    }) 

    describe("#method3", () => {
        it("Should3", () => {

        })
    }) 
});
    `;
    }
}
