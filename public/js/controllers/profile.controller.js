function ProfileController() {
  var controller = this;

  controller.skills = [
    {
      title: 'Agile',
      img: '../../images/skills/agile.png'
    },
    {
      title: 'Angular',
      img: '../../images/skills/angularjs.png'
    },
    {
      title: 'Bootstrap',
      img: '../../images/skills/bootstrap.png'
    },
    {
      title: 'CSS3',
      img: '../../images/skills/css3.png'
    },
    {
      title: 'Git',
      img: '../../images/skills/github.png'
    },
    {
      title: 'HTML5',
      img: '../../images/skills/html.png'
    },
    {
      title: 'Karma',
      img: '../../images/skills/karma.png'
    },
    {
      title: 'Javascript',
      img: '../../images/skills/JS.png'
    },
    {
      title: 'SASS',
      img: '../../images/skills/sass.png'
    },
    {
      title: 'SQL',
      img: '../../images/skills/SQL.png'
    },
    {
      title: 'Mongo',
      img: '../../images/skills/mongo.png'
    },
    {
      title: 'Node.js',
      img: '../../images/skills/nodeJS.png'
    }
  ];



  function init() {

  }

  init();
}

angular
  .module('PortfolioApp')
  .controller('ProfileController', ProfileController);
