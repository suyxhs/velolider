// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  subtitle?: string | undefined
  publishedAt: IsoDateTimeString
  summary?: string | undefined
  cover?: Image | undefined
  externals?: Externals | undefined
  category?: 'Элита' | 'Легионеры' | 'Состав' | 'Протоколы' | 'Персонал' | 'Прочее' | 'Спонсоры' | undefined
  tags?: string[] | undefined
  /** MDX file body */
  body: MDX
  slug: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  title: string
  period?: string | undefined
  subtitle?: string | undefined
  cover?: Image | undefined
  role?: string | undefined
  space?: string | undefined
  tags?: string[] | undefined
  stack?: string[] | undefined
  externals?: Externals | undefined
  background?: Markdown | undefined
  backgroundSecond?: Markdown | undefined
  carousel?: Image[] | undefined
  responsibilities?: Markdown[] | undefined
  achievements?: Markdown[] | undefined
  review?: Review | undefined
  video?: Video[] | undefined
  /** MDX file body */
  body: MDX
  slug: string
}  

/** Nested types */
export type Externals = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Externals'
  Medium?: string | undefined
  ProductHunt?: string | undefined
  Website?: string | undefined

}

export type Image = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Image'
  src: string
  alt: string
  caption?: Markdown | undefined

}

export type Review = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Review'
  biography?: string | undefined
  summary?: Markdown | undefined
  avatar?: Image | undefined

}

export type Video = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Video'
  src: string
  alt: string
  thumbnail: string
  caption?: Markdown | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post | Project
export type DocumentTypeNames = 'Post' | 'Project'

export type NestedTypes = Externals | Image | Review | Video
export type NestedTypeNames = 'Externals' | 'Image' | 'Review' | 'Video'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allProjects: Project[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
  Project: Project
}

export type NestedTypeMap = {
  Externals: Externals
  Image: Image
  Review: Review
  Video: Video
}

 