//When the user scrolls down hide n. When the user scrolls up show n 
let previousScroll = window.pageYOffset;

function windowScroll() {
    let currentScroll = window.pageYOffset;
    if(previousScroll > currentScroll){
        document.getElementById("n").style.top = "0";
    } else {
        document.getElementById("n").style.top = "-50px";
    }
    previousScroll = currentScroll
}

windowScroll()



window.addEventListener('DOMContentLoaded', () => {
    const ghibliAPI = `https://ghibliapi.herokuapp.com/films`
    fetch(ghibliAPI)
    .then(response => response.json())
    .then(data => console.log(data))

})

