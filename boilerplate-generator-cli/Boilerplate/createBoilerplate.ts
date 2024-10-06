import { Boilerplate } from "./boilerplates";
import {
    type BoilerplateCategory,
    boilerplateClasses,
} from "./boilerplateConfig";

export function createBoilerplate(
    category: BoilerplateCategory,
    fileName: string
): Boilerplate {
    const BoilerplateClass = boilerplateClasses[category];

    if (BoilerplateClass != null) return new BoilerplateClass(fileName);

    throw new Error(`Invalid argument for type: ${category}`);
}
