function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventID = Math.random().toString(36).substring(2,10).toUpperCase();
    const logMessage = message.toUpperCase();
    return `[${timestamp}] - [${eventID}] - ' ${logMessage} '`
}

const log = createLogEntry("user logged in successfully");
console.log(log);