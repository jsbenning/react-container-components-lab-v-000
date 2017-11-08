import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

//const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const NYT_API_KEY = 'cf24395f73f64c49b40f0220b18e4056'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  };

  showReviews = () => {
    const recentReviews = this.fetchReviews();
    console.log(recentReviews);

    // this.setState({
    //   reviews: recentReviews
    // });
  };

  fetchReviews = (URL) => {
    return fetch(URL)
  	.then(function(response) {
  		if (response.status >= 400) {
  			throw new Error("Bad response from server");
  		}
  		return response.json();
  	})
  	.then(function(reviews) {
      return reviews.results;
	  });
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
       <button onClick={this.showReviews}>Recent Reviews</button>
       <MovieReviews recentReviews={this.state}/>


      </div>
    )
  };
}

export default LatestMovieReviewsContainer
