const partOne = (input) => {
    const muls = [...input.matchAll(/mul\(\d+,\d+\)/g)].map(match => match[0]);
    let total = 0;
    for (const mul of muls) {
        const args = mul.match(/(\d+),(\d+)/);
        total += parseInt(args[1]) * parseInt(args[2]);
    }
    console.log(`Part 1: ${total}`);
};

const partTwo = (input) => {
    const instructions = [...input.matchAll(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/g)].map(match => match[0]);
	
	let enabled = true;
	let total = 0;
	for (const instruction of instructions) {
		if (instruction === 'do()') {
			enabled = true;
		} else if (instruction === "don't()") {
			enabled = false;
		} else if (enabled) {
			const args = instruction.match(/(\d+),(\d+)/);
			total += parseInt(args[1]) * parseInt(args[2]);
		}
	}
	console.log(`Part 2: ${total}`);
};

const main = () => {
    const input = document.body.innerText;

    partOne(input);
    partTwo(input);
};

main();
