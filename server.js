import http from "http";
import fs from "fs/promises";
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw Error("not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();
    } else {
      throw Error("Req method not allowed");
    }
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
