const partOne = (grid) => {
	const searchAt = (i, j) => {
		let count = 0;

		if (i > 2 && j > 2 && grid[i-1][j-1] === 'M' && grid[i-2][j-2] === 'A' && grid[i-3][j-3] === 'S') count++;                                // up-left
		if (i > 2 && grid[i-1][j] === 'M' && grid[i-2][j] === 'A' && grid[i-3][j] === 'S') count++;                                               // up
		if (i > 2 && grid[0].length - j > 2 && grid[i-1][j+1] === 'M' && grid[i-2][j+2] === 'A' && grid[i-3][j+3] === 'S') count++;               // up-right
		if (j > 2 && grid[i][j-1] === 'M' && grid[i][j-2] === 'A' && grid[i][j-3] === 'S') count++;                                               // left
		if (grid[0].length - j > 2 && grid[i][j+1] === 'M' && grid[i][j+2] === 'A' && grid[i][j+3] === 'S') count++;                              // right
		if (grid.length - i > 2 && j > 2 && grid[i+1][j-1] === 'M' && grid[i+2][j-2] === 'A' && grid[i+3][j-3] === 'S') count++;                  // down-left
    	if (grid.length - i > 2 && grid[i+1][j] === 'M' && grid[i+2][j] === 'A' && grid[i+3][j] === 'S') count++;                                 // down
		if (grid.length - i > 2 && grid[0].length - j > 2 && grid[i+1][j+1] === 'M' && grid[i+2][j+2] === 'A' && grid[i+3][j+3] === 'S') count++; // down-right

		return count;
	};

	let total = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 'X') total += searchAt(i,j);
		}
	}
	console.log(`Part 1: ${total}`);
};

const partTwo = (grid) => {
	const xAt = (i, j, key) => {
		if (!(grid[i+1][j+1] === 'A')) return false;
		if (key === 'M') {
			if (grid[i+2][j] === 'M' && grid[i][j+2] === 'S' && grid[i+2][j+2] === 'S') return true;
			if (grid[i][j+2] === 'M' && grid[i+2][j] === 'S' && grid[i+2][j+2] === 'S') return true;
		} else if (key === 'S') {
			if (grid[i+2][j] === 'S' && grid[i][j+2] === 'M' && grid[i+2][j+2] === 'M') return true;
			if (grid[i][j+2] === 'S' && grid[i+2][j] === 'M' && grid[i+2][j+2] === 'M') return true;
		}
		return false;
	};

	let total = 0;
	for (let i = 0; i < grid.length - 2; i++) {
		for (let j = 0; j < grid[0].length - 2; j++) {
			if (['M','S'].includes(grid[i][j]) && xAt(i,j, grid[i][j])) total++;
		}
	}
	console.log(`Part 2: ${total}`);
};

const main = () => {
	const input = document.body.innerText;
	const grid = input.split('\n').map(line => line.split(''));

	partOne(grid);
	partTwo(grid);
};

main();
