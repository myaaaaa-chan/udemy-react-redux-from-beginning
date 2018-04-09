// @flow

import React, { Component, PropTypes } from 'react';

type Props = {
  onSubmit: (place: string) => void;
};

type State = {
  place: string
};

class SearchFrom extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      place: '東京タワー'
    };
  }
  render() {
    return (
      <form onSubmit={e => this.handleOnSearchSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={(e) => this.handlePlaceChange(e.target.value)}
        />
        <input type="submit" value="検索" />
      </form>
    );
  }

  handlePlaceChange(place: string) {
    this.setState({ place });
  }

  handleOnSearchSubmit(e: Event) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }
}

SearchFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchFrom;