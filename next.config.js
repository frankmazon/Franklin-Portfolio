import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MD and MDX files
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add any MDX-specific configuration here
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [['rehype-slug']],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
