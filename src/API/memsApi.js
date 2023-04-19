import axios from 'axios';

export const GET_ALL_MEMS = async () => {
   const { data } = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
   return data.data.memes;
};
