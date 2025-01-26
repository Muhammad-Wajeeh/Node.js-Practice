import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
];

//ACTUAL MIDDLE WARE
//======================================================================
// Middleware that logs our req url and method prior to anything
const loggerMiddleware = (req, res, next) => {
  console.log(req.url, req.method);
  next();
};

// Middle ware that sets the header to json, since in this API all of our res will be json
const jsonMiddleware = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

//======================================================================

//NOT REALLY MIDDLEWARE, JUST HANDLER FUNCTIONS
//======================================================================

const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

const getUserbyIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user not found" }));
    res.end();
  }
};

const notFoundHandler = (req, res) => {
  res.statusCode = "404";
  res.write(JSON.stringify({ message: "route not found" }));
  res.end();
};

const createUserHandler = (req, res) => {
  let body = "";

  // Listen for data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};
//======================================================================

const server = createServer((req, res) => {
  loggerMiddleware(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserbyIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res); //creating new user using info about user sent by client
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
