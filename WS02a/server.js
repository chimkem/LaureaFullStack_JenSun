const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// Server object
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/HTML; charset=utf-8");
    
    // Routes
    if (req.url === "/") {
      res.write("<h1> Hello, World! </h1>");
    } else if (req.url === "/about") {
      res.write("<h1> About Page </h1>");
    } else if (req.url === "/contact") {
        res.write("<h1> Contact Page </h1>");
    } else {
      res.write("<strong> 404 Page not found. </strong>");
    }
    
    //Response end
    res.end();
  });
  
  // Listen a port
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });