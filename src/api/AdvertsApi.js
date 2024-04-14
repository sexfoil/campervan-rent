import axios from 'axios';
import { PATHS } from 'properties/Constants';

axios.defaults.baseURL = PATHS.baseUrl;

export const findAll = async () => {
  const response = await axios.get(PATHS.advert);
  return response.data;
};

// export const save = async contact => {
//   const data = await axios.post(PATHS.contacts, contact);
//   return data;
// };

// export const deleteById = async id => {
//   const data = await axios.delete(`${PATHS.contacts}/${id}`);
//   return data;
// };
