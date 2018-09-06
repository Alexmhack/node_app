# node_app
building our first node app using sitepoint 10 day email course

# What Is Node.Js?

Project Homepage says,

**Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses 
an event-driven, non-blocking I/O model that makes it lightweight and efficient.**

**Node Is Built On Google Chrome’s V8 JavaScript Engine**

The V8 engine is the open-source JavaScript engine that runs in the Chrome, Opera and 
Vivaldi browsers. It was designed with performance in mind and is responsible for 
compiling JavaScript directly to native machine code that your computer can execute.

However, when we say that Node is built on the V8 engine, we don’t mean that Node 
programs are executed in a browser. They aren’t. Rather, the creator of Node (Ryan Dahl) 
took the V8 engine and enhanced it with various features, such as a file system API, an 
HTTP library, and a number of operating system–related utility methods.

This means that Node.js is a program we can use to execute JavaScript on our computers. 
In other words, it’s a JavaScript runtime.

# Installing Node
Visit the Node [Official](https://nodejs.org/en/) Website and follow the instructions 
there to install Node.js

Once installed you can check it by opening a terminal and entering

```
node -v

v8.10.0
```

Next create a new file named ```hello.js``` and enter the following code in it

**hello.js**
```
console.log("Hello NodeJs");
```

You might be very well aware about this piece of javascript, if not then learn 
**javascript** before starting with **Node**

To run the file and code inside it, enter the following command

```
node hello.js
```

If Node.js is configured properly, “Hello, World!” will be displayed.

# What Node.Js Is Used For ?
Now that we have know and installed node and npm we should look at what these two are 
used for.

**They’re used to install (npm) and run (Node) various build tools — tools designed to 
automate the process of developing a modern JavaScript application.**

For more information on these tools visit

1. [A Beginner’s Guide to Webpack and Module Bundling](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-ttd/)
2. [How to Bundle a Simple Static Site Using Webpack](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-tth/)
3. [Up and Running with ESLint — the Pluggable JavaScript Linter](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-ttk/)
4. [An Introduction to Gulp.js](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-ttu/)
5. [Unit Test Your JavaScript Using Mocha and Chai](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-til/)

If you’re interested in finding out what role Node plays in a modern JavaScript app, read [The Anatomy of a Modern JavaScript Application](http://go.sitepoint.com/t/y-l-chysr-tdcllkudj-tiy/)

# Node.Js Execution Process
Before understanding how Node.Js works as a backend for websites we need to understand 
how backend works which means how server works. 

In simplistic terms, when you connect to a server say Apache. It will spawn a new thread 
to handle the request. In a language such as PHP or Ruby, any subsequent I/O operations
(interation with database in any form) block the execution of your code until the 
operation has completed. That is, the server has to wait for the database lookup to 
complete before it can move on to processing the result. If new results come in while
processing this request the server will spawn new thread to deal with them. This is 
potentially inefficient, as a large number of threads can cause a system to become 
sluggish -- and hence sometimes causes the site to go down. Supporting this case is by
only adding more servers.

Node.Js is however single threaded. It is also event-driven, which means that everything
that happens in Node.Js is in reaction to an event. For example, when a new request 
comes in (one kind of event) the server will start processing it. If it then encounters
a blocking I/O operation, instead of waiting for this to complete, it will register a 
callback before continuing to process the next event. When I/O operation has finished 
the server will execute the callback and continue working on the original request. 

# Starting First Node Server
Create a new file named ```hello_server.js``` and type the following code in it.

```
const http = require('http');

http.createServer((request, response) => {
	response.writeHead(200);
	response.end('Hello World');
}).listen(3000);

console.log("SERVER RUNNING ON http://127.0.0.1:3000");
```

Open [this](http://127.0.0.1:3000) url in browser and you will get ```Hello World``` 
displayed on the screen.
