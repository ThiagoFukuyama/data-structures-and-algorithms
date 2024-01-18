export function interpolationSearch(array: number[], value: number): number {
    let start = 0;
    let end = array.length - 1;

    while (value >= array[start] && value <= array[end] && start <= end) {
        /**
         *
         * Fórmula mágica da Interpolation Search :D
         */
        const probe =
            start +
            ((end - start) * (value - array[start])) /
                (array[end] - array[start]);

        if (array[probe] === value) {
            return probe;
        }

        if (value < array[probe]) {
            end = probe - 1;
        } else {
            start = probe + 1;
        }
    }

    return -1;
}
