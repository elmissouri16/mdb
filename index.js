const request = require('request-promise-native');
const BaseUrl = 'https://api.themoviedb.org/3';

class Mdb {
	constructor({ ApiKey }, { requestOptions } = {}) {
		if (!ApiKey || ApiKey === '') {
			throw new Error('ApiKey is required!');
		}
		this.ApiKey = ApiKey;
		if (requestOptions === undefined) {
			requestOptions = {};
		}
		requestOptions.baseUrl = BaseUrl;
		requestOptions.uri = '';
		requestOptions.method = 'GET';
		requestOptions.headers = {
			Referer: BaseUrl,
		};
		requestOptions.json = true;
		this.request = request.defaults(requestOptions);
	}
	//! Basic search functions to gather info
	async searchMovie({ query, include_adult, page }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this.request('/search/movie/', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: 'en-US',
				api_key: this.ApiKey,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async searchTvShow({ query, page, first_air_date_year }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this.request('/search/tv/', {
			qs: {
				page: page,
				first_air_date_year: first_air_date_year,
				query: query,
				language: 'en-US',
				api_key: this.ApiKey,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async searchActor({ query, page }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this.request('/search/person/', {
			qs: {
				page: page,
				query: query,
				language: 'en-US',
				api_key: this.ApiKey,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async searchKeyword({ query, include_adult, page }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this.request('/search/keyword', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: 'en-US',
				api_key: this.ApiKey,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	//! functions to get details about movies and shows
	async getMovieDetails({ movie_id }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}`, { qs: { api_key: this.ApiKey }, body: '{}' })
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getMovieVideos({ movie_id }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}/videos`, { qs: { api_key: this.ApiKey }, body: '{}' })
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getSimilarMovies({ movie_id, page }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}/similar`, { qs: { api_key: this.ApiKey, page: page }, body: '{}' })
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getMoviesGenreList() {
		return this.request('/genre/movie/list', {
			qs: {
				api_key: this.ApiKey,
			},
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.log({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
}
module.exports = Mdb;
