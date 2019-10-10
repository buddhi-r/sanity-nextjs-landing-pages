export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d9f115437f471205d416f73',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-o6ni8yb1',
                  apiId: 'd3e8e949-8a55-4ec0-87ce-7b9dc50bde5b'
                },
                {
                  buildHookId: '5d9f1154a79c0fd52d541b9a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nwksvm8g',
                  apiId: '8d5366b0-d8db-40b2-ad6d-4e902be3a803'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/buddhi-r/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nwksvm8g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
