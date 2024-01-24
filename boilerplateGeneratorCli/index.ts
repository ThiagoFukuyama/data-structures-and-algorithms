import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import {
    intro,
    outro,
    select,
    text,
    isCancel,
    cancel,
    confirm,
} from "@clack/prompts";

import {
    Boilerplate,
    AlgorithmBoilerplate,
    DataStructureBoilerplate,
} from "./Boilerplate";

import { validateFileName } from "./validateFileName";

const srcDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "src"
);

const boilerplateOptions: Boilerplate[] = [
    new AlgorithmBoilerplate("Algorithm", "algorithms"),
    new DataStructureBoilerplate("Data Structure", "dataStructures"),
];

async function main() {
    intro("<<< Generate boilerplate for new module >>>");

    const selectedType: number | symbol = await select({
        message: "What do you want to create?",
        options: boilerplateOptions.map((opt, i) => ({
            value: i,
            label: opt.label,
        })),
    });

    if (isCancel(selectedType)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }

    const boilerplate = boilerplateOptions[selectedType];

    const name = await text({
        message: `What's the file name of the new ${boilerplate.label}?`,
        validate: (value) => {
            if (!validateFileName(value))
                return "Please, insert a valid module name.";
        },
    });

    if (isCancel(name)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }

    const shouldContinue = await confirm({
        message: `Are you sure you want to generate the files for "${name}"?`,
    });

    if (!shouldContinue || isCancel(shouldContinue)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }

    boilerplate.fileName = name.trim().replace(/\s/g, "");
    const { fileName, parentFolderName, label } = boilerplate;

    const parentIndexPath = path.resolve(srcDir, parentFolderName, "index.ts");
    const folder = path.resolve(srcDir, parentFolderName, fileName);

    const filePath = path.resolve(folder, `${fileName}.ts`);
    const testFilePath = path.resolve(folder, `${fileName}.test.ts`);

    try {
        await fs.mkdir(folder);
        await fs.writeFile(filePath, boilerplate.getCode());
        await fs.writeFile(testFilePath, boilerplate.getTest());
        await fs.appendFile(parentIndexPath, boilerplate.getExport());
    } catch (e) {
        cancel(`Sorry! It looks like ${fileName} already exists.`);
        process.exit(1);
    }

    outro(
        `<<< Generated ${fileName} ${label} successfully! >>> \n   In "${folder}"`
    );
}

main();
