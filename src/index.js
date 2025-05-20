import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function clearContent(){
    const container = document.getElementById("content");
    container.innerHTML=""
}

function setupTabs(){

    const home = document.getElementById("home-btn").addEventListener('click', () =>{
        clearContent()
        loadHome();
    });

    const menu = document.getElementById("menu-btn").addEventListener('click', () =>{
        clearContent()
        loadMenu();
    });

    const contact = document.getElementById("contact-btn").addEventListener('click', () =>{
        clearContent()
        loadContact();
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    loadHome();
    setupTabs();
})