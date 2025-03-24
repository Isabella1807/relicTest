'use strict'
exports.config = {
	app_name: ['relicTest'],
	license_key: 'eu01xx5728cf75c71fdbbeb7670990e3FFFFNRAL',
	distributed_tracing: {
		enabled: true
	},
	logging: {
		level: 'info'
	},
	allow_all_headers: true,
	attributes: {
		exclude: [
			'request.headers.cookie',
			'request.headers.authorization',
			'request.headers.proxyAuthorization',
			'request.headers.setCookie*',
			'request.headers.x*',
			'response.headers.cookie',
			'response.headers.authorization',
			'response.headers.proxyAuthorization',
			'response.headers.setCookie*',
			'response.headers.x*'
		]
	}
}
