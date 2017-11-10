// Code MovieReviews Here
import React from 'react';
import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

// stateless and functional

const MovieReviews = (props) => {
  //console.log(props.reviews)
  props.reviews.map((review) => {
    return (
      <li>
      {review.display_title}
      </li>
    )
  })

}

export default MovieReviews;
