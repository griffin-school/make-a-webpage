$(document).ready(function() {
var $logo = $("#logo");
var $logoLabel = $("#logo-label");
var $profiles = $("#profiles");
var $slideShow = $("#slide-show");


var slides = document.getElementById("slide-show").getElementsByClassName('slide-wrapper');


var startShow = function(callback) {
    var students = {
      'zane': { fullname: "Zane" },
      'jake': { fullname: "Jake" },
      'lucas': { fullname: "Lucas" },
      'sam': { fullname: "Sam" },
      'cho': { fullname: "Cho" },
      'christine': { fullname: "Christine" },
      'david': { fullname: "David" },
      'matt': { fullname: "Matt" },
      'abiraam': { fullname: "Abiraam" },
      'liam': { fullname: "Liam" },
      'sameer': { fullname: "Sameer" },
      'daniel': { fullname: "Daniel" },
      'peyton': { fullname: "Peyton" }
    };


    var current = 0;
    var author = '';

    var showTimer = setInterval(function() {
      slides[current].style.opacity = 0;
      if ( current >= slides.length -1) {
        current = 0;
        slides[current].style.opacity = 1;
        clearInterval(showTimer);
        return callback();
      } else {
        current++; 
      }
      var currentAuthor = $(slides[current]).data('author');
      if ( currentAuthor != author ) {
        author = currentAuthor;
        $logo.attr("src", 'images/' + author + '.jpg')
        $logoLabel.text('by ' + students[author].fullname);
      }
      slides[current].style.opacity = 1;
    }, 10000);
};

var startProfiles = function() {
    var profiles = document.getElementById("profiles").getElementsByClassName('profile');

    var length = profiles.length-1;
    var currentProfiles = [Math.floor(Math.random()*length), Math.floor(Math.random()*length), Math.floor(Math.random()*length)] 
    var newProfiles = [Math.floor(Math.random()*length), Math.floor(Math.random()*length), Math.floor(Math.random()*length)] 
    var profilesTimer = setInterval(function() {
          profiles[currentProfiles[0]].style.opacity = 0.6;
          profiles[currentProfiles[1]].style.opacity = 0.6;
          profiles[currentProfiles[2]].style.opacity = 0.6;

          profiles[newProfiles[0]].style.opacity = 1;
          profiles[newProfiles[1]].style.opacity = 1; 
          profiles[newProfiles[2]].style.opacity = 1; 

          currentProfiles[0] = newProfiles[0];
          currentProfiles[1] = newProfiles[1];
          currentProfiles[2] = newProfiles[2];

          newProfiles = [Math.floor(Math.random()*length), Math.floor(Math.random()*length), Math.floor(Math.random()*length)] 
        }, 650);
    return profilesTimer;
};

var runProfiles = function() {
  $logo.attr("src", 'https://griffinschool.org/wp-content/uploads/2013/12/GriffinSchool-logo.jpg')
  $logoLabel.text('at Griffin School');
  $slideShow.hide(400);
  $profiles.show();
  return startProfiles();
}

var go = function() {

  var timer =  runProfiles();
  setTimeout(function() {
    clearInterval(timer);
    runSlideShow(go);
  }, 200);

}

var runSlideShow = function(callback) {
    $profiles.slideUp(500);
    $slideShow.show();
    startShow(callback);
}
go();

});