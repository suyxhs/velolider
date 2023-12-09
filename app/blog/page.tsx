import type { Metadata } from 'next';

import { CTA } from '@/components/CTA';
import { Hero } from '@/components/Hero';

import { BlogPostTimeline } from './_components/BlogPostTimeline';
import { FeaturedBlogPosts } from './_components/FeaturedBlogPosts';

const Blog = () => {
  return (
    <main className="px-container mx-auto max-w-container pb-24">
      <Hero
        className="py-16 md:py-20"
        minHeight={false}
        title={HeroTitle}
        description="Основная информация про спортивную школу"
      />
      <div className="mb-24 flex flex-col-reverse gap-12 md:grid md:grid-cols-[2fr_1fr] md:gap-8 lg:gap-20">
        <BlogPostTimeline />
        <FeaturedBlogPosts />
      </div>
      <CTA variant="sun" />
    </main>
  );
};

const HeroTitle = (
  <>
    <span className="text-violet">Контент</span>
  </>
);

/** EXPORTS */

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'I share my learnings on how to build interactive features with a product-first mindset.',
  alternates: {
    canonical: `https://konstantin.digital/blog`,
  },
};

export default Blog;