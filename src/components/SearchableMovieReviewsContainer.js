// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'cf24395f73f64c49b40f0220b18e4056'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  };

  componentWillMount() {
    fetch(URL)
    .then(response => response.json())
    .then((reviews => this.setState( { reviews: reviews.results } )))
  }

  render() { // could also change ternary condition to conditional in MovieReviews
    return (
      <div className="latest-movie-reviews">
        <ul>
        {
          (this.state.reviews.length)
            ? <MovieReviews key={this.state.reviews.index} reviews={this.state.reviews} />
            : <div>Loading...</div>
        }
        </ul>
      </div>
    )
  };
}

export default SearchableMovieReviewsContainer
