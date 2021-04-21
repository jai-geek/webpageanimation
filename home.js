const page= document.querySelector(".page");

const line= document.querySelector(".line");

const logo= document.querySelector("#logo");

const t1= new TimelineMax();
t1.fromTo(page, 1,{ height: "0%"}, {height: "80%" , ease: Power2.easeInOut});
t1.fromTo(page, 1.5,{width: '100%'}, {width: '80%',  ease: Power2.easeInOut});
t1.fromTo(anime,1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut});
t1.fromTo(logo, 0.8, {opacity: 0, x:30} , {opacity: 1, x:0}, "-=0.8")