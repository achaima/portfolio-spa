function MainRouter($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home.html'
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: '/states/portfolio.html'
    })
    .state('projects', {
      url: '/portfolio/BurgerHop',
      views: {
        '': { templateUrl: '/states/portfolio.html'},
        'main-content@projects': { templateUrl: '/states/partials/_burgerHop.html'},
        'projects-aside@projects': { templateUrl: '/states/partials/_portfolioList.html'}
      }
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
