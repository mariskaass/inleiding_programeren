//cCONSTANTEN
const warning = document.querySelector('#warning');
const button = document.querySelector('button');
const terug = document.getElementById('terug');
//home
const home = document.getElementById('home');
const karel = document.querySelector('#karel');
const lamp_knop = document.querySelector('#lamp_knop');
const kast_klein = document.querySelector('#kast');
const spiegel = document.getElementById('spiegel');
//karel
const karel_groot = document.getElementById('karel_groot');
const karel_knop = document.getElementById('knop_karel');
const karel_aan = document.getElementsByClassName('karel_aan');
const muziek1 = document.getElementById('song1');
const muziek2 = document.getElementById('song2');
const muziek3 = document.getElementById('song3');
//kast
const kast = document.getElementById('kast_groot');
const monster = document.getElementById('monster');
const water = document.getElementById('water');
const kaas_eet = document.getElementById('kaas');

const spiegel_groot = document.getElementById('spiegel_groot')
//game over 
const game_over = document.getElementById('game_over')
const try_again = document.querySelector('#try_again')
//stats tekst
const Hbar = document.querySelector('#H');
const Ebar = document.getElementById('E');
const Mbar = document.getElementById('M');
const Kbar = document.getElementById('K');
const money = document.getElementById('money');

//muziekjes

const  song1 = new Audio('/sound/doom.mp3');
const  song2 = new Audio('/sound/doom2.mp3');
const  song3 = new Audio('/sound/dr_mario.mp3');
const  aan = new Audio('/sound/JBL.mp3');
const  uit = new Audio('/sound/uit.mp3');

//VARIABELEN
let haarkleur = ['groen','blauw','rood'];
let state_lamp = false;
let lamp = document.querySelector('#lamp_uit');
let gameover = false;
let state_karel = false;


let geld = 1;

//object voor waardes van health, energy, mood, kaas (hulp gehad van marco)
let stats = {
    health: 5,
    energy: 100,
    mood: 100,
    kaas: 100,
}



//FUNCTIONS

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

//functie voor de stats omlaag doen   (met hulp van marco voor hoe object werkt)
function omlaag(key) {
    if (stats[key] > 0) {
        stats[key] --;
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

//karel aan & uit
function karel_aanuit() {
    if(state_karel === false) {
        for(let i = 0; i < karel_aan.length; i++) {
            karel_aan[i].style.display = 'block';
        }
        state_karel = true;
        aan.play();
    }else {
        for(let i = 0; i < karel_aan.length; i++) {
            karel_aan[i].style.display = 'none';
        }
        song1.pause();
        song2.pause();
        song3.pause();
        uit.play();
        state_karel = false;
    }
}

//game over
function dood(cause) {
    if(gameover === false) {
        console.log('dood');
        game_over.style.display = 'block'
        gameover = true
        //(hulp van marco voor switch)
        switch(cause){ 
            case 'health':
                Hbar.classList.add('rood');
                break;
            case 'energy':
                Ebar.classList.add('rood');
                break;
            case 'mood':
                Mbar.classList.add('rood');
                break;
            case 'kaas':
                Kbar.classList.add('rood');
                break;
        }
    }
}

// update de tekst van de meters & kijk of alles boven de 0 is
function update() {
    if(gameover === false) {
        Hbar.textContent = 'health ' + stats.health + '%';
        Ebar.textContent = 'energy ' + stats.energy + '%';
        Mbar.textContent = 'mood ' + stats.mood + '%';
        Kbar.textContent = 'KAAS ' + stats.kaas + '%';
        money.textContent = 'money €' + geld;
    }

    Object.keys(stats).forEach((key) => {
        if(!stats[key]) {
            dood(key);
        }
    
        if(stats[key] > 100) {
            stats[key] = 100;
        }
    });
}

function speel_opnieuw() {
    game_over.style.display = 'none';
    Object.keys(stats).forEach((key) =>
        stats[key] = 100
    );
    geld = 0;
    gameover = false;
    Hbar.classList.remove('rood');
    Ebar.classList.remove('rood');
    Mbar.classList.remove('rood');
    Kbar.classList.remove('rood');
    if(state_lamp == true) {
        lamp_aanuit();
    }
    close(karel_groot);
    close(spiegel_groot);
    close(kast);

}

function music1() {
    song1.play();
    song2.pause();
    song3.pause();
}

function music2() {
    song1.pause();
    song2.play();
    song3.pause();
}

function music3() {
    song1.pause();
    song2.pause();
    song3.play();
}





//other stuff

// button.addEventListener('click', muziekje)

//bars
// setInterval(() => {omlaag('health')}, 2000);
// setInterval(() => {omlaag('energy')}, 2000);
// setInterval(() => {omlaag('mood')}, 2000);
// setInterval(() => {omlaag('kaas')}, 2000);


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
//karel aan en uit 
karel_knop.addEventListener('click', karel_aanuit);
muziek1.addEventListener('click', music1);
muziek2.addEventListener('click', music2);
muziek3.addEventListener('click', music3);

//spiegel open en dicht 
terug.addEventListener('click', () => {close(spiegel_groot)});
spiegel.addEventListener('click', () => {open(spiegel_groot)});

//game opnieuw beginnen
try_again.addEventListener('click', speel_opnieuw);



setInterval(geld_up, 2000);

setInterval(update, 500);

//console log
console.log('hallo');