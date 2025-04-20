$(function () {
//猫の動き
gsap.fromTo(
    //ターゲット
    '.move-in-cat',
    //初めの状態
    {
        opacity: 1,
        x: 0,
        y: -150
    }
    ,
    //最後の状態
    {
        opacity: 0,
        x:-50,
        y:30,
        scrollTrigger:{
            trigger: '.move-in-cat',
            start: 'bottom center',
        }
    }

);


 // 2匹目（下に滑る猫）
gsap.fromTo(
    '.move-out-cat', 
    {
    opacity: 0,
    x: 0,
    y: -30,
    },
    {
    opacity: 1,
    x: -200,
    y: 10,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: '.move-out-cat', 
        start: 'top center',
    }
    }
);

});