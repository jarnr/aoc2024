const partOne = () => {
    const input = document.body.innerText;
    const reports = input.trim().split('\n').map(line => line.split(/\s+/).map((num) => parseInt(num)));

    const isSafe = (report) => {
        if (report[0] < report[1]) report.reverse()
            
        for (let i = 0; i < report.length - 1; i++) {
            if (report[i] - report[i+1] < 1 || report[i] - report[i+1] > 3) {
                return false;
            }   
        }
        return true;
    };

    let safeCount = 0;
    for (const report of reports) {
        safeCount = isSafe(report) ? safeCount+1 : safeCount;
    } 

    console.log(
        `Part 1: ${safeCount}`
    );
};
partOne();

// Am I already throwing in the towel?
const partTwo = () => {
    const input = document.body.innerText;
    const reports = input.trim().split('\n').map(line => line.split(/\s+/).map((num) => parseInt(num)));

    const isSafe = (report) => {
		const diffs = [];
		for (let i = 0; i < report.length - 1; i++) {
			diffs.push(report[i+1] - report[i]);
		}

		const check = (diffs) => {
			if (!(0 in diffs)) {
				const ascending = diffs[0] > 0 ? true : false;
				for (const diff in diffs) {
					if ((ascending && diff < 0) ||
					   (!ascending && diff > 0)) {
						return false;
					}
				}
				return true;
			}
			return false;
		};

		if (check(diffs)) return true;

		// first check didn't work so we check subreports
		for (let i = 1; i < report.length - 1; i++) {
			const merged_diff = report[i+1] - report[i-1];
			const original_diff = diffs[i];

			diffs.splice(i,1);
			diffs.splice(i, 1, merged_diff);
			if (check(diffs)) return true;
			diffs.splice(i, 1, original_diff);
		}
		return false;
    };  

    let safeCount = 0;
    for (const report of reports) {
		const thisIsSafe = isSafe(report);
		console.log(`${report}: ${thisIsSafe ? "Safe" : "Unsafe"}`);
        safeCount = isSafe(report) ? safeCount+1 : safeCount;
    }   

    console.log(
        `Part 2: ${safeCount}`
    );
};
partTwo();
