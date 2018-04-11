import React, {Component} from 'react';

import SearchFrom from './SearchFrom';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import {geocode} from "../domain/GeoCorder";
import {hotelSearch} from "../domain/HotelSearch";
import HotelsTable from "./HotelesTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {lat: 35.685462, lng: 139.752904},
      hotels: [
        {id: 111, name: 'ホテルオークラ', url: "https://google.com"},
        {id: 222, name: 'アパホテル', url: "https://www.yahoo.co.jp"},
      ]
    };
  }

  handlePlaceSubmit(place) {
    console.log(place);
    geocode(place)
      .then(({status, address, location}) => {
        switch (status) {
          case 'OK':
            this.setState({
              address: address,
              location: location,
            });
            return hotelSearch(location);
          case 'ZERO_RESULTS':
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          default:
            break;
        }

        return [];
      })
      .then((hotels) => {
        this.setState({hotels});
      })
      .catch((error) => {
        console.log(error);
        this.setErrorMessage('通信に失敗しました');
      });
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {lat: 0, lng: 0}
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-title">ホテル経度検索</h1>
        <SearchFrom onSubmit={(place) => this.handlePlaceSubmit(place)}/>
        <div className="result-area">
          <Map location={this.state.location}/>
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable hotels={this.state.hotels}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
