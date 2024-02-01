"use client"

import type { FC } from 'react';

import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import { formatDate } from '@/utils/formatDate';
import { Label } from '../Label';
import { Suspense } from 'react';
import ViewCounter from '../../app/blog/view-counter';
import Rav from '../../public/images/reviews/kravchenko.jpg'

type BlogPostCardProps = {
  post: Post;
  variant?: 'image-horizontal' | 'image-vertical' | 'default' | 'minimal';
  className?: string;
};

export const BlogPostCard: FC<BlogPostCardProps> = ({
  post,
  className,
  variant = 'default',
}) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      role="button"
      aria-label={`Read article: ${post.title}`}
      className="a-reset focus-default inline-block max-w-fit cursor-pointer rounded-lg transition-all hover:ring-2 hover:ring-violet hover:ring-offset-2 dark:hover:ring-offset-black"
    >
    <Card className="max-w-[24rem] overflow-hidden">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none"
    >
      {variant.startsWith('image') && (
          <div className="h-full">
            {post.cover && (
              <Image
                src={post.cover.src}
                alt={post.cover.alt}
                width={400}
                height={220}
                className={clsx(
                  'bg-black-50 object-cover dark:bg-black-950',
                  variant === 'image-vertical'
                    ? 'rounded-lg'
                    : 'rounded-lg md:!rounded-r-lg md:rounded-t-none'
                )} />
            )}
          </div>
        )}
    </CardHeader>
    <CardBody>
      <Typography variant="h4" color="blue-gray">
      {post.title}
      </Typography>
      <Typography variant="lead" color="gray" className="mt-3 font-normal">
      {variant !== 'minimal' && (
          <p className="my-1 text-sm opacity-75">{post.summary}</p>
        )}
        {post.category && (
          <Label color="gray" className="mt-2 inline-block">
            {post.category}
          </Label>
        )}
      </Typography>
    </CardBody>
    <CardFooter className="flex items-center justify-between">
      <div className="flex items-center -space-x-3">
        <Tooltip content="Кравченко Виктория">
          <Avatar
            size="sm"
            variant="circular"
            alt="natali craig"
            src="/images/reviews/kravchenko.jpg"
            className="border-2 border-white hover:z-10"
          />
        </Tooltip>
      </div>
      <Typography className="font-normal">
      <time className="text-sm opacity-75">
            {formatDate(post.publishedAt, 'dd.LL.yyyy')}
          </time>

      </Typography>
    </CardFooter>
  </Card>
  </Link>
  );
};

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }