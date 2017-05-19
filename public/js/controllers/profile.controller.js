function ProfileController($interval) {
  var controller = this;

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
