window.addEventListener('DOMContentLoaded', () => {

    const API = () => {
    const ghibliAPI = `https://ghibliapi.herokuapp.com/films`
    fetch(ghibliAPI)
    .then(response => response.json())
    .then(data => console.log(data))
    }

})

