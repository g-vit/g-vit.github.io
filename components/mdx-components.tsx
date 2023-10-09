import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose max-w-none prose-invert prose-lg">
      <Component components={components} />
    </article>
  );
}
