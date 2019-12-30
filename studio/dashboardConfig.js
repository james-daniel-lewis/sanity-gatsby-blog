export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0a1c458d0c8ae96771463b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iqbxio8i',
                  apiId: '1594e225-9156-4b14-8d7a-bddbb2a6a8f2'
                },
                {
                  buildHookId: '5e0a1c45cb6264f9d2b039ee',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gqrz5rzh',
                  apiId: 'bfb8ae0f-0203-4188-9a09-fc70d49b9bfa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/james-daniel-lewis/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gqrz5rzh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
