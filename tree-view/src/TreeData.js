const TreeData = {
  name: 'src',
  type: 'folder',
  path: '/src',
  children: [
    {
      name: 'app',
      type: 'folder',
      path: '/src/app',
      children: [
        { name: 'layout.js', type: 'file', path: '/src/app/layout.js' },
        { name: 'page.js', type: 'file', path: '/src/app/page.js' }
      ]
    },
    {
      name: 'components',
      type: 'folder',
      path: '/src/components',
      children: [
        { name: 'Header.jsx', type: 'file', path: '/src/components/Header.jsx' },
        { name: 'Footer.jsx', type: 'file', path: '/src/components/Footer.jsx' },
        {
          name: 'common',
          type: 'folder',
          path: '/src/components/common',
          children: [
            { name: 'Button.jsx', type: 'file', path: '/src/components/common/Button.jsx' },
            { name: 'Card.jsx', type: 'file', path: '/src/components/common/Card.jsx' }
          ]
        }
      ]
    },
    {
      name: 'hooks',
      type: 'folder',
      path: '/src/hooks',
      children: [
        { name: 'useAuth.js', type: 'file', path: '/src/hooks/useAuth.js' },
        { name: 'useImage.js', type: 'file', path: '/src/hooks/useImage.js' }
      ]
    },
    {
      name: 'pages',
      type: 'folder',
      path: '/src/pages',
      children: [
        { name: 'home.jsx', type: 'file', path: '/src/pages/home.jsx' },
        { name: 'about.jsx', type: 'file', path: '/src/pages/about.jsx' },
        {
          name: 'dashboard',
          type: 'folder',
          path: '/src/pages/dashboard',
          children: [
            { name: 'index.jsx', type: 'file', path: '/src/pages/dashboard/index.jsx' },
            {
              name: 'settings',
              type: 'folder',
              path: '/src/pages/dashboard/settings',
              children: [
                { name: 'profile.jsx', type: 'file', path: '/src/pages/dashboard/settings/profile.jsx' },
                { name: 'billing.jsx', type: 'file', path: '/src/pages/dashboard/settings/billing.jsx' }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'styles',
      type: 'folder',
      path: '/src/styles',
      children: [
        { name: 'globals.css', type: 'file', path: '/src/styles/globals.css' },
        { name: 'theme.css', type: 'file', path: '/src/styles/theme.css' }
      ]
    },
    {
      name: 'public',
      type: 'folder',
      path: '/src/public',
      children: [
        { name: 'favicon.ico', type: 'file', path: '/src/public/favicon.ico' },
        { name: 'logo.svg', type: 'file', path: '/src/public/logo.svg' }
      ]
    },
    { name: 'index.js', type: 'file', path: '/src/index.js' },
    { name: 'main.jsx', type: 'file', path: '/src/main.jsx' }
  ]
};

export default TreeData;
