export function deepCopy<T>(value: T): T {
    if (value === null || typeof value !== "object") return value;

    const newObject = (Array.isArray(value) ? [] : {}) as T;

    for (const key in value) {
        newObject[key] =
            typeof value[key] === "object" ? deepCopy(value[key]) : value[key];
    }

    return newObject;
}
