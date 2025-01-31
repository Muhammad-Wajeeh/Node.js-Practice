// Process is a global object so you dont need to import a module for access

// Log the actual process object
console.log(process);


// Log command-line arguments
console.log(process.argv);    // Array of command-line arguments
console.log(process.argv[3]); // Access a specific argument (4th item in array)

// Log environment variables
console.log(process.env.LOGNAME); // Access the LOGNAME environment variable

// Log the process ID
console.log(process.pid); // Prints the process ID of the current Node.js instance

// Log the current working directory
console.log(process.cwd()); // Returns the directory from which the script was executed

// Log the process title
console.log(process.title); // Displays the process title

// Log memory usage of the process
console.log(process.memoryUsage()); // Returns an object with memory usage details

// Log process uptime (time since the process started)
console.log(process.uptime()); // Returns the uptime in seconds

// Listen for the 'exit' event
process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`); // Logs exit code before the process exits
});

// Exit the process with status code 0 (success)
process.exit(0);

// This line will never execute because process.exit() terminates execution
console.log('Hello from after exit');
