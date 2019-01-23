const Mdb = require('./main');
class Movies extends Mdb {
	async searchMovie({ query, include_adult, page }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this._request('/search/movie/', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: 'en-US',
				api_key: this._ApiKey,
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
		return this._request('/search/person/', {
			qs: {
				page: page,
				query: query,
				language: 'en-US',
				api_key: this._ApiKey,
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
		return this._request('/search/keyword', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: 'en-US',
				api_key: this._ApiKey,
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
		return this._request(`/movie/${movie_id}`, { qs: { api_key: this._ApiKey }, body: '{}' })
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
		return this._request(`/movie/${movie_id}/videos`, { qs: { api_key: this._ApiKey }, body: '{}' })
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
		return this._request(`/movie/${movie_id}/similar`, { qs: { api_key: this._ApiKey, page: page }, body: '{}' })
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
		return this._request(`/movie/${movie_id}/recommendations`, {
			qs: {
				api_key: this._ApiKey,
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
		return this._request(`/movie/${movie_id}/reviews`, {
			qs: {
				api_key: this._ApiKey,
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
		return this._request('/genre/movie/list', {
			qs: {
				api_key: this._ApiKey,
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
		return this._request('/movie/top_rated', {
			qs: {
				api_key: this._ApiKey,
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
		return this._request('/movie/upcoming', {
			qs: {
				page: page,
				region: region,
				api_key: this._ApiKey,
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
		return this._request('/movie/popular', {
			qs: {
				page: page,
				region: region,
				api_key: this._ApiKey,
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
module.exports = Movies;
