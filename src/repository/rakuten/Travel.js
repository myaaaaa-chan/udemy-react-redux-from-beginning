// @flow

import axios from 'axios';

export type SimpleHotelSearchParams = {};

const BASE_URL = 'https://app.rakuten.co.jp/services/api/Travel/';
const SIMPLE_HOTEL_SEARCH_ENDPOINT = `${BASE_URL}SimpleHotelSearch/20170426`;

export default {
  simpleHotelSearch: (params: SimpleHotelSearchParams) => {
    return axios.get(SIMPLE_HOTEL_SEARCH_ENDPOINT, {params});
  }
};
