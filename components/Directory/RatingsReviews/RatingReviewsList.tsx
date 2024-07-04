// /components/Directory/RatingsReviews/RatingReviewsList.tsx
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const RatingReviewsList = ({ listingId }: RatingReviewsProps) => {
  const [reviews, setReviews] = useState<RatingsReviewsType[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabaseClient
        .rpc('ratings_reviews_fetch_approved', { _listing_id: listingId });

      if (error) {
        console.error('Error fetching reviews:', error);
      } else {
        setReviews(data);
      }
    };

    fetchReviews();
  }, [listingId]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4">
          <div className="flex items-center">
            <p className="mr-2 text-l font-bold text-purple-500">Rating:</p>
            {[...Array(5)].map((_, index) => (
              index < review.rating ? (
                <StarIcon key={`${review.id}-${index}`} className="w-5 h-5 text-yellow-400" />
              ) : (
                <StarOutlineIcon key={`${review.id}-${index}`} className="w-5 h-5 text-gray-400" />
              )
            ))}
          </div>
          <p>
            <label className="mr-2 text-l font-bold text-purple-500">
              Review:
            </label> 
            <br />
            {review.review}
          </p>
          <p>
            <label className="mr-2 text-l font-bold text-purple-500">
              By:
            </label> 
            {review.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RatingReviewsList;