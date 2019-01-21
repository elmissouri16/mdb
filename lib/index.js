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
}

class Movies extends Mdb {
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
				console.error({
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
				console.error({
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
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	//! functions to get details about movies
	async getMovieDetails({ movie_id }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}`, { qs: { api_key: this.ApiKey }, body: '{}' })
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
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
				console.error({
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
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getRecommendedMovies({ movie_id, page }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}/recommendations`, {
			qs: {
				api_key: this.ApiKey,
				page: page,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getMovieReviews({ movie_id, page }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this.request(`/movie/${movie_id}/reviews`, {
			qs: {
				api_key: this.ApiKey,
				page: page,
			},
			body: '{}',
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
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
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getTopeRatedMovies() {
		return this.request('/movie/top_rated', {
			qs: {
				api_key: this.ApiKey,
			},
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getUmpcomingMovies({ page, region }) {
		return this.request('/movie/upcoming', {
			qs: {
				page: page,
				region: region,
				api_key: this.ApiKey,
			},
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
	async getPopularMovies({ page, region }) {
		return this.request('/movie/popular', {
			qs: {
				page: page,
				region: region,
				api_key: this.ApiKey,
			},
		})
			.then(data => {
				return data;
			})
			.catch(err => {
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
}
class TvShows extends Mdb {
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
				console.error({
					Name: err.name,
					Message: err.message,
					Cause: err.cause,
				});
			});
	}
}
Mdb.Movies = Movies;
Mdb.TvShows = TvShows;
module.exports = Mdb;
