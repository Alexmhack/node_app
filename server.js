'use strict';

// requiring modules
const Hapi = require('hapi');
const Hoek = require('hoek');

// requiring settings
const Settings = require('./settings');
const server = new Hapi.Server({
	port: Settings.port
});

server.route({
	method: 'GET',
	path: '/',
	handler: (request, reply) => { reply('Hello World'); }
});

server.start((err) => {
	Hoek.assert(!err, err);
	console.log(`Server running at: ${server.info.url}`);
});
