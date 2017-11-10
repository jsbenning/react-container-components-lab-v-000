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


  // fetchReviews = (URL) => {
  //   return fetch(URL)
  // 	.then(function(response) {
  // 		if (response.status >= 400) {
  // 			throw new Error("Bad response from server");
  // 		}
  // 		return response.json();
  // 	})
  // 	.then(function(reviews) {
  //     return reviews.results;
	//   });
  // }

  //const recentReviews = Object.assign({}, this.state, {reviews: fetchReviews});

  latestReviews = () => {
    const stateCopy = Object.assign({}, this.state);
    //stateCopy.reviews.map((review) => {
      //console.log(review)

    //})
    // stateCopy.reviews.map((review) => {
    //   console.log(review)
    // })
    stateCopy.reviews.map((review) => {
      //console.log(review)
      return <MovieReviews review={review} />
    });
    // return fetchedReviews;
    //return <MovieReviews reviews={stateCopy} />


  }




  componentWillMount() {
    fetch(URL)
    .then(response => response.json())
    .then((reviews => this.setState( { reviews: reviews.results } )))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <ul>
        {
          (this.state.reviews.length)
            ? <div>{this.latestReviews()}</div>
            : <div> Something went wrong </div>
        }
        </ul>
      </div>
    )
  };
}

export default LatestMovieReviewsContainer
