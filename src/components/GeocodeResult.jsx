// @flow

import React from 'react';

type Location = {
  lat: number,
  lng: number
};

const GeocodeResult = ({address, location}: { address: string, location: Location }) => (
  <div>
    <ul className="geocode-result">
      <li>住所：{address}</li>
      <li>緯度：{location.lat}</li>
      <li>経度：{location.lng}</li>
    </ul>
  </div>
);

GeocodeResult.defaultProps = {
  address: '',
  location: {lat: 0, lng: 0},
};

export default GeocodeResult;