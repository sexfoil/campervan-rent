import axios from 'axios';
import { PATHS } from 'properties/Constants';

axios.defaults.baseURL = PATHS.baseUrl;

const getParametersString = params => {
  const urlSearchParams = new URLSearchParams(params);
  return `?${urlSearchParams}`;
};

export const findAll = async (page = 1, limit = 20, locationValue) => {
  const url =
    PATHS.advert +
    getParametersString({
      page,
      limit,
      ...(locationValue && { location: locationValue }),
    });
  const response = await axios.get(url);
  return response;
};
