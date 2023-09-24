import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string) {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, image, date },
  } = matter(text);
  const body = marked(content);

  return { title, image, date, body, slug };
}

export async function getReviews() {
  const slugs = await getSlugs();
  const promises = slugs.map((slug) => getReview(slug));
  const reviews = await Promise.all(promises);

  reviews.sort((a, b) => b.date.localeCompare(a.date));

  return reviews;
}

export async function getSlugs() {
  const files = await readdir('./content/reviews');
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));

  return slugs;
}
