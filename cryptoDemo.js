//Import the 'crypto' module
import crypto from 'crypto';

// Create a SHA-256 hash, this is hashing algorithm ,there are some others

// const hash = crypto.createHash('sha256'); // Specify the hashing algorithm
// hash.update('password1234'); // Add data to the hash
// console.log(hash.digest('hex')); // Output the hashed value in hexadecimal format

// Generate 16 random bytes asynchronously

// crypto.randomBytes(16, (err, buf) => {
//     if (err) throw err; // Handle errors
//     console.log(buf.toString('hex')); // Convert and log the random bytes in hexadecimal format
// });



// Define the encryption algorithm
const algorithm = 'aes-256-cbc';

// Generate a random 32-byte key (AES-256 requires a 256-bit key)
const key = crypto.randomBytes(32);

// Generate a random 16-byte initialization vector (IV)
const iv = crypto.randomBytes(16);

// Create a cipher using the algorithm, key, and IV
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Encrypt the message
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex'); // Finalize encryption and append result
console.log(encrypted); // Log the encrypted message in hexadecimal format

// Create a decipher using the same algorithm, key, and IV
const decipher = crypto.createDecipheriv(algorithm, key, iv);

// Decrypt the message
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8'); // Finalize decryption and append result
console.log(decrypted); // Log the decrypted message in UTF-8 format
