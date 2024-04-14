import axios from 'axios';
import { PATH } from 'properties/Api';

axios.defaults.baseURL = PATH.baseUrl;

export const findAll = async () => {
  const data = await axios.get(PATH.advert);
  return data;
};

// export const save = async contact => {
//   const data = await axios.post(PATHS.contacts, contact);
//   return data;
// };

// export const deleteById = async id => {
//   const data = await axios.delete(`${PATHS.contacts}/${id}`);
//   return data;
// };
