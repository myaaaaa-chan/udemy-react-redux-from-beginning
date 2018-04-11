// @flow
import React from 'react';

export type Hotel = {
  id: number,
  name: string,
  url: string,
  thumbnailUrl: string,
  minCharge: number,
  reviewAverage: number,
  reviewCount: number,
  distance: number,
};

const HotelRow = ({hotel}: { hotel: Hotel }) => (
  <tr>
    <td>
      <img src={hotel.thumbnailUrl} alt={hotel.name}/>
    </td>
    <td>
      <a href={hotel.url} target="_blank">{hotel.name}</a>
    </td>
    <td className="hotel-min-charge-column">
      {hotel.minCharge ? `${hotel.minCharge}円` : '空室なし'}
    </td>
    <td>
      {hotel.reviewAverage}
    </td>
    <td>
      {hotel.reviewCount}
    </td>
    <td>
      {hotel.distance}
    </td>
  </tr>
);

HotelRow.defaultProps = {
  hotels: [],
}

export default HotelRow;