// Code MovieReviews Here
import React from 'react';
//import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

// stateless and functional


const MovieReviews = ({reviews}) => {
  console.log(reviews)
  return <div className="review-list">
    {
     reviews.map(review => (
        <li key={review.id}>{review.display_title} <p>Review by: {review.byline}</p>
        <p>{review.summary_short}</p><a href={review.link.url}>Full Review Here</a><p></p></li>
      ))
    }
  </div>
}

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;
