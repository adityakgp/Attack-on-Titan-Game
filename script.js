
score = 0;
cross = true;

audiogo = new Audio('Attack On Titan S3.mp3')
audio = new Audio('shinzou_wo_sasageyo-[AudioTrimmer.com].mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function(e){
    console.log("key code : ", e.keyCode)
    if(e.keyCode==38){
        hero = document.getElementById('hero');
        hero.classList.add('animateHero');
        setTimeout(() => {
            hero.classList.remove('animateHero');
        }, 700);
    }
    if(e.keyCode==39){
        hero = document.getElementById('hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'))
        hero.style.left = heroX+130+"px"
    }
    if(e.keyCode==37){
        hero = document.getElementById('hero');
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'))
        hero.style.left = (heroX-130)+"px"
    }
}

setInterval(() => {
    hero = document.getElementById('hero')
    gameOver = document.getElementById('gameOver')
    obstacle = document.getElementById('obstacle')
    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue('left'))
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue('top'))
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))
    offsetX = Math.abs(hx-ox);
    offsetY = Math.abs(hy-oy);
    if(offsetX < 100 && offsetY < 52){
        gameOver.style.visibility = "visible"
        obstacle.classList.remove('animateObstacle')
        audio.pause();
        audiogo.play();
    }
    else if(offsetX < 75 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newdur=anidur-0.1;
            obstacle.style.animationDuration = newdur + 's';
        }, 800);
        
    }
}, 10);

function updateScore(score){
    scoreCount.innerHTML = "Your Score : "+score;
}