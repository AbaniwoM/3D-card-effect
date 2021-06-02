//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Item
const sneaker = document.querySelector(".foot");
 
//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", e => {
    card.style.transition = "none";
    //popout
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});