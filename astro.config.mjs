import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { WEBSITE_DOMAIN_COMPLETE } from "./src/data/consts";

export default defineConfig({
  site: WEBSITE_DOMAIN_COMPLETE,
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [
    react(),
    sitemap({
      // 1. Filter pages to exclude from the sitemap
      filter: (page) => {
        // Exclude system pages, error pages, and post-submission confirmations
        // SEO Tip: We exclude confirmation pages to prevent direct access via search results
        const excludePatterns = [
          "/404",
          "/500",
          "/admin",
          "/draft",
          "-confirmation", // Matches contact-confirmation, enroll-confirmation
          "rss.xml",       // Exclude RSS feed from sitemap (it has its own discovery meta tag)
          "robots.txt"     // Exclude robots file
        ];

        // Returns false if the page matches any exclusion pattern
        return !excludePatterns.some((pattern) => page.includes(pattern));
      },

      // 2. Customize priority and frequency based on your site structure
      serialize: (item) => {
        const { pathname } = new URL(item.url);
        const today = new Date().toISOString().split("T")[0];

        // Normalize path for comparison (removes trailing slash for logic checks)
        const cleanPath = pathname.endsWith("/") && pathname !== "/" 
          ? pathname.slice(0, -1) 
          : pathname;

        // --- Priority Level 1: Homepage ---
        if (pathname === "/") {
          return {
            ...item,
            priority: 1.0,
            changefreq: "daily",
            lastmod: today,
          };
        }

        // --- Priority Level 2: Core Business Pages (Money Pages) ---
        // Includes main programs and high-intent conversion pages
        const conversionPages = [
          "/enroll", 
          "/contact", 
          "/financing", 
          "/new-to-flying"
        ];
        
        // Check for Programs folder OR conversion pages
        if (cleanPath.startsWith("/programs") || conversionPages.includes(cleanPath)) {
          return {
            ...item,
            priority: 0.9,
            changefreq: "weekly", // Increased frequency as these are critical
            lastmod: today,
          };
        }

        // --- Priority Level 3: Services & Fleet (Inventory) ---
        if (cleanPath.startsWith("/services") || cleanPath.startsWith("/fleet")) {
          return {
            ...item,
            priority: 0.8,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // --- Priority Level 4: Blog Content ---
        if (cleanPath.startsWith("/blog")) {
          return {
            ...item,
            priority: 0.7,
            changefreq: "weekly",
            lastmod: today,
          };
        }

        // --- Priority Level 5: Staff/Crew ---
        if (cleanPath.startsWith("/crew")) {
          return {
            ...item,
            priority: 0.6,
            changefreq: "monthly",
            lastmod: today,
          };
        }

        // --- Priority Level 6: Legal & Informational (Trust Signals) ---
        // SEO Tip: Don't exclude these. Google checks them for E-E-A-T (Trustworthiness).
        // Just give them low priority.
        const legalPages = [
            "/privacy-policy", 
            "/terms-of-service", 
            "/faqs", 
            "/about-us" // Updated from '/about' to match your file 'about-us.astro'
        ];
        
        if (legalPages.includes(cleanPath)) {
          return {
            ...item,
            priority: 0.3, // Lower priority tells Google to crawl these less often
            changefreq: "yearly",
            lastmod: today,
          };
        }

        // --- Fallback for any missed pages ---
        return {
          ...item,
          priority: 0.5,
          changefreq: "monthly",
          lastmod: today,
        };
      },
    }),
  ],
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});