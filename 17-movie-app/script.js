'use strict';
// 50 PROJECTS IN 50 DAYS

const form = document.querySelector(`#form`);
const search = document.querySelector(`#search`);
const main = document.querySelector(`#main`);

const API_URL =
	'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const SEARCH_URL =
	'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyY2EwOTNiYjBmNTE4MThlMmY3Y2Y5M2Y5OWVmMjMzNyIsInN1YiI6IjY0ODBjNzkwZTI3MjYwMDBjOTJlYmIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nHGRDUrIJyROJ9gfcBVCMps9-TB61IVzvLsS8M3-AwE',
	},
};
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

function getMovies(url) {
	fetch(url, options)
		.then(response => response.json())
		.then(response => showMovies(response))
		.catch(err => console.error(err));
}

function showMovies(movies) {
	main.innerHTML = '';

	movies.results.forEach(movie => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
    <img
      src="${IMG_PATH + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;
		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}

form.addEventListener('submit', e => {
	e.preventDefault();

	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_URL + searchTerm);

		search.value = '';
	} else {
		window.location.reload();
	}
});

getMovies(API_URL);
