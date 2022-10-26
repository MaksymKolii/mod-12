
const axios = require('axios').default;
const API_KEY = "cf140a587ec927271eacbad378897741"

const BASE_URL ="https://api.themoviedb.org/3"


http://api.themoviedb.org/3/genre/movie/list?api_key=
 function getGenre() {
     axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
     .then(function(response){
        console.log(response)
     }).catch(function (error) {
    // handle error
    console.log(error);
  })
    }


 

function getMovi() {
      axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
      .then(function(response){
        console.log(response)
     }).catch(function (error) {
    // handle error
    console.log(error);
  })
    }


getGenre()
getMovi()