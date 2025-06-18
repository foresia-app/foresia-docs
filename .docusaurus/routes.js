import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fe0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '94b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'df1'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', '7b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
