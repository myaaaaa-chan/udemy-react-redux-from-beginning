import React, { Component } from 'react';
import axios from 'axios';

import SearchFrom from './SearchFrom';
import GeocodeResult from './GeocodeResult';
import Map from './Map';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleMouseOver() {
    this.setState({ name: 'Cat' });
  }

  handleMouseOut() {
    this.setState({ name: 'Dog' });
  }

  handleOnChange(name) {
    this.setState({ name });
  }

  handlePlaceSubmit(place) {
    console.log(place);
    axios.get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then(
        (results) => {
          console.log(results);
          const data = results.data;
          switch (data.status) {
            case 'OK':
              const result = data.results[0];
              const location = result.geometry.location;
              this.setState({
                address: result.formatted_address,
                lat: location.lat,
                lng: location.lng,
              });
              break;
            case 'ZERO_RESULTS':
              this.setErrorMessage('結果が見つかりませんでした');
              break;
            default:
              break;
          }
        }
      )
      .catch((error) => {
        console.log(error);
        this.setErrorMessage('通信に失敗しました');
      });
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0,
    });
  }

  render() {
    return (
      <div>
        <h1>緯度経度検索</h1>
        <SearchFrom onSubmit={(place) => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
