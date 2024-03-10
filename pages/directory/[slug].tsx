// exploresol/pages/directory/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPaths } from 'next';

const DirectoryEntry = ({ data, content }: { data: any, content: any }) => {
  // Ensure you have the correct structure and components to render your MDX content
  // The exact structure will depend on how you've set up your MDX with components
  return (
    <article>
      <h1>{data.name}</h1>
      <MDXRemote {...content} />
    </article>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'directorycontents', `${params!.slug}.md`);
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    const mdxSource = await serialize(content);

    return { props: { data, content: mdxSource } };
  } catch (error) {
    // If there's an error (e.g., the file doesn't exist), return a 404 status
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const directory = path.join(process.cwd(), 'directorycontents');
  const filenames = fs.readdirSync(directory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return { paths, fallback: 'blocking' };
};

export default DirectoryEntry;
