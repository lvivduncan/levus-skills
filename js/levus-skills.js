{
    // 19-09-2020
    const skills = document.querySelectorAll('.levus-skills');

    skills.forEach(skill => delay(skill, skill.dataset.result, skill.dataset.speed));

    function delay(selector, num = 2, speed = 1){
        for (let index = 0; index <= num; index++) {
            setTimeout( () => {
                selector.innerHTML = index;            
            }, index * speed * 30);
        }
    }
}