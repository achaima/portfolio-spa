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




  controller.showProfile = function() {
    controller.isProfileVisible = true;
    controller.isSkillsVisible = false;
    controller.isEducationVisible = false;
    controller.isProfessionalVisible = false;
  };
  controller.showSkills = function() {
    controller.isSkillsVisible = true;
    controller.isProfileVisible = false;
    controller.isEducationVisible = false;
    controller.isProfessionalVisible = false;
  };
  controller.showEducation = function() {
    controller.isEducationVisible = true;
    controller.isProfileVisible = false;
    controller.isSkillsVisible = false;
    controller.isProfessionalVisible = false;
  };
  controller.showProfessional = function() {
    controller.isProfessionalVisible = true;
    controller.isProfileVisible = false;
    controller.isSkillsVisible = false;
    controller.isEducationVisible = false;
  };

  controller.setBackground = function() {
    if(controller.isProfileVisible) return 'profile-background';
    if(controller.isSkillsVisible) return 'skills-background';
    if(controller.isEducationVisible) return 'education-background';
    if(controller.isProfessionalVisible) return 'professional-background';
  };

  function init() {
    controller.isProfileVisible = true;
  }

  init();
}

angular
  .module('PortfolioApp')
  .controller('ProfileController', ProfileController);
