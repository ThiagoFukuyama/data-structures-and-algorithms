export function validateFileName(name: string): boolean {
    const regex = /^[a-zA-Z_][a-zA-Z0-9_-]*$/;
    const valueToTest = name.trim().replace(/\s/g, "");

    return regex.test(valueToTest);
}
