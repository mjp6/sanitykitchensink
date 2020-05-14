export default {
  widgets: [
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
                  buildHookId: '5ebd1b46aa0e31c1d557b3d3',
                  title: 'Sanity Studio',
                  name: 'sanitykitchensink-studio',
                  apiId: '0230b725-8332-4bc1-babd-c73e17f49489'
                },
                {
                  buildHookId: '5ebd1b46aa0e31009157afe2',
                  title: 'Blog Website',
                  name: 'sanitykitchensink',
                  apiId: 'd82a25b7-8e87-40a4-8384-8609796f8431'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mjp6/sanitykitchensink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanitykitchensink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
