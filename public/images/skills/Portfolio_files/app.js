function MainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('burger-hop', {
      url: '/burger-hop',
      templateUrl: '/states/burger-hop.html'
    })
    .state('event-finder', {
      url: '/event-finder',
      templateUrl: '/states/event-finder.html'
    })
    .state('clock', {
      url: '/clock',
      templateUrl: '/states/clock.html'
    })
    .state('movies', {
      url: '/movies',
      templateUrl: '/states/movies.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/states/profile.html'
    });
}

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

angular
  .module('PortfolioApp', ['ui.router'])
  .config(MainRouter);
