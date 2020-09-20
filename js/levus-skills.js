{
    // 20-09-2020
    const skills = document.querySelectorAll('.levus-skills');
    // height window
    const start = document.documentElement.clientHeight;

    window.addEventListener('scroll', () => {
        const change = skills[0].getBoundingClientRect().top;
        const sum = start - change + 10;
        // check
        if (sum === 0 || sum === 1 || sum === 2 || sum === 3 || sum === 4 || sum === 5 || sum === 6 || sum === 7) {
            skills.forEach(skill => delay(skill, skill.dataset.result, skill.dataset.speed));
        }
    });
    
    function delay(selector, num = 2, speed = 1){
        for (let index = 0; index <= num; index++) {
            setTimeout( () => {
                selector.innerHTML = index;            
            }, index * speed * 30);
        }
    }
}