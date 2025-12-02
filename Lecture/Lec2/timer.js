const startime = Date.now();

function someHeavyTask() {
    for (let i = 0; i < 5e50;i++) {
        Math.sqrt(i);
    }
}
someHeavyTask()
const endTime = Date.now();

const duration = endTime - startime;
console.log(`Elapsed time: ${duration} ms`)