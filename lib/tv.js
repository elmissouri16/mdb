const Mdb = require('./main');
class TvShows extends Mdb {
	async searchTvShow({ query, page, first_air_date_year }) {
		if (!query || query === '') {
			throw new Error('query is required!');
		}
		return this._request('/search/tv/', {
			qs: {
				page: page,
				first_air_date_year: first_air_date_year,
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
	async getTvShowDetails({ tv_id }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		return this._request(`/tv/${tv_id}`, {
			qs: {
				tv_id: tv_id,
				api_key: this._ApiKey,
				language: 'en-US',
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
	async getTvShowRecomndations({ tv_id, page }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		return this._request(`/tv/${tv_id}/recommendations`, {
			qs: {
				tv_id: tv_id,
				page: page,
				api_key: this._ApiKey,
				language: 'en-US',
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
	async geSimilartTvShows({ tv_id, page }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		return this._request(`/tv/${tv_id}/similar  `, {
			qs: {
				tv_id: tv_id,
				page: page,
				api_key: this._ApiKey,
				language: 'en-US',
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
	async geTvShowVideos({ tv_id }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		return this._request(`/tv/${tv_id}/videos`, {
			qs: {
				tv_id: tv_id,
				api_key: this._ApiKey,
				language: 'en-US',
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
	async getEpisodeGroups({ tv_id }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		return this._request(`/tv/${tv_id}/episode_groups`, {
			qs: {
				tv_id: tv_id,
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
	async getTvshowSeason({ tv_id, season_number }) {
		if (!tv_id || tv_id === '') {
			throw new Error('tv_id is required!');
		}
		if (!season_number || season_number === '') {
			throw new Error('season_number is required!');
		}
		return this._request(`/tv/${tv_id}/season/${season_number}`, {
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
	async getTopeRatedTVSHows({ page, language }) {
		return this._request(`/tv/top_rated`, {
			qs: {
				page: page,
				language: language,
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
	async getPopularTVSHows({ page, language }) {
		return this._request(`/tv/popular`, {
			qs: {
				page: page,
				language: language,
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
	// time_windows  => week/day
	async getTrendingTvShows({ time_window }) {
		if (!time_window || time_window === '') {
			throw new Error('time_window is required!');
		}
		return this._request(`/trending/tv/${time_window}`, {
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
module.exports = TvShows;
