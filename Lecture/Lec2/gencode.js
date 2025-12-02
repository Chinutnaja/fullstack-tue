function generateTempid() {
    const randompaart = Math.random().toString(36).substring(2,8);
    return randompaart.toUpperCase();
}

const orderId = generateTempid();
console.log(`Order ID: ${orderId}`);