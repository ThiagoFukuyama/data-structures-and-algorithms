export function fibonacci(
    index: number,
    _cache: Record<number, number> = {}
): number {
    if (index <= 2) return 1;

    if (_cache[index] !== undefined) {
        return _cache[index];
    }

    const result = fibonacci(index - 1, _cache) + fibonacci(index - 2, _cache);

    _cache[index] = result;

    return result;
}
