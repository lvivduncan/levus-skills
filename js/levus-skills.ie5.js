// 20-09-2020
"use strict";

{
  var delay = function delay(selector) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var _loop = function _loop(index) {
      setTimeout(function () {
        selector.innerHTML = index;
      }, index * speed * 30);
    };

    for (var index = 0; index <= num; index++) {
      _loop(index);
    }
  };

  var skills = document.querySelectorAll('.levus-skills');
  var start = document.documentElement.clientHeight;
  window.addEventListener('scroll', function () {
    var change = Math.floor(skills[0].getBoundingClientRect().top);
    var sum = Math.floor(start - change + 10);

    if (sum === 0 || sum === 1 || sum === 2 || sum === 3 || sum === 4 || sum === 5 || sum === 6 || sum === 7) {
      skills.forEach(function (skill) {
        return delay(skill, skill.dataset.result, skill.dataset.speed);
      });
    }
  });
}