import type { CollectionEntry } from 'astro:content';

const pad = (n: number) => String(n).padStart(2, '0');

/** Old WordPress permalink shape, kept so inbound links and search results still resolve. */
export function postPath(post: CollectionEntry<'posts'>) {
  const d = post.data.pubDate;
  return {
    year: String(d.getUTCFullYear()),
    month: pad(d.getUTCMonth() + 1),
    day: pad(d.getUTCDate()),
    slug: post.id,
  };
}

export function postUrl(post: CollectionEntry<'posts'>) {
  const { year, month, day, slug } = postPath(post);
  return `/${year}/${month}/${day}/${slug}/`;
}
