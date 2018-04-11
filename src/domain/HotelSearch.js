// @flow

import geolib from 'geolib';

import Rakuten, {API_APP_ID} from '../repository/Rakuten';
import type {Location} from '../components/Map';

export const hotelSearch = (location: Location) => {
  const params = {
    applicationId: API_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng
  };

  return Rakuten.Travel.simpleHotelSearch(params)
    .then((result) => {
      console.log(result);
      return result.data.hotels.map((hotel) => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const distance = geolib.getDistance(
          {latitude: location.lat, longitude: location.lng},
          {latitude: basicInfo.latitude, longitude: basicInfo.longitude},
        );

        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbnailUrl: basicInfo.hotelThumbnailUrl,
          minCharge: basicInfo.hotelMinCharge ? `${basicInfo.hotelMinCharge}円` : '空室なし',
          reviewAverage: basicInfo.reviewAverage ? parseFloat(basicInfo.reviewAverage).toFixed(2) : 0,
          reviewCount: basicInfo.reviewCount ? basicInfo.reviewCount : 0,
          distance: distance,
        };
      });
    });
};