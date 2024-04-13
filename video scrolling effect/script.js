function homepageAnimation(){
    gsap.set(".slidesm", { scale: 5});

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            pin:true,
            scrub: 1,
            start: "top top",
            end: "bottom top"
        },
    });

    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: "power2.ease",
        duration: 4
    }, 'a');
    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')
    .to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')
    tl.to(".lft", {
        xPercent:-10,
        stagger:.03,
        ease: Power4
    },'b');

    tl.to(".rgt", {
        xPercent:10,
        stagger:.03,
        ease: Power4
    },'b');
}

homepageAnimation();