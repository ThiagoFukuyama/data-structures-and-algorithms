import { AlgorithmBoilerplate, DataStructureBoilerplate } from "./boilerplates";

export const boilerplateClasses = {
    Algorithm: AlgorithmBoilerplate,
    "Data Structure": DataStructureBoilerplate,
} as const;

export type BoilerplateCategory = keyof typeof boilerplateClasses;

export const boilerplateOptions = Object.keys(
    boilerplateClasses
) as BoilerplateCategory[];
