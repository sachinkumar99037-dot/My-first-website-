const API_KEY = 'b49f59a1f3209cfc06d9a0d9c7681219'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = BASE_URL + '/search/movie?api_key=' + API_KEY + '&query="';

const mainGrid = document.querySelector('.movie-grid');
const form = document.querySelector('.search-box');
const search = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');

getMovies(API_URL);

async function getMovies(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showMovies(data.results);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

function showMovies(movies) {
    mainGrid.innerHTML = '';

    movies.forEach(movie => {
        const { id, title, poster_path, release_date, vote_average } = movie;
        const imagePath = poster_path ? IMG_URL + poster_path : 'https://via.placeholder.com/300x400?text=No+Poster';
        const year = release_date ? release_date.split('-')[0] : 'N/A';

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie-card');
        
        // Movie Card HTML with link
        movieEl.innerHTML = `
            <a href="https://www.themoviedb.org/movie/${id}" target="_blank" style="text-decoration: none; color: inherit;">
                <div class="badge">★ ${vote_average.toFixed(1)}</div>
                <img src="${imagePath}" alt="${title}">
                <div class="movie-info">
                    <h3>${title}</h3>
                    <p class="meta">${year}</p>
                </div>
            </a>
        `;

        mainGrid.appendChild(movieEl);
    });
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});

search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});
