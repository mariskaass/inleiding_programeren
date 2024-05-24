//constants
const warning = document.querySelector('#warning');
const button = document.querySelector('button');
const karel = document.querySelector('#karel');
const karel_groot = document.getElementById('karel_groot');
const lamp_knop = document.querySelector('#lamp_knop');
const home = document.getElementById('home');
const kast = document.getElementById('kast_groot');
const kast_klein = document.querySelector('#kast');
const terug = document.getElementById('terug');
const ding = document.getElementById('terug_plaatje')
//balkjes
const Hbar = document.querySelector('#H');
const Ebar = document.getElementById('E');
const Mbar = document.getElementById('M');
const Kbar = document.getElementById('K');
const money = document.getElementById('money')

//variables
let haarkleur = ['groen','blauw','rood'];
let state_lamp = false;
let lamp = document.querySelector('#lamp_uit');
//balkjes
let health = 10;
let energy = 100;
let mood = 100;
let kaas = 100;
let geld = 0;


//functions

function give_warning(text) {
    warning.textContent = text;
}

//test
function open(element){
    if(state_lamp){
        home.style.display = 'none';
        element.style.display = 'block';
        ding.style.display = 'block';
    }
}


function close(element){
    element.style.display = 'none';
    ding.style.display = 'none';
    home.style.display = 'block';
}

//end test

// function kast_open() {
//     if(state_lamp){
//         home.style.display = 'none';
//         kast.style.display = 'block';
//     }
// }

// function kast_dicht() {
//     kast.style.display = 'none';
//     home.style.display = 'block'; 
// }

// function karel_open() {
//     if(state_lamp) {
//         home.style.display = 'none';
//         karel_groot.style.display = 'block';
//     }
// }

function lamp_aanuit() {
    if (state_lamp == true) {
        lamp.src = 'foto/lamp_uit.png';
        state_lamp = false;
    }else {
        lamp.src = 'foto/lamp_aan.png';
        state_lamp = true;
    }
}

function H_omlaag() {
   if(health >= 0) {
        Hbar.textContent = 'health ' + health + '%';
        health -= 1;
    }
}

function E_omlaag() {
    if(energy >= 0){
        Ebar.textContent = 'energy ' + energy + '%';
        energy -= 1;
    }
}

function M_omlaag() {
    if(mood >= 0){
        Mbar.textContent = 'mood ' + mood + '%';
        mood -= 1;
    }
}

function K_omlaag() {
    if(kaas >= 0){
        Kbar.textContent = 'KAAS ' + kaas + '%';
        kaas -= 1;
    }
}

function geld_up() {
    money.textContent = 'money €' + geld;
    geld ++
}

//other stuff

lamp_knop.addEventListener('click', lamp_aanuit);

//kast open en dicht doen
terug.addEventListener('click', () => {close(kast)});
kast_klein.addEventListener('click', () => {open(kast)});

//karel open en dicht doen
terug.addEventListener('click', () => {close(karel_groot)});
karel.addEventListener('click', () => {open(karel_groot)});

//bars
setInterval(H_omlaag, 1000);
setInterval(E_omlaag, 1000);
setInterval(M_omlaag, 1000);
setInterval(K_omlaag, 1000);

setInterval(geld_up, 1000);

//console log
console.log('hallo');