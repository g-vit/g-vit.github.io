import { Post, allPosts } from '@/.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vitaliy Gutsalyuk | Blog',
};

const PostCard = (post: Post) => {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-2xl">
        <Link href={`/blog/${post.slugAsParams}`} className="color-link">
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.date}
        className="mb-2 block text-sm text-gray-400"
      >
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
};

const Blog = () => {
  const posts = allPosts.sort((a: Post, b: Post) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </>
  );
};

export default Blog;
