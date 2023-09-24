import React from 'react';
import Link from 'next/link';
import Heading from '../../components/Heading';
import { getReviews } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews',
};
const ReviewsPage = async () => {
  const reviews = await getReviews();

  return (
    <div>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='rounded border bg-white shadow transition-all hover:shadow-xl'
          >
            <Link className='flex flex-col ' href={`reviews/${review.slug}`}>
              <img
                className='rounded-t sm:rounded-l sm:rounded-r-none '
                width='320'
                height='180'
                src={review.image}
                alt=''
              />
              <h2 className='py-1 text-center font-bebas_neue font-semibold  sm:px-2 '>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
