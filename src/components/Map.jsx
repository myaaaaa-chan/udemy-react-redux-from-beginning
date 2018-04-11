// @flow

import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export type Location = {
  lat: number,
  lng: number
};

const InnerMap = withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 35.6585805, lng: 139.7454329 }}
    center={props.position}
  >
    <Marker
      {...props.marker}
    />
  </GoogleMap>
);

const Map = ({ location }: {location: Location}) => {
  return (
    <InnerMap
      containerElement={<div />}
      mapElement={<div className="map" />}
      position={location}
      marker={{ location }}
    />
  );
};

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
}

Map.defaultProps = {
  lat: 35.6585805,
  lng: 139.7454329,
}

export default Map;
