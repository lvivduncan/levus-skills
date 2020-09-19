"use strict";

{
    var delay = function delay(selector) {
        var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
        var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        var _loop = function _loop(index) {
            setTimeout(function() {
                selector.innerHTML = index;
            }, index * speed * 30);
        };

        for (var index = 0; index <= num; index++) {
            _loop(index);
        }
    };

    var skills = document.querySelectorAll('.levus-skills');
    skills.forEach(function(skill) {
        return delay(skill, skill.dataset.result, skill.dataset.speed);
    });
}