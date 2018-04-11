// @flow
import React from 'react';

import HotelRow from './HotelRow';
import type Hotel from './HotelRow';

const HotelsTable = ({hotels}: { hotels: Array<Hotel> }) => (
  <table>
    <tbody>
      <tr>
        <th>画像</th>
        <th>ホテル名</th>
        <th>価格</th>
        <th>レビュー(評価件数)</th>
        <th>距離</th>
      </tr>
      {hotels.map((hotel: Hotel) => (<HotelRow key={hotel.id} hotel={hotel}/>))}
    </tbody>
  </table>
);

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;