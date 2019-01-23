const request = require('request-promise-native');
const BaseUrl = 'https://api.themoviedb.org/3';
class Rq {
	constructor({ ApiKey }, { requestOptions } = {}) {
		if (!ApiKey || ApiKey === '') {
			throw new Error('ApiKey is required!');
		}
		if (requestOptions === undefined) {
			requestOptions = {};
		}
		this._ApiKey = ApiKey;

		requestOptions.baseUrl = BaseUrl;
		requestOptions.uri = '';
		requestOptions.method = 'GET';
		requestOptions.headers = {
			Referer: BaseUrl,
		};
		requestOptions.json = true;
		this._request = request.defaults(requestOptions);
	}
}
module.exports = Rq;
