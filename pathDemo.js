import path from "path";
import url from 'url'; //this will be used when creating a filepath using ES6 

const filePath = "./dir1/dir2/test.txt"; // This is obviously not a real path but for our demonstration purposes it doesn't really matter

//basename() - This should give you the name of the actual file that the name is pointing to, in this case 'test.txt'
console.log(path.basename(filePath));

//dirname() - This will give you the directory name, which includes all parent directories , in this case './dir1/dir2
console.log(path.dirname(filePath));

// extname() - Just the name of the extension of the file youre lookign for, which in this case is '.txt'
console.log(path.extname(filePath));

//parse() - This will parse the path and give you an Object including all the information we mentioned above but as key value pairs
console.log(path.parse(filePath))


// The 2 methods below are how you get the path for the current file or the current directory via COMMON.JS, however, probably not how youre gonna do it since you're likely using ES6 modules. 
// __filename;
// __dirname;


// This how we create paths using ES6; I know, a lot more tedious, but ES6 gives us so much nicer stuff thatn COMMON.JS that reduces tediousness in other aspects that this is very much worth the trade-off. 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname)

// join() - This is how basically assemble your own path , which may seem useless at first since you can just get your path with the various other methods, but it's usefull in a 2 ways I can think of. 1) It allows you to create cross compatible code between Mac/linux and windows users since they use different slashes, one using \ and one using /. 2) It allows you to create a path dynamically (i think), which may be useful when creating a program that wants to serve a specific file based on user input. 
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);