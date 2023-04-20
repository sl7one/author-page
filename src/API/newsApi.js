import axios from 'axios';

export const API_KEY = 'GRngX3YKGdVEqyJQBlT8ZgRFCe9nxYvB';

export const GET_ALL_NEWS = async () => {
   const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${API_KEY}`
   );
   // console.log(data);
   return data.response.docs;
};
