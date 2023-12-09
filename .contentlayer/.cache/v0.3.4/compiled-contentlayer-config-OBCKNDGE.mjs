// contentlayer.config.ts
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var Image = defineNestedType(() => ({
  name: "Image",
  fields: {
    src: { type: "string", required: true },
    alt: { type: "string", required: true },
    caption: { type: "markdown" }
  }
}));
var Externals = defineNestedType(() => ({
  name: "Externals",
  fields: {
    Medium: { type: "string" },
    ProductHunt: { type: "string" },
    Website: { type: "string" }
  }
}));
var POSTS_DIR_NAME = "posts";
var Categories = ["\u041B\u0438\u0434\u0435\u0440\u044B", "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B", "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B", "\u041F\u0440\u043E\u0447\u0435\u0435", "\u0421\u043F\u043E\u043D\u0441\u043E\u0440\u044B"];
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `./${POSTS_DIR_NAME}/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "date", required: true },
    summary: { type: "string" },
    cover: { type: "nested", of: Image },
    externals: { type: "nested", of: Externals },
    category: { type: "enum", options: Categories },
    tags: { type: "list", of: { type: "string" } }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        const name2 = post._raw.flattenedPath.split(`${POSTS_DIR_NAME}/`).pop();
        const slug = name2?.replace(/^(\d{3})-/, "");
        if (!slug)
          throw new Error(`Invalid file name: ${name2}`);
        return slug;
      }
    }
  }
}));
var PROJECTS_DIR_NAME = "projects";
var Review = defineNestedType(() => ({
  name: "Review",
  fields: {
    biography: { type: "string" },
    summary: { type: "markdown" },
    avatar: { type: "nested", of: Image }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `./${PROJECTS_DIR_NAME}/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    period: { type: "string" },
    subtitle: { type: "string" },
    cover: { type: "nested", of: Image },
    role: { type: "string" },
    space: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    stack: { type: "list", of: { type: "string" } },
    externals: { type: "nested", of: Externals },
    background: { type: "markdown" },
    carousel: { type: "list", of: Image },
    responsibilities: { type: "list", of: { type: "markdown" } },
    achievements: { type: "list", of: { type: "markdown" } },
    review: { type: "nested", of: Review }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => {
        const n = post._raw.flattenedPath.split(`${PROJECTS_DIR_NAME}/`).pop();
        const slug = n?.replace(/^(\d{3})-/, "");
        if (!slug)
          throw new Error(`Invalid file name: ${name}`);
        return slug;
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer", "nofollow"] }
      ],
      rehypeSlug,
      rehypeAutolinkHeadings
    ]
  }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-OBCKNDGE.mjs.map
