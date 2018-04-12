// @flow

import React from 'react';

type Props = {
  place: string,
  onPlaceChange(place: string): Function,
  onSubmit(e: Event): Function,
};

const SearchFrom = (props: Props) => (
  <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e) => props.onPlaceChange(e.target.value)}
    />
    <input className="search-submit-button" type="submit" value="検索"/>
  </form>
);

export default SearchFrom;