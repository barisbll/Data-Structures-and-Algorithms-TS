const boxes = [1,2,3,4,5];

const logAllPairs = (boxes: number[]) => {

    const pairs: [number, number][] = []

    while (boxes.length > 0) {
        const head = boxes.shift() as number
        for (const element of boxes) {
            pairs.push([head, element])
        }
    }

    return pairs
}

const allPairs = logAllPairs(boxes)
console.log(allPairs)