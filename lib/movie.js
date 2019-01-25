const Mdb = require('./main');
class Movies extends Mdb {
	async searchMovie({ query, include_adult, page, language }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this._request('/search/movie/', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: language,
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

	async searchActor({ query, page, language }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this._request('/search/person/', {
			qs: {
				page: page,
				query: query,
				language: language,
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
	async searchKeyword({ query, include_adult, page, language }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this._request('/search/keyword', {
			qs: {
				include_adult: include_adult,
				page: page,
				query: query,
				language: language,
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
	//! functions to get details about movies
	async getMovieDetails({ movie_id, language }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this._request(`/movie/${movie_id}`, { qs: { api_key: this._ApiKey, language: language } })
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
	async getMovieVideos({ movie_id, language }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this._request(`/movie/${movie_id}/videos`, { qs: { api_key: this._ApiKey, language: language } })
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
	async getSimilarMovies({ movie_id, page, language }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this._request(`/movie/${movie_id}/similar`, { qs: { api_key: this._ApiKey, page: page, language: language } })
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
	async getMovieReviews({ movie_id, page, language }) {
		if (!movie_id || movie_id === '') {
			throw new Error('movie_id is required!');
		}
		return this._request(`/movie/${movie_id}/reviews`, {
			qs: {
				api_key: this._ApiKey,
				page: page,
				language: language,
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

	async getMoviesGenreList({ language }) {
		return this._request('/genre/movie/list', {
			qs: {
				api_key: this._ApiKey,
				language: language,
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
	async getTopeRatedMovies({ language }) {
		return this._request('/movie/top_rated', {
			qs: {
				api_key: this._ApiKey,
				language: language,
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
	async getUmpcomingMovies({ page, region, language }) {
		return this._request('/movie/upcoming', {
			qs: {
				page: page,
				region: region,
				language: language,
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
	async getPopularMovies({ page, region, language }) {
		return this._request('/movie/popular', {
			qs: {
				page: page,
				region: region,
				language: language,
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
	// time_windows  => week/day
	async getTrendingMovies({ time_window }) {
		if (!time_windows || time_windows === '') {
			throw new Error('time_windows is required!');
		}
		return this._request(`/trending/movie/${time_window}`, {
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
}
module.exports = Movies;
