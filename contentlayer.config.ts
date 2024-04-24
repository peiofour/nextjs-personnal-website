// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `data/posts/*.md`,
  contentType: 'markdown',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    date: { type: 'date', required: true },
    keywords: {type: 'list', of: { type: 'string' }, required: true },
    tags: {type: 'list', of: { type: 'string' }, required: true },
    image: { type: 'string', required: true },
    alt: { type: 'string', required: true },
    author: { type: 'string' },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/data/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'data/posts', documentTypes: [Post] })