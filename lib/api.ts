import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import { BlogPost } from '@/types/blogPost'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as BlogPost;
}

export function getAllPosts(): BlogPost[] {
	const slugs = getPostSlugs();
	return (
		slugs
			.map((slug) => getPostBySlug(slug))
			// sort posts by date in descending order
			.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
	)
}