//cCONSTANTEN
const terug = document.getElementById('terug');
//home
const home = document.getElementById('home');
const karel = document.querySelector('#karel');
const lamp_knop = document.querySelector('#lamp_knop');
const kast_klein = document.querySelector('#kast');
const spiegel = document.getElementById('spiegel');
const lamp = document.querySelector('#lamp_uit');
const me = document.getElementById('me')
const music_small = document.getElementById('music_small')
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

const  song1 = new Audio('sound/doom.mp3');
const  song2 = new Audio('sound/doom2.mp3');
const  song3 = new Audio('sound/dr_mario.mp3');
const  aan = new Audio('sound/JBL.mp3');
const  uit = new Audio('sound/uit.mp3');

//HAARKLEUREN
//spiegel
const haarverf = document.getElementById('verf_knop');
const haar = document.getElementById('haar')
//animatie voor monster drinken
const m_groen = ['foto/green.png', 'foto/g_monster1.png', 'foto/g_monster2.png', 'foto/g_monster3.png', 'foto/g_monster4.png', 'foto/g_monster3.png', 'foto/g_monster4.png', 'foto/green.png' ]
const m_blauw = ['foto/blue.png', 'foto/b_monster1.png', 'foto/b_monster2.png', 'foto/b_monster3.png', 'foto/b_monster4.png', 'foto/b_monster3.png', 'foto/b_monster4.png', 'foto/blue.png' ]
const m_roze = ['foto/pink.png', 'foto/p_monster1.png', 'foto/p_monster2.png', 'foto/p_monster3.png', 'foto/p_monster4.png', 'foto/p_monster3.png', 'foto/p_monster4.png', 'foto/pink.png' ]
const m_rood = ['foto/red.png', 'foto/r_monster1.png', 'foto/r_monster2.png', 'foto/r_monster3.png', 'foto/r_monster4.png', 'foto/r_monster3.png', 'foto/r_monster4.png', 'foto/red.png' ]

//animatie voor water drinken
const w_groen = ['foto/green.png', 'foto/g_water1.png', 'foto/g_water2.png', 'foto/g_water3.png', 'foto/g_water4.png', 'foto/g_water3.png', 'foto/g_water4.png', 'foto/green.png']
const w_blauw = ['foto/blue.png', 'foto/b_water1.png', 'foto/b_water2.png', 'foto/b_water3.png', 'foto/b_water4.png', 'foto/b_water3.png', 'foto/b_water4.png', 'foto/blue.png']
const w_roze = ['foto/pink.png', 'foto/p_water1.png', 'foto/p_water2.png', 'foto/p_water3.png', 'foto/p_water4.png', 'foto/p_water3.png', 'foto/p_water4.png', 'foto/pink.png']
const w_rood = ['foto/red.png', 'foto/r_water1.png', 'foto/r_water2.png', 'foto/r_water3.png', 'foto/r_water4.png', 'foto/r_water3.png', 'foto/r_water4.png', 'foto/red.png']

//animatoe voor kaas eten
const k_groen = ['foto/green.png', 'foto/g_kaas1.png', 'foto/g_kaas2.png', 'foto/g_kaas3.png', 'foto/g_kaas4.png', 'foto/g_kaas3.png', 'foto/g_kaas4.png', 'foto/green.png']
const k_blauw = ['foto/blue.png', 'foto/b_kaas1.png', 'foto/b_kaas2.png', 'foto/b_kaas3.png', 'foto/b_kaas4.png', 'foto/b_kaas3.png', 'foto/b_kaas4.png', 'foto/blue.png']
const k_roze = ['foto/pink.png', 'foto/p_kaas1.png', 'foto/p_kaas2.png', 'foto/p_kaas3.png', 'foto/p_kaas4.png', 'foto/p_kaas3.png', 'foto/p_kaas4.png', 'foto/pink.png']
const k_rood = ['foto/red.png', 'foto/r_kaas1.png', 'foto/r_kaas2.png', 'foto/r_kaas3.png', 'foto/r_kaas4.png', 'foto/r_kaas3.png', 'foto/r_kaas4.png', 'foto/red.png']


//VARIABELEN
//animaties & plaatjes veranderen
let monster_animatie = m_groen;
let water_animatie = w_groen;
let kaas_animatie = k_groen;
let ik = 'foto/green.png'
let slaap = 'foto/g_sleep.png'
//states
let state_lamp = false;
let gameover = false;
let state_karel = false;
//geld
let geld = 100;

//object voor waardes van health, energy, mood, kaas (hulp gehad van marco)
let stats = {
    health: 100,
    energy: 100,
    mood: 100,
    kaas: 100,
}

//FUNCTIONS
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

//lamp aan en uit zetten
function lamp_aanuit() {
    if (state_lamp == true && state_karel === false) {
        lamp.src = 'foto/lamp_uit.png';
        state_lamp = false;
        me.src = slaap
    }else {
        lamp.src = 'foto/lamp_aan.png';
        state_lamp = true;
        me.src = ik
    }
}

//functie voor de stats omlaag doen   (met hulp van marco voor hoe object werkt)
function omlaag(key) {
    if (stats[key] > 0) {
        stats[key] --;
    }
}

//energie omhoog als lamp uit is
function slapen() {
    if(state_lamp == false && stats.energy <= 98) {
        stats.energy += 2
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
        for(let i = 0; i < kaas_animatie.length; i++) {
            setTimeout( () => {
                me.src = kaas_animatie[i]
            }, i * 400)
        }
   }
}

function drink_water() {
    if(geld >= 2) {
        stats.health = stats.health + 5;
        geld_down(2);
        close(kast);
        for(let i = 0; i < water_animatie.length; i++) {
            setTimeout( () => {
                me.src = water_animatie[i]
            }, i * 400)
        }
    }   
}

function drink_monster() {
    if(geld >= 5 && stats.health >= 4) {
        stats.health = stats.health - 4;
        stats.energy = stats.energy + 5;
        stats.mood = stats.mood + 3;
        geld_down(5);
        close(kast);
        for(let i = 0; i < monster_animatie.length; i++) {
            setTimeout( () => {
                me.src = monster_animatie[i]
            }, i * 400)
        }
    }
}

//karel aan & uit
function karel_aanuit() {
    if(state_karel === false) {
        for(let i = 0; i < karel_aan.length; i++) {
            karel_aan[i].style.display = 'block';
        }
        state_karel = true;
        music_small.style.display = 'block'
        aan.play();
    }else {
        for(let i = 0; i < karel_aan.length; i++) {
            karel_aan[i].style.display = 'none';
        }
        song1.pause();
        song2.pause();
        song3.pause();
        uit.play();
        music_small.style.display = 'none'
        state_karel = false;
    }
}
//muziek aan en uit zetten
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


//random haarkleur bepalen en goede plaatjes selecteren
function bepaal_kleur() {
    if(geld >= 20) {
        const getal = Math.floor(Math.random() * 3);

        if(getal == 0 && monster_animatie != m_rood) {
            ik = 'foto/red.png'
            monster_animatie = m_rood;
            water_animatie = w_rood;
            kaas_animatie = k_rood;
            slaap = 'foto/r_sleep.png'
            haar.src = 'foto/haar_rood.png';
        }else if(getal == 1 && monster_animatie != m_roze) {
            ik = 'foto/pink.png'
            monster_animatie = m_roze;
            water_animatie = w_roze;
            kaas_animatie = k_roze;
            slaap = 'foto/p_sleep.png'
            haar.src = 'foto/haar_roze.png';
        }else if(getal == 2 && monster_animatie != m_blauw) {
            ik = 'foto/blue.png'
            monster_animatie = m_blauw;
            water_animatie = w_blauw;
            kaas_animatie = k_blauw;
            slaap = 'foto/b_sleep.png'
            haar.src = 'foto/haar_blauw.png';
        }else {
            ik = 'foto/green.png';
            monster_animatie = m_groen;
            water_animatie = w_groen;
            kaas_animatie = k_groen
            slaap = 'foto/g_sleep.png'
            haar.src = 'foto/haar_groen.png';
        }
        geld -= 20;
        me.src = ik
        close(spiegel_groot);
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
        if(stats[key] > 100) {
            stats[key] = 100;
        }

        if(stats[key] <= 0) {
            dood(key);
        }  
    }); 
    slapen()
}

//game over
function dood(cause) {
    if(gameover === false) {
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
//speel opnieuw
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

//stats omlaag doen 
setInterval(() => {omlaag('health')}, 2000);
setInterval(() => {omlaag('energy')}, 1000);
setInterval(() => {omlaag('mood')}, 2000);
setInterval(() => {omlaag('kaas')}, 1500);
//geld omhoog
setInterval(geld_up, 2000);
//tekst enzo updaten/ checken
setInterval(update, 500);

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
haarverf.addEventListener('click', bepaal_kleur)

//game opnieuw beginnen
try_again.addEventListener('click', speel_opnieuw);