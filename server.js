'use strict';

// requiring modules
const Hapi = require('hapi');
const Hoek = require('hoek');

// creating settings
const Settings = require('./settings');
const server = new Hapi.Server();

server.connection({ port: Settings.port });

server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => { reply('Hello World'); }
});

server.start((err) => {
	Hoek.assert(!err, err);
	console.log(`Server running at: ${server.info.url}`);
});
