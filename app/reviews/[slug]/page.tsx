import { getReview } from '@/lib/reviews';
import Heading from '@/components/Heading';
import { getSlugs } from '@/lib/reviews';
import ShareLinkButton from '@/components/ShareLinkButton';

export async function generateStaticParams() {
  const slugs = await getSlugs();
  const slugsObjectsArr = slugs.map((slug) => ({
    slug,
  }));
  return slugsObjectsArr;
}
export async function generateMetadata({ params: { slug } }) {
  const { title } = await getReview(slug);

  return {
    title,
  };
}
const ReviewPage = async ({ params: { slug } }) => {
  const { title, image, date, body } = await getReview(slug);

  return (
    <div>
      <Heading>{title}</Heading>
      <div className='flex items-baseline gap-3'>
        <p className='pb-2 italic'>{date}</p>
        <ShareLinkButton />
      </div>
      <img
        className='mb-2 rounded'
        width='640'
        height='360'
        src={image}
        alt=''
      />
      <article
        className='prose prose-slate max-w-screen-sm'
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};

export default ReviewPage;
