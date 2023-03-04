import axios from 'axios';

const API_KEY = '32054991-499f02cceef189bab0a177a68';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',

  params: {
    key: API_KEY,
    per_page: '12',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const getImages = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
