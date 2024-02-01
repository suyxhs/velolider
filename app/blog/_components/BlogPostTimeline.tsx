'use client';

import { useState, type FC } from 'react';

import { allPosts } from 'contentlayer/generated';

import { CategoryColors } from '@/config/blog.config';
import { BlogPostCard } from '@/components/Card';
import { Button } from '@/components/Button';

const CATEGORIES = Object.keys(CategoryColors);


export const BlogPostTimeline: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const posts = allPosts
    .filter(post => {
      return selectedCategory ? post.category === selectedCategory : true;
    })
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  return (
    <div id="timeline" className="scroll-m-8 ">
      <h2 className="block font-accent text-2xl font-medium md:mb-10 md:hidden">
        Все посты
      </h2>
      <div className="mb-4 flex  overflow-x-auto py-4 pl-1">
        <Button
          as="button"
          size="sm"
          variant="label"
          className={!selectedCategory ? 'bg-black-200 dark:bg-black-800' : ''}
          onClick={() => setSelectedCategory(undefined)}
        >
          Все посты
        </Button>
        {CATEGORIES.map(category => {
          return (
            <Button
              key={category}
              as="button"
              size="sm"
              variant="label"
              className={
                selectedCategory === category
                  ? 'bg-black-200 dark:bg-black-800'
                  : ''
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          );
        })}
      </div>
      <div className="md:grid md:grid-cols-3 gap-4 flex flex-col flex-wrap items-center md:items-start">
        {posts.map(post => {
          return (
            <>
              {/* <h2 className="pt-8 font-accent text-2xl font-medium flex items-center">{post.subtitle}</h2> */}
              <BlogPostCard
                key={post._id}
                post={post}
                variant="image-horizontal" /></>
          );
        })}
        {posts.length === 0 && (
          <span className="p-4 text-lg font-medium opacity-50">
            В этой категории постов нет
          </span>
        )}
      </div>
    </div>
  );
};
