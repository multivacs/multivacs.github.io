import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://multivacs.com/',
  output: 'static',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { output: 'mathml' }]],
  },
})
