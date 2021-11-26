import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('https://powerful-garden-00570.herokuapp.com/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section id="reviews" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-white">
              Reviews
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
