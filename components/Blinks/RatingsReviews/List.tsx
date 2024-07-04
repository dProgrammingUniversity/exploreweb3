// /components/Blinks/RatingsReviews/List.tsx
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

const BlinksRatingReviewsList = ({ blinksId }: BlinksRatingReviewsProps) => {
  const [reviews, setReviews] = useState<RatingsReviewsType[]>([]);
  const supabaseClient = createClient();

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabaseClient
        .rpc('blinks_ratings_reviews_fetch_approved', { _blinks_id: blinksId });

      if (error) {
        console.error('Error fetching reviews:', error);
      } else {
        setReviews(data);
      }
    };

    fetchReviews();
  }, [blinksId]);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4">
          <div className="flex items-center">
            <p className="mr-2 text-l font-bold text-purple-500">Rating:</p>
            {[...Array(5)].map((_, index) => (
              index < review.rating ? (
                <StarIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <StarOutlineIcon className="w-5 h-5 text-gray-400" />
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

export default BlinksRatingReviewsList;