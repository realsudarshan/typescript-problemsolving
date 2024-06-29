//Write an async function called waitAndPrint that takes a number of milliseconds, waits for that amount of time using setTimeout, and then prints a message to the console.
async function waitAndPrint(milliseconds: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(`Waited for ${milliseconds} milliseconds and printed this message.`);
}

// Example usage
waitAndPrint(2000);