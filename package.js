
Package.describe({
  name    : 'semantic:ui-transition',
  summary : 'Semantic UI - Transition: Single component release',
  version : '1.11.0',
  git     : 'git://github.com/Semantic-Org/UI-Transition.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'transition.css',
    'transition.js'
  ], 'client');
});
