import axios from 'axios';
import { PATHS } from 'properties/Constants';

axios.defaults.baseURL = PATHS.baseUrl;

const getParametersString = params => {
  const urlSearchParams = new URLSearchParams(params);
  return `?${urlSearchParams}`;
};

export const findAll = async (page = 1, limit = 20) => {
  const url = PATHS.advert + getParametersString({ page, limit });
  console.log('url>>', url);
  const response = await axios.get(url);
  return response;
};

export const findAllFilterBy = async (filterParams, page = 1, limit = 20) => {
  const url =
    PATHS.advert + getParametersString({ ...filterParams, page, limit });
  console.log('url>>', url);
  const response = await axios.get(url);
  return response;
};

// export const save = async contact => {
//   const data = await axios.post(PATHS.contacts, contact);
//   return data;
// };

// export const deleteById = async id => {
//   const data = await axios.delete(`${PATHS.contacts}/${id}`);
//   return data;
// };
