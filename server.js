'use strict';

const Hapi   = require('hapi');
const Wreck  = require('wreck');
const Parser = require('xml2json');
const server = new Hapi.Server();

server.connection({
  port: (process.env.PORT || 4134),
  host: '0.0.0.0',
  routes: { cors: true }
});

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		if(request.query.rss != 'undefined') {
			var xmlEndpoint = request.query.rss;
			Wreck.get(xmlEndpoint, (err, res, payload) => {
				if (err) return reply(`Error: ${err}`);
				return reply(Parser.toJson(payload, { object: true, sanitize: false }));
			});
		} else {
			return reply(Parser.toJson({status: 'error'}));
		}
	}
});

server.start((err) => {
  if (err) throw err;
  console.log(`~~~> Server running at: ${server.info.uri}`);
});
