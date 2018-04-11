// @flow
import React from 'react';

import HotelRow from './HotelRow';
import HotelsClickableTh from './HotelsClickableTh';

import type Hotel from './HotelRow';

export type HotelsTableProps = {
  hotels: Array<Hotel>,
  sortKey: string,
  onSort: Function
};

const HotelsTable = ({hotels, sortKey, onSort}: HotelsTableProps) => (
  <table>
    <tbody>
    <tr>
      <th>画像</th>
      <th>ホテル名</th>
      <HotelsClickableTh
        label='価格'
        sortKey='minCharge'
        isSelected={sortKey === 'minCharge'}
        onSort={(sortKey) => onSort(sortKey)}
      />
      <HotelsClickableTh
        label='レビュー'
        sortKey='reviewAverage'
        isSelected={sortKey === 'reviewAverage'}
        onSort={(sortKey) => onSort(sortKey)}
      />
      <HotelsClickableTh
        label='評価件数'
        sortKey='reviewCount'
        isSelected={sortKey === 'reviewCount'}
        onSort={(sortKey) => onSort(sortKey)}
      />
      <HotelsClickableTh
        label='距離'
        sortKey='distance'
        isSelected={sortKey === 'distance'}
        onSort={(sortKey) => onSort(sortKey)}
      />
    </tr>
    {hotels.map((hotel: Hotel) => (<HotelRow key={hotel.id} hotel={hotel}/>))}
    </tbody>
  </table>
);

HotelsTable.defaultProps = {
  hotels: [],
};

export default HotelsTable;