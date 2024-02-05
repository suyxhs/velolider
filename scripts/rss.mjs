import { writeFileSync } from 'fs';
import { compareDesc, parseISO } from 'date-fns';
import { Feed } from 'feed';

import allPosts from '../.contentlayer/generated/Post/_index.json' assert { type: 'json' };

const baseUrl = 'https://velolider.vercel.app';
const author = {
  name: 'ВелоЛидер',
  email: 'velolider@gmail.com',
  link: baseUrl,
};

const date = new Date();

const feed = new Feed({
  title: 'ВелоЛидер',
  description: 'All about product development and freelancing.',
  id: baseUrl,
  link: baseUrl,
  language: 'en',
  image: `${baseUrl}/favicon.ico`,
  favicon: `${baseUrl}/favicon.ico`,
  updated: date,
  copyright: `ВелоЛидер ${date.getFullYear()}`,
  author,
  feedLinks: {
    rss2: `${baseUrl}/rss.xml`,
  },
});

allPosts
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .forEach(post => {
    const url = `https://velolider/blog/${post.slug}`;
    feed.addItem({
      id: url,
      link: url,
      title: post.title,
      description: post.summary,
      date: parseISO(post.publishedAt),
      category: post.category,
      image: `${baseUrl}${post.cover.src}`,
      author: [author],
      contributor: [author],
    });
  });

writeFileSync('./public/rss.xml', feed.rss2(), { encoding: 'utf-8' });
