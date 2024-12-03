const isSafe = (report) => {
    if (report[0] < report[1]) report.reverse()
        
    for (let i = 0; i < report.length - 1; i++) {
        if (report[i] - report[i+1] < 1 || report[i] - report[i+1] > 3) {
            return false;
        }   
    }
    return true;
};

const partOne = (reports) => {
    let safeCount = 0;
    for (const report of reports) {
        safeCount = isSafe(report) ? safeCount+1 : safeCount;
    } 

    console.log(
        `Part 1: ${safeCount}`
    );
};

const dampen = (report) => {
    for (let i = 0 ; i < report.length; i++) {
        const subreport = [...report];
        subreport.splice(i,1);
        if (isSafe(subreport)) return true;
    }
    return false;
};

const partTwo = (reports) => {
    let safeCount = 0;
    for (const report of reports) {
        if (isSafe(report) || dampen(report)) safeCount++;
    }   

    console.log(
        `Part 2: ${safeCount}`
    );
};

const main = () => {
    const input = document.body.innerText;
    const reports = input.trim().split('\n').map(line => line.split(/\s+/).map((num) => parseInt(num)));

    partOne(reports);
    partTwo(reports);
};

main();
