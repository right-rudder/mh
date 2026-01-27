import type { APIRoute } from "astro";
import { WEBSITE_DOMAIN_COMPLETE } from "../data/consts";

const getRobotsTxt = (site: URL | undefined) => {
  const baseURL = site ? site.href : WEBSITE_DOMAIN_COMPLETE;
  const sitemapURL = new URL("sitemap-index.xml", baseURL).href;
  const rssURL = new URL("rss.xml", baseURL).href;
  const domain = new URL(baseURL).hostname;

  return `
User-agent: *
Allow: /

# Google and Bing specific optimizations
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Social Media Crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Security and System Protection
Disallow: /_astro/
Disallow: /_image/
Disallow: /admin/
Disallow: /draft/
Disallow: /tmp/
Disallow: /*.json$
Disallow: /*.config$
Disallow: /*.env$

# Prevent duplicate content from tracking parameters
Disallow: /*?*utm_*
Disallow: /*?*fbclid=*
Disallow: /*?*gclid=*

# Block conversion-only pages from direct search entry
Disallow: /*-confirmation/
Disallow: /thank-you/

# Explicitly allow High-Value Content Paths
Allow: /programs/
Allow: /programs/*
Allow: /fleet/
Allow: /fleet/*
Allow: /services/
Allow: /services/*
Allow: /blog/
Allow: /blog/*
Allow: /about-us/
Allow: /contact/
Allow: /enroll/
Allow: /financing/
Allow: /new-to-flying/
Allow: /faqs/

# Asset indexing
Allow: /*.css$
Allow: /*.js$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.webp$
Allow: /*.svg$

# AI Scraper Protection
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: CCBot
Disallow: /

# Block SEO Spiders
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# Sitemaps and Host
Sitemap: ${sitemapURL}
Sitemap: ${rssURL}
Host: ${domain}
`.trim();
};

export const GET: APIRoute = ({ site }) => {
  return new Response(getRobotsTxt(site), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
};