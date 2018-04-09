import React, { Component, PropTypes } from 'react';

const GeocodeResult = ({ address, lat, lng }) => (
  <div>
    <ul className="geocode-result">
      <li>住所：{address}</li>
      <li>緯度：{lat}</li>
      <li>経度：{lng}</li>
    </ul>
  </div>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

GeocodeResult.defaultProps = {
  address: '',
  lat: 0,
  lng: 0,
};

export default GeocodeResult;