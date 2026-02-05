export type PostData = {
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
};

export const posts: Record<string, PostData> = {
  'first-post': {
    title: 'Getting Started with Astro',
    description: 'Learn how to build fast, content-focused websites with Astro.',
    date: '2025-02-05',
    tags: ['astro', 'tutorial'],
    content: `
# Getting Started with Astro

Astro is a modern static site generator that prioritizes performance and developer experience.

## Why Astro?

- **Zero JS by default** - Ships less JavaScript, faster load times
- **Framework agnostic** - Use React, Vue, Svelte, or plain HTML
- **Content-focused** - Perfect for blogs, docs, and marketing sites

## Key Features

### Islands Architecture

Load interactive components independently while keeping the rest of the page static.

### Built-in Optimizations

Image optimization, code splitting, and automatic sitemap generation.

## Getting Started

\`\`\`bash
npm create astro@latest
\`\`\`

That's it! You're ready to build.
    `,
  },
  'tailwind-tips': {
    title: 'Tailwind CSS Best Practices',
    description: 'Essential tips and patterns for building with Tailwind CSS.',
    date: '2025-02-06',
    tags: ['css', 'tailwind'],
    content: `
# Tailwind CSS Best Practices

Tailwind CSS is a utility-first CSS framework that helps you build modern websites without ever leaving your HTML.

## Core Concepts

### Utility-First

Instead of writing custom CSS, you compose designs using pre-existing utility classes.

\`\`\`html
<div class="flex items-center justify-between p-6 bg-white rounded-lg shadow">
  <!-- content -->
</div>
\`\`\`

### Responsive Design

Use responsive prefixes to build mobile-first designs.

\`\`\`html
<div class="p-4 md:p-6 lg:p-8">
  <!-- scales with viewport -->
</div>
\`\`\`

## Best Practices

1. **Extract components** - Reuse patterns with \`@apply\` or component classes
2. **Configure your theme** - Extend the default theme in \`tailwind.config.js\`
3. **Use the JIT engine** - Only generates the CSS you actually use
    `,
  },
  'static-sites': {
    title: 'Why Static Sites Are the Future',
    description: 'Exploring the benefits of static site generation.',
    date: '2025-02-07',
    tags: ['web', 'performance'],
    content: `
# Why Static Sites Are the Future

Static site generation (SSG) has seen a massive resurgence in recent years.

## What is SSG?

Static site generation pre-renders pages at build time, producing pure HTML, CSS, and JavaScript files.

## Benefits

### Performance

No database queries, no server-side processing. Just serving static files.

### Security

No server vulnerabilities to exploit. No database to attack.

### Cost

Host anywhere - GitHub Pages, Netlify, Vercel, or any CDN.

### Reliability

No server downtime when your site goes viral.

## Tools

- **Astro** - Modern, fast, content-focused
- **Next.js** - React-based with SSG support
- **Hugo** - Blazing fast, written in Go

Static sites are perfect for blogs, documentation, and marketing sites.
    `,
  },
};
