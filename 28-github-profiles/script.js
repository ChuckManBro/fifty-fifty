'use strict';
// 50 PROJECTS IN 50 DAYS

const APIURL = 'https://api.github.com/users/';

const main = document.querySelector(`#main`);
const form = document.querySelector(`#form`);
const search = document.querySelector(`#search`);

//NOTE Using async/await to GET data with Axios (cdn in index.html)
async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);

		createUserCard(data);
		getRepos(username);
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('No profile with this username');
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + '/repos?sort=created');

		addReposToCard(data);
	} catch (err) {
		createErrorCard('Problem getting repos');
	}
}

form.addEventListener('submit', e => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});

function createErrorCard(msg) {
	const cardHTML = `
  <div class="card">
    <h2>${msg}</h2>
  </div>
  `;
	main.innerHTML = cardHTML;
}

function createUserCard(user) {
	const cardHTML = `
  <div class="card">
    <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>
      <ul>
        <li>${user.followers}<strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
  `;

	main.innerHTML = cardHTML;
}

function addReposToCard(data) {
	const reposEl = document.querySelector(`#repos`);

	//NOTE - slice limits results to 6
	data.slice(0, 6).forEach(repo => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url;
		repoEl.target = '_blank';
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
}
