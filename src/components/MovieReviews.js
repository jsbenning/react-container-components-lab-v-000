// Code MovieReviews Here
import React from 'react';
//import LatestMovieReviewsContainer from './LatestMovieReviewsContainer';

// stateless and functional

const MovieReviews = ({reviews}) => {
  //return reviews.length
   reviews.map((review) => {
      return (
        <li>review.display_title</li>
      )
   })
}

export default MovieReviews;

// props.reviews.map((review) => {
//   return (
//     <li>
//     {review.display_title}
//     </li>
//   )
// })

//stateCopy.reviews.map((review) => {
  //console.log(review)

//})
// stateCopy.reviews.map((review) => {
//   console.log(review)
// })
//stateCopy.reviews.map((review) => {
  //console.log(review)
//   return <MovieReviews />
// });
// return fetchedReviews;
//return <MovieReviews reviews={stateCopy} />
