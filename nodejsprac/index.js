const fs = require("fs");
const http = require("http");

const server = http.createServer((req, resp) => {
    if(req.url==='/                       ')
    // if (req.url === '/') {
    //     resp.writeHead(200, { "content-type": "text/html" });
    //     resp.write("<h1>hellooo............!</h1>")
    //     resp.end();
    // }
    // else if (req.url === '/till') {
    //     resp.writeHead(200, { "content-type": "text/html" });
    //     resp.write("<h1>T</h1>")
    //     resp.end();
    // }
})
server.listen(4000, () => {
    console.log("local host 4000 is running...........!")
});












// const data = fs.readFileSync("./trup.txt");
// console.log(data.toString());

// fs.writeFileSync("./trup.txt", "this is the rewritten textt......");

// const data1 = fs.readFileSync("./trup.txt");
// console.log(data1.toString());

// fs.appendFileSync("./trup.txt", "this is the appended text....!");
// const data2 = fs.readFileSync("./trup.txt");
// console.log(data2.toString());





