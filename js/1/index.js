const partOne = () => {
	const input = document.body.innerText;

	const lines = input.trim().split('\n').map(line => line.split(/\s+/));

	const listA = [];
	const listB = [];
	const listDiffs = [];

	lines.forEach( line => {
		listA.push(line[0]);
		listB.push(line[1]);
	});

	listA.sort();
	listB.sort();

	for (let i = 0; i < listA.length; i++) {
		listDiffs.push(Math.abs(listA[i] - listB[i]));
	}

	console.log(
		listDiffs.reduce((sum, curr) => sum + curr)
	);
};
partOne();
const partTwo = () => {
    const input = document.body.innerText;

    const lines = input.trim().split('\n').map(line => line.split(/\s+/));

    const listA = [];
    const listB = [];
    const tracker = {};

    lines.forEach( line => {
        listA.push(line[0]);
        listB.push(line[1]);
    });

    for (item of listA) {
        tracker[item] = tracker[item] ?? {countA: 0, countB: 0};
        tracker[item].countA++;
    }

    for (item of listB) {
        if (tracker[item]) {
            tracker[item].countB++;
        }
    }

    console.log(
        Object.keys(tracker).reduce( (sum, key) => sum + (parseInt(key) * tracker[key].countA * tracker[key].countB), 0)
    );
};
partTwo();
