import HomePage from './view/HomePage.js';

// const routes = {
//     "/": HomePage,
//     "/products.:id": ProductPage,
// }

const router = () => {
    const main = document.getElementById("main");
    main.innerHTML = HomePage.render();
}

window.addEventListener("load", router);