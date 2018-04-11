import React, {Component} from 'react';
import _ from 'lodash';

import SearchFrom from './SearchFrom';
import GeocodeResult from './GeocodeResult';
import Map from './Map';
import {geocode} from "../domain/GeoCorder";
import {hotelSearch} from "../domain/HotelSearch";
import HotelsTable from "./HotelesTable";

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {lat: 35.685462, lng: 139.752904},
      hotels: [],
      sortKey: 'minCharge',
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
        this.setState({hotels: sortedHotels(hotels, this.state.sortKey)});
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

  handleSortKeyChange(sortKey) {
    this.setState({sortKey, hotels: sortedHotels(this.state.hotels, sortKey)});
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
            <HotelsTable
              hotels={this.state.hotels}
              sortKey={this.state.sortKey}
              onSort={(sortKey) => this.handleSortKeyChange(sortKey)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
