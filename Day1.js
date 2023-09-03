let elfs = [];
let collector = 0;
for (let i = 0; i < numbs.length; i++) {
    const num = parseInt(numbs[i])
    if (isNaN(num)) {
        elfs.push(collector);
        collector = 0;
    } else {
        collector += num;
    }
}
let maxElf = 0;
for (let i = 0; i < elfs.length; i++) {
    if (elfs[i] > maxElf) {
        maxElf = elfs[i]
    }
}
console.log(maxElf)