// Exploresol/components/RatingReviewsForm.tsx
import { SetStateAction, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const RatingReviewsForm = ({ listingId, userId  }: RatingReviewsProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0); // New state to handle hover effect
  const [review, setReview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const supabaseClient = createClient();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSuccessMessage(''); // Reset success message
    setErrorMessage(''); // Reset error message

    const { data, error } = await supabaseClient
      .rpc('ratings_reviews_insert', { _listing_id: listingId,  _user_id: userId, _rating: rating, _review: review });

    if (error) {
      console.error('Error submitting review:', error);
      setErrorMessage('Failed to submit review. Please try again:');
    } else {
      console.log('Review submitted Successfully with:', data + 'Star Rating' + "Review:", data);
      setSuccessMessage('Review submitted successfully!');
      setRating(0);
      setReview('');
    }
  };

  const handleRating = (rate: SetStateAction<number>) => {
    setRating(rate);
  };

  const handleMouseOver = (rate: SetStateAction<number>) => {
    setHoverRating(rate);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (

    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

      <div>

      {/* <label className="mb-2 capitalize text-white text-xl">{listing.name} Ratings & Reviews:</label>
      <br/> */}
      {/* Rating input */}
      <span className="text-sm text-gray-400 mb-1">
          Kindly share sincere and un-bias review that will be helpful for other users to make an informed decision 
          about this listing - Thanks! 
          <br />
          Warning: 1 rating/review allowed per user per listing. You can't edit, update or delete rating/review later.
        </span>
        <label htmlFor="rating" className="block text-xl font-bold text-gray-300">
          Rating:
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseOver={() => handleMouseOver(star)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleRating(star)}
              className="hover:text-yellow-500"
              aria-label={`Rate ${star} stars`}
            >
              {rating >= star || hoverRating >= star ? (
                <StarIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <StarOutlineIcon className="w-5 h-5 text-gray-400" />
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Review input */}
      <div>
        <label htmlFor="review" className="block text-xl font-bold text-gray-300">
          Review:
        </label>
        <span className="text-sm text-gray-400 mb-1">
          Minimum 50 characters.  
        </span>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={6}
          className="text-gray-600 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      {/* Submit button */}
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit Review
      </button>

      {/* Display feedback message - error or success */}
      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

    </form>

  );

};

export default RatingReviewsForm;
