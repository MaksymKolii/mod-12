const axios = require('axios').default;

const path = 'https://api.themoviedb.org/3/movie/550?api_key=cf140a587ec927271eacbad378897741'

async function getMovi() {
    try {
      const response = await axios.get(path);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  getMovi()