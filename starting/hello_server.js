const http = require('http');

http.createServer((request, response) => {
	response.writeHead(200);
	response.end('Hello, World!');
}).listen(3000);

console.log("SERVER IS RUNNING ON http://127.0.0.1:3000");
