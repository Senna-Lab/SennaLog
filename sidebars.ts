import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Projects',
      items: [
        {
          type: 'category',
          label: 'FanView',
          items: [
            {
              type: 'category',
              label: 'Docs',
              items: [
                'projects/fanview/docs/architecture',
              ],
            },
            {
              type: 'category',
              label: 'Devlog',
              items: [
                'projects/fanview/devlog/2026-05-10-first-devlog',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
