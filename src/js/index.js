import { getGenre } from '../partials/mainMovie';
import { getMovies } from '../partials/mainMovie';



const BASE_URL ="https://api.themoviedb.org/3"
const modalBox = document.querySelector('.modal-container');
const API_KEY = "cf140a587ec927271eacbad378897741"

const genrePath = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
const mostPopularPath = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`

async function getGenreById(idGen) {
  const arrGenres = await getGenre();
  // console.log(arrGenres.find(option => option.id === `${id}`))

  arrGenres.map(({ id, name }) => {
    if (id === idGen) {
      console.log(name);
    }
  });

}

// getMoviById(913290)

const path = `${BASE_URL}/movie/913290/?api_key=${API_KEY}&language=en-US`
const pathSite = `https://api.themoviedb.org/3/movie/913290?api_key=cf140a587ec927271eacbad378897741&language=en-US`

async function getMovies(path){

    const arrMovies = await getMovies(path);
    // arrMovies.map(({id, title}) => {
    //     if (id === movieId) {
    //       console.log(title);
        
    //     }
    //   });
    console.log(arrMovies);

}

getMovies(mostPopularPath)
getMovies(pathSite)
// getMovies(path)



async function renderModal(movieId, path) {
    // let modalPath = `${BASE_URL}/movies/${movieId}/?api_key=${API_KEY}`
    // const arrMovies = await getMovies(modalPath);
    const movieToRender = await getMovies(path);
    //  const movieToRender = arrMovies.find(movie => movie.id === movieId);
    const {
      id,
      title,
      original_title,
      genres,
      popularity,
      overview,
      vote_average,
      vote_count,
      poster_path,
    } = movieToRender;
  
    let modalMarkup;
      modalMarkup = `
      <div class="modal-img-container">
      <img
        class="modal-img"
        src="${poster_path}"
        alt="${title}"
        width="370"
        height="470"
      />
    </div>
    <div class="film-info">
      <h2 class="film-name">${title}</h2>
      <table class="modal-table">
        <tr class="modal-table__row">
          <td><p class="modal-table__attribute">Vote / Votes</p></td>
          <td>
            <p class="modal-table__value">
              <span class="modal-table__vote">${vote_average}</span> /
              <span class="modal-table__votes">${vote_count}</span>
            </p>
          </td>
        </tr>
        <tr class="modal-table__row">
          <td><p class="modal-table__attribute">Popularity</p></td>
          <td><p class="modal-table__value">${popularity}</p></td>
        </tr>
        <tr class="modal-table__row">
          <td><p class="modal-table__attribute">Original Title</p></td>
          <td><p class="modal-table__value">${original_title}</p></td>
        </tr>
        <tr class="modal-table__row">
          <td><p class="modal-table__attribute">Genre</p></td>
          <td><p class="modal-table__value">${genres.name || ''}</p></td>
        </tr>
      </table>
    
      <h3 class="film-about">About</h3>
      <p class="film-description">
        ${overview}
      </p>
      <div class="modal-btn-wrap">
        <button type="button" class="modal-btn js-watch" data-id="${id}">ADD TO WATCHED</button>
        <button type="button" class="modal-btn js-queue" data-id="${id}">ADD TO QUEUE</button>
      </div>
    </div>`;
    
   
    modalBox.insertAdjacentHTML('beforeend', modalMarkup);
   
    
  }
  renderModal(913290, `https://api.themoviedb.org/3/movie/913290?api_key=cf140a587ec927271eacbad378897741&language=en-US`)