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

Let's walkthrough the javascript code.

We start by requiring Node's [HTTP module](https://nodejs.org/api/http.html). We then 
use its ```createServer``` method to create a new web server object, to which we pass 
an anonymous function. This function will be invoked whenever a new connection is made 
to server.

The anonymous function is called with two arguments ```(request, response)``` which 
contain the request from the user and the response, which we use to send back a 200 
HTTP status code, along with our "Hello World" message.

Finally we tell the server to listen for incoming connection requests on port 3000,
and output a message to the terminal to let us know that server is running.

For a detailed documentation on HTTP module head to Node http [docs](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)

# Laying Foundation For App
In this section we will be laying out basic foundation for our **Note Taking App** 
using the MVC architectue. We will be employing [Hapi.js](https://hapijs.com/) framework for Node.js and [sqlite](https://www.sqlite.org/index.html)
as a database using [Sequelize.js](http://docs.sequelizejs.com/) plus other utilities to speed up our development.

# What is MVC ?
**Model-View-Controller** is one of the most popular architecture for applications.
This architecture was a solution to the problem of organizing applications with 
graphical user interfaces. 

1. **Model:** The part of application that deals with the database or any data-related 
functionality. For example - [Django Models](https://docs.djangoproject.com/en/2.1/topics/db/models/)

2. **View:** Everything related to client-side or the pages we send to the client.

3. **Controller:** The logic of our site, and the glue between models and views. Models
get the data and then put data on views to be sent to users.

Our application will have features like publishing, editing, seeing, deleting 
plain-text nodes. 

# Laying Out Foundation
The first step when building any Node.js application is to create a **package.json** file, which is going to contain all of our dependencies and scripts. This can be done 
by running

**cmd**
```
npm init -y
wrote to package.json

{
  "name": "node_app",
  "version": "1.0.0",
  "description": "building our first node app using sitepoint 10 day email course",
  "main": "hello.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Alexmhack/node_app.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Alexmhack/node_app/issues"
  },
  "homepage": "https://github.com/Alexmhack/node_app#readme"
}

```

Open ```package.json``` file and you will find the same result written to it.

**Install hapi and hoek**

```
npm install --save hapi hoek
```

Above command will download the latest version of Hapi.js and add it to our 
package.json file as a dependency. It will also install hoek utility library that will 
help us write shorter error handlers.

You can look at the dependencies in package.json file

**package.json**
```
...
  "dependencies": {
    "hapi": "^17.5.4",
    "hoek": "^5.0.4"
  }
}
```

Create a file ```server.js``` in application directory which will the entry point for our server which will start everything.

**server.js**
```
'use strict';

// requiring modules
const Hapi = require('hapi');
const Hoek = require('hoek');
```

We require both the dependencies for our server so we import them.

```
// requiring settings
const Settings = require('./settings');
const server = new Hapi.Server();
```

Then we get our settings and create a new Hapi Server instance.

```
server.connection({ port: Settings.port });
```

We set the connection port for our server equal to the **port** defined in our settings.

```
server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => { reply('Hello World'); }
});
```

Our server replies ```'Hello World'``` for **GET** request to default ```/``` path

```
server.start((err) => {
	Hoek.assert(!err, err);
	console.log(`Server running at: ${server.info.url}`);
});
```

We start server and print a message saying the url for server and catch and assert any
error if found.

**NOTE:** In each route, we have to define the HTTP method and path (URL) that it will
respond to, and a handler which is a function that will process the HTTP request. The 
handler function can take two arguments: ```request``` and ```reply```. The first one
contains information about the HTTP call and second will provide us with methods to
handle our response to that call.

We use Hoek to improve our error handling, making it shorter.

# Creating Setting For Project
We will be using [dotenv]() for using **.env** file which will have values that needs
to be kept hidden during production
