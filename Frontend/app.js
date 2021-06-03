import { parseRequestUrl } from './utils.js';
import HomePage from './view/HomePage.js';
import ProductPage from './view/ProductPage.js';
import ErrorPage from './view/ErrorPage.js';

const routes = {
    "/": HomePage,
    "/product/:id": ProductPage,
};

const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `/${request.resource}`: '/')+ 
    (request.id ? '/:id' : '')+ 
    (request.verb ? `/${request.verb}`: '');
    const view = routes[parseUrl] ? routes[parseUrl]: ErrorPage; 

    const main = document.getElementById("main");
    main.innerHTML = view.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);