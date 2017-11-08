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

  const recentReviews = Object.assign({}, this.state, {reviews: this.fetchReviews(URL)});

  addedMovies = () => {
    const stateCopy = Object.assign({}, this.state);
    const recentReviews = stateCopy.reviews.map((review) => {
      return <MovieReviews review={review} />
    });
    return recentReviews;
  }





  render() {
    return (
      <div className="searchable-movie-reviews">
       <button onClick={this.setState({recentReviews})}>Recent Reviews</button>
       {addedMovies}


      </div>
    )
  };
}

export default LatestMovieReviewsContainer
