const sampleFromIDs = [7, 1, 3, 4, 6, 9, 2];
const sampleToIDs = [3, 3, 4, 6, 9, 5, 6];

const three = (start, fromIDs, toIDs) => {
    let startIndex = fromIDs.indexOf(start);

    if (startIndex === -1) {
        return start;
    } else {
        start = toIDs[startIndex];
        return three(start, fromIDs, toIDs);
    }
}

console.log(three(7, sampleFromIDs, sampleToIDs));
// Correctly returns 5