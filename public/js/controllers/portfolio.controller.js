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
      tags: ['Javascript', 'jQuery'],
      class: 'burger',
      state: 'burger-hop'
    },
    {
      title: 'Event Finder',
      img: '../../images/event-finder.png',
      gif: '../../images/event-finder.gif',
      desc: '',
      duration: '1 week',
      githubLink: 'https://github.com/achaima/sg-project-3',
      herokuLink: 'https://achaima-sg-project-3.herokuapp.com/',
      tags: ['Javascript', 'Node.Js','Express', 'AngularJS'],
      class: 'event',
      state: 'event-finder'
    },
    {
      title: 'Movies',
      img: '../../images/Movies.png',
      desc: '',
      duration: '1 week',
      githubLink: '',
      herokuLink: '',
      tags: ['Javascript', 'Node.Js','Express'],
      class: 'movies',
      state: 'movies'
    },
    {
      title: 'Clock',
      img: '../../images/clock.png',
      desc: '',
      duration: '1 week',
      githubLink: '',
      herokuLink: '',
      tags: ['Javascript', 'AngularJS'],
      class: 'clock',
      state: 'clock'
    },
    {
      title: 'placeholderOne',
      img: '../../images/comingSoon.jpg',
      desc: '',
      githubLink: '',
      herokuLink: '',
      class: 'placeholderOne'
    },
    {
      title: 'placeholderTwo',
      img: '../../images/comingSoon.jpg',
      desc: '',
      githubLink: '',
      herokuLink: '',
      class: 'placeholderTwo'
    }
  ];


  function init() {
    console.log(controller);
  }

  init();
}

angular
 .module('PortfolioApp')
 .controller('PortfolioController', PortfolioController);
