import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { 
  SITE_TITLE, 
  SITE_DESCRIPTION, 
  WEBSITE_DOMAIN_COMPLETE 
} from "../data/consts";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || WEBSITE_DOMAIN_COMPLETE,
    
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    
    customData: `<language>en-us</language>`,
  });
};