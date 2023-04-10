import axios from 'axios';

export const requestPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await axios.get(url);
  return response.data;
};
