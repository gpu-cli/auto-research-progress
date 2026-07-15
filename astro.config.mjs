// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

function wrapWideTables() {
  /** @param {any} tree */
  return (tree) => {
    /** @param {any} node */
    function visit(node) {
      if (!node?.children) return;
      node.children = node.children.map((/** @type {any} */ child) => {
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['typeset-scroll'] },
            children: [child],
          };
        }
        visit(child);
        return child;
      });
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: { rehypePlugins: [wrapWideTables] },
});