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
const spiegel = document.getElementById('spiegel')
const spiegel_groot = document.getElementById('spiegel_groot')
const game_over = document.getElementById('game_over')
const try_again = document.querySelector('#game_over button')
//balkjes
const Hbar = document.querySelector('#H');
const Ebar = document.getElementById('E');
const Mbar = document.getElementById('M');
const Kbar = document.getElementById('K');
const money = document.getElementById('money');
//buttons kast
const monster = document.getElementById('monster');
const water = document.getElementById('water');
const kaas_eet = document.getElementById('kaas');

//variables
let haarkleur = ['groen','blauw','rood'];
let state_lamp = false;
let lamp = document.querySelector('#lamp_uit');
let gameover = false;
//balkjes
// let health = 100;
// let energy = 100;
// let mood = 100;
// let kaas = 100;

let geld = 1;

let stats = {
    health: 100,
    energy: 100,
    mood: 100,
    kaas: 100,
}



//functions

function give_warning(text) {
    warning.textContent = text;
}


//openen en sluiten van kamers (kast, karel & spiegel)
function open(element){
    if(state_lamp){
        home.style.display = 'none';
        element.style.display = 'block';
        terug.style.display = 'block';
    }
}

function close(element){
    element.style.display = 'none';
    terug.style.display = 'none';
    home.style.display = 'block';
}

//versie 1 van openen en sluiten van kamers
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

//versie 1 van de stats omlaag doen
// function H_omlaag() {
//    if(health >= 0) {
//         health -= 1;
//     }
// }

// function E_omlaag() {
//     if(energy >= 0){
//         energy -= 1;
//     }
// }

// function M_omlaag() {
//     if(mood > 0){
//         mood -= 1;
//     }
// }

// function K_omlaag() {
//     if(kaas >= 0){
//         kaas -= 1;
//     }
// }

//functie voor de stats omlaag doen   (met hulp van marco voor hoe object werkt)
function omlaag(key) {
    if (stats[key] > 0) {
        stats[key] -= 1;
    }
}


//functies voor het geld hoger en lager maken
function geld_up() {
    geld ++;
}

function geld_down(kost) {
    geld = geld - kost;
}
    

//eten en drinken
function eet_kaas() {
   if(geld >= 4) {
        stats.kaas = stats.kaas + 5;
        stats.mood = stats.mood + 5;
        geld_down(4);
        close(kast);
   }
}

function drink_water() {
    if(geld >= 2) {
        stats.health = stats.health + 2;
        geld_down(2);
        close(kast);
    }
}

function drink_monster() {
    if(geld >= 5) {
        stats.health = stats.health - 4;
        stats.energy = stats.energy + 5;
        stats.mood = stats.mood + 3;
        geld_down(5);
        close(kast);
    }
}

function dood() {
    game_over.style.display = 'block'
}

// update de tekst van de meters
function update() {
    // if(stats.health > 100) {
    //     stats.health = 100;
    // }
    // if(stats.energy > 100) {
    //     stats.energy = 100;
    // }
    // if(stats.mood > 100) {
    //     stats.mood = 100;
    // }
    // if(stats.kaas > 100) {
    //     stats.kaas = 100;
    // }
    if(gameover == false) {
        Hbar.textContent = 'health ' + stats.health + '%';
        Ebar.textContent = 'energy ' + stats.energy + '%';
        Mbar.textContent = 'mood ' + stats.mood + '%';
        Kbar.textContent = 'KAAS ' + stats.kaas + '%';
        money.textContent = 'money €' + geld;
    }

    Object.keys(stats).forEach(key => {
        if(!stats[key]) {
            dood();
            gameover = true
        }
        
        if(stats[key] > 100) {
            stats[key] = 100;
        }
    });
}

//other stuff


//eten & drinken
kaas_eet.addEventListener('click', eet_kaas);
water.addEventListener('click', drink_water);
monster.addEventListener('click', drink_monster);

//lamp aan en uit
lamp_knop.addEventListener('click', lamp_aanuit);


//kast open en dicht doen
terug.addEventListener('click', () => {close(kast)});
kast_klein.addEventListener('click', () => {open(kast)});

//karel open en dicht doen
terug.addEventListener('click', () => {close(karel_groot)});
karel.addEventListener('click', () => {open(karel_groot)});

//spiegel open en dicht 
terug.addEventListener('click', () => {close(spiegel_groot)});
spiegel.addEventListener('click', () => {open(spiegel_groot)});

//bars
setInterval(() => {omlaag('health')}, 3000);
setInterval(() => {omlaag('energy')}, 1500);
setInterval(() => {omlaag('mood')}, 1000);
setInterval(() => {omlaag('kaas')}, 2500);

setInterval(geld_up, 2000);

setInterval(update, 500);

//console log
console.log('hallo');