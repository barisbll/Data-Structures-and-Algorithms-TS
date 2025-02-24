export const isArrayContainCommonElement = (
    arr1: string[],
    arr2: string[],
): boolean => {
    let tempHead: string = "";
    while (arr1.length > 0) {
        tempHead = arr1.shift() as string;
        if (arr2.includes(tempHead)) return true;
    }

    return false;
};

// Time complexity O(a * b)

export const isArrayContainCommonElementWithHashmap = (
    arr1: string[],
    arr2: string[],
): boolean => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const combinedArr = [...Array.from(set1), ...Array.from(set2)];
    const hashMap: Record<string, number> = {};

    for (const element of combinedArr) {
        if (hashMap[element]) return true;

        hashMap[element] = 1;
    }

    return false;
};

// Time complexity O(a + b)
