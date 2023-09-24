import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Link from 'next/link';

const HomePage = async () => {
  const { image, slug, title } = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed by you.</p>
      <div className='w-80 rounded border bg-white shadow transition-all hover:shadow-xl sm:w-full'>
        <Link className='flex flex-col ' href={`reviews/${slug}`}>
          <img
            className='rounded-t sm:rounded-l sm:rounded-r-none '
            width='320'
            height='180'
            src={image}
            alt=''
          />
          <h2 className='py-1 text-center font-bebas_neue font-semibold  sm:px-2 '>
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
