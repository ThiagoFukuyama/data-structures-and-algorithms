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

import { Boilerplate, createBoilerplate } from "./Boilerplate";

import {
    type BoilerplateCategory,
    boilerplateCategories,
} from "./Boilerplate/config";

import { validateFileName } from "./validateFileName";

const srcDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "src"
);

async function main() {
    intro("<<< Generate boilerplate for new module >>>");

    const selectedCategory: BoilerplateCategory | symbol = await select({
        message: "What do you want to create?",
        options: boilerplateCategories.map((opt) => ({
            value: opt,
            label: opt,
        })),
    });

    if (isCancel(selectedCategory)) {
        cancel("Operation cancelled.");
        process.exit(0);
    }

    const name = await text({
        message: `What's the file name of the new ${selectedCategory}?`,
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

    const fileName = name.trim().replace(/\s/g, "");
    const boilerplate = createBoilerplate(selectedCategory, fileName);

    try {
        const folderPath = await generateFiles(boilerplate);
        outro(
            `<<< Generated ${boilerplate.fileName} successfully! >>> \n   In "${folderPath}"`
        );
    } catch (error) {
        cancel(`Sorry! It looks like ${boilerplate.fileName} already exists.`);
    }
}

async function generateFiles(boilerplate: Boilerplate) {
    const { fileName, parentFolderName } = boilerplate;

    const parentIndexPath = path.resolve(srcDir, parentFolderName, "index.ts");

    const folder = path.resolve(srcDir, parentFolderName, fileName);

    await fs.mkdir(folder);

    const filePath = path.resolve(folder, `${fileName}.ts`);
    const testFilePath = path.resolve(folder, `${fileName}.test.ts`);

    await Promise.all([
        fs.writeFile(filePath, boilerplate.getCode()),
        fs.writeFile(testFilePath, boilerplate.getTest()),
        fs.appendFile(parentIndexPath, boilerplate.getExport()),
    ]);

    return folder;
}

main();
