// Import the 'url' module
import url from 'url';

// Define a URL string
const urlString = 'https://www.google.com/search?q=hello+world';

//URL Object
// Create a URL object from the string, obviously using a constructor
const urlObj = new URL(urlString);
console.log(urlObj); 

//format()
// Format the URL object into a string, basically takes an object and turns it back into a string path
console.log(url.format(urlObj)); 

//import.meta.url - file URL <----- file url is different from file path, url will look something like this: file://+filePath, while file path will just look like ./dir1/dir2/<filename>
// Log the file URL of the current module
console.log(import.meta.url);

//fileURLToPath() - converts file URL to file Path
console.log(url.fileURLToPath(import.meta.url));


//getting URL Search Params, formal def for Search Params is this: "The searchParams read-only property of the URL interface returns a URLSearchParams object allowing access to the GET decoded query arguments contained in the URL."

// so in our example this would be 'https://www.google.com/search?q=hello+world' , in this case the search param is just q.

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q')); // getting a specific search param
params.append('limit', '5'); // appening to the search params
console.log(params);
params.delete('limit'); // deleting a search param
console.log(params);

