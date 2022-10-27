
const axios = require('axios').default;


/*Ссылка на документацию для запроса у полной информации о кинофильме для страницы кинофильма:*/



// id,
//       title,
//       originalTitle,
//       genres,
//       popularity,
//       overview,
//       rating,
//       voteCount,
//       imgPath,




  export async function getGenre(path) {

    try {
      const responce = await axios.get(path)
       console.log(responce.data.genres);
      return responce.data.genres
    } catch (error) {
      console.error(error);
    }

    }


 

export async function getMovies(path) {

  try {
   const responce = await axios.get(path)
   console.log(responce.data);

    return responce.data
  } catch (error) {
    console.error(error);
  }
      
    }

//  getGenre()
 // getMovies()