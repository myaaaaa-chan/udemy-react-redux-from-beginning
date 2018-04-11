// @flow
import React from 'react';

export type HotelsClickableThProps = {
  label: string,
  sortKey: string,
  isSelected: boolean,
  onSort: Function
};

const HotelsClickableTh = ({label, sortKey, isSelected, onSort}: HotelsClickableThProps) => (
  <th
    className="hotels-clickable-th"
    onClick={() => onSort(sortKey)}>
    {label}{isSelected ? '▲' : ''}
  </th>
);

export default HotelsClickableTh;
