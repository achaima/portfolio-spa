function PortfolioController() {
  var controller = this;

  controller.projects = [
    {
      title: 'Burger Hop',
      img: '../../images/BurgerHop.png',
      gif: '../../images/burgerHop.gif',
      desc: 'A single player game where the aim is to collect as many burgers as possible within 30 seconds and avoid the cabbages.',
      duration: '1 week',
      githubLink: 'https://github.com/achaima/sg-project-1',
      herokuLink: 'https://achaima-sg-project-1.herokuapp.com/',
      tags: 'Javascript, jQuery',
      class: 'burger',
      state: 'burger-hop',
      visible: true
    },
    {
      title: 'Event Finder',
      img: '../../images/event-finder.png',
      gif: '../../images/event-finder.gif',
      desc: '',
      duration: '1 week',
      githubLink: 'https://github.com/achaima/sg-project-3',
      herokuLink: 'https://achaima-sg-project-3.herokuapp.com/',
      tags: 'Javascript, Node.js, Express, AngularJS',
      class: 'event',
      state: 'event-finder',
      visible: true
    },
    {
      title: 'Movies',
      img: '../../images/Movies.png',
      desc: '',
      duration: '1 week',
      githubLink: '',
      herokuLink: '',
      tags: 'Javascript, Node.js, Express',
      class: 'movies',
      state: 'movies',
      visible: true
    },
    {
      title: 'Clock',
      img: '../../images/clock.png',
      desc: '',
      duration: '1 week',
      githubLink: '',
      herokuLink: '',
      tags: 'Javascript, AngularJS',
      class: 'clock',
      state: 'clock',
      visible: true
    },
    {
      title: 'placeholderOne',
      img: '../../images/comingSoon.jpg',
      desc: '',
      githubLink: '',
      herokuLink: '',
      tags: 'HTML',
      class: 'placeholderOne',
      visible: true
    },
    {
      title: 'placeholderTwo',
      img: '../../images/comingSoon.jpg',
      desc: '',
      githubLink: '',
      herokuLink: '',
      tags: 'HTML',
      class: 'placeholderTwo',
      visible: true
    }
  ];

  controller.filter = function(tech) {
    var techRegExp = new RegExp(tech);
    controller.projects.forEach(function(project) {
      if(project.tags.match(techRegExp)) {
        project.visible = true;
      } else {
        project.visible = false;
      }
    });
  };

  controller.showAll = function() {
    controller.projects.forEach(function(project) {
      project.visible = true;
    });
  };


  function init() {
    console.log(controller);
  }

  init();
}

angular
 .module('PortfolioApp')
 .controller('PortfolioController', PortfolioController);
