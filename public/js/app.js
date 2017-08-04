function MainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': { templateUrl: '/states/home.html' },
        'header@home': { templateUrl: '/states/partials/header.html' }
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/states/profile.html'
    })
    .state('project-viewer', {
      url: '/project-viewer',
      views: {
        '': { templateUrl: '/states/project-viewer.html' },
        'burger-hop@project-viewer': { templateUrl: '/states/partials/burger-hop.html' },
        'event-finder@project-viewer': { templateUrl: '/states/partials/event-finder.html' },
        'clock@project-viewer': { templateUrl: '/states/partials/clock.html' },
        'movies@project-viewer': { templateUrl: '/states/partials/movies.html' }
      }
    });
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('PortfolioApp', ['ui.router'])
  .config(MainRouter);
