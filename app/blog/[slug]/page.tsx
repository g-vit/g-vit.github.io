import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { allPosts } from '@/.contentlayer/generated';
import { Mdx } from '@/components/mdx-components';
import Link from 'next/link';

const getPostBySlug = (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
};

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slugAsParams }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article>
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-emerald-400">{post.title}</h1>
        <time dateTime={post.date} className="mb-1 text-sm text-gray-400">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <div className="mb-4">
        <Link href="/blog">← Back</Link>
      </div>
      <Mdx code={post.body.code} />
    </article>
  );
};

export default PostLayout;
