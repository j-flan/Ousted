//enemies

let bear = {name: "Bear", ability: "a", hp: 12, attackStyle: "swipes", minRange: 3, maxRange: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 50};
let goblins = {name: "Goblins", ability: "a", hp: 6, attackStyle: "attack", minRange: 1, maxRange: 5, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 8, toHit: 8, gold: 3, points:10 };
let elf = {name: "Elf", ability: "a", hp: 8, attackStyle: "attacks", minRange: 3, maxRange: 5, minHit: 6, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30};
let gutterBums = {name: "Gutter Bums", ability: "a", hp: 12, attackStyle: "attack", minRange: 1, maxRange: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 4, points: 25};
let bandit = {name: "Bandit", ability: "a", hp: 8, attackStyle: "attacks", minRange: 4, maxRange: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30};
let marauder = {name: "Marauder", ability: "a", hp: 10, attackStyle: "attacks", minRange: 5, maxRange: 8, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 7, toHit: 8, gold: 7, points: 40};
let wolves = {name: "Wolves", ability: "a", hp: 15, attackStyle: "attack", minRange: 2, maxRange: 7, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 30};
let vWolves = {name: "Vicious Wolves", ability: "a", hp: 20, attackStyle: "attack", minRange: 3, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 7, points: 40};
let wraith = {name: "Wraith", ability: "a", hp: 18, attackStyle: "attacks", minRange: 4, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 50};
let mudMan = {name: "Mud Man", ability: "a", hp: 14, attackStyle: "attacks", minRange: 3, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 8, gold: 5, points: 40};
let poo = {name: "Poo", ability: "a", hp: 20, attackStyle: "lunges", minRange: 3, maxRange: 9, minHit: 6, maxHit: 11, minFlee: 6, maxFlee: 6, toHit: 8, gold: 8, points: 70};
let leech = {name: "Leech", ability: "v", hp: 14, attackStyle: "bites", minRange: 3, maxRange: 8, minHit: 4, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 35};
let mLeech = {name: "Massive Leech", ability: "v", hp: 20, attackStyle: "bites", minRange: 4, maxRange: 9, minHit: 4, maxHit:12 , minFlee: 4, maxFlee: 8, toHit: 8, gold: 10, points: 80};
let rWraith = {name: "Rotten Wraith", ability: "a", hp: 24, attackStyle: "swipes", minRange: 4, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 80};
let thief = {name: "Thief", ability: "a", hp: 15, attackStyle: "attacks", minRange: 4, maxRange: 6, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 40};
let thrall = {name: "Thrall", ability: "a", hp: 20, attackStyle: "lunges", minRange: 3, maxRange: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 8, toHit: 8, gold: 12, points: 60};
let wyvren = {name: "Wyvren", ability: "a", hp: 25, attackStyle: "claws", minRange: 5, maxRange: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 4, toHit: 8, gold: 11, points: 100};
let fSprite = {name: "Fire Sprite", ability: "a", hp: 30, attackStyle: "throws fireball", minRange: 5, maxRange: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 125};
let mimic = {name: "Mimic", ability: "a", hp: 35, attackStyle: "chomps", minRange: 5, maxRange: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let mTroll = {name: "Mountain Troll", ability: "a", hp: 50, attackStyle: "clubs you", minRange: 6, maxRange: 8, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 8, gold: 20, points: 140};
let chaosEl = {name: "Chaos Elemental", ability: "a", hp: 60, attackStyle: "burns", minRange: 7, maxRange: 8, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 8, toHit:10 , gold: 28, points: 250};
let bat = {name: "Vampire Bat", ability: "v", hp: 30, attackStyle: "bites", minRange: 5, maxRange: 5, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 13, points: 120};
let fern = {name: "Fern Feind", ability: "a", hp: 30, attackStyle: "whips", minRange: 5, maxRange: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit:9 , gold: 15, points: 125};
let zombie = {name: "Zombie", ability: "a", hp: 35, attackStyle: "claws", minRange: 6, maxRange: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let panther = {name: "Panther", ability: "a", hp: 40, attackStyle: "claws", minRange: 6, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 9, gold: 20, points: 140};
let viper = {name: "Viper", ability: "p", hp: 40, attackStyle: "strikes", minRange: 6, maxRange: 7, minHit: 5, maxHit: 11, minFlee: 6, maxFlee: 11, toHit: 9, gold: 15, points: 160};
let malboro = {name: "Malboro", ability: "p", hp: 35, attackStyle: "swats", minRange: 7, maxRange: 6, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150};
let litchling = {name: "Litchling", ability: "v", hp: 35, attackStyle: "claws", minRange: 4, maxRange: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 20, points: 175};
let crows = {name: "Murder Crows", ability: "a", hp: 50, attackStyle: "dive bomb", minRange: 5, maxRange: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150};
let banshee = {name: "Banshee", ability: "a", hp: 55, attackStyle: "claws", minRange: 5, maxRange: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140};
let aElement = {name: "Air Elemental", ability: "a", hp: 45, attackStyle: "gusts", minRange: 7, maxRange: 5, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let scorpion = {name: "Crystal Scorpion", ability: "p", hp: 35, attackStyle: "stings", minRange: 5, maxRange: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 17, points: 155};
let phantom = {name: "Desert Phantom", ability: "a", hp: 40, attackStyle: "Mind Flays", minRange: 6, maxRange: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let wisp = {name: "Will-o'-the-wisp", ability: "v", hp: 40, attackStyle: "bludgeons", minRange: 5, maxRange: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140};
let taranTroll = {name: "Taran-Troll", ability: "a", hp: 60, attackStyle: "lunges", minRange: 6, maxRange: 7, minHit: 4, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175};
let ants = {name: "Komodo Ants", ability: "p", hp: 40, attackStyle: "sting", minRange: 6, maxRange: 5, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 155};
let doppleganger = {name: "Doppleganger", ability: "v", hp: 40, attackStyle: "strikes", minRange: 6, maxRange: 6, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 150};
let miniBears = {name: "Minibears", ability: "a", hp: 50, attackStyle: "bite", minRange: 5, maxRange: 8, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175};
let witch = {name: "Hag Witch", ability: "s", hp: 50, attackStyle: "strikes", minRange: 6, maxRange: 7, minHit: 6, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 10, gold: 25, points: 220};
let mush = {name: "Mush Man", ability: "p", hp: 50, attackStyle: "strikes", minRange: 6, maxRange: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 10, gold: 25, points: 200};
let centaur = {name: "Centaur", ability: "a", hp: 60, attackStyle: "attacks", minRange: 6, maxRange: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 9, toHit: 10, gold: 30, points: 250};
let drunk = {name: "Drunkass", ability: "a", hp: 25, attackStyle: "swings", minRange: 5, maxRange: 8, minHit: 3, maxHit: 11, minFlee: 3, maxFlee: 8, toHit: 8, gold: 10, points: 80};
let rat = {name: "Sewer Rat", ability: "a", hp: 25, attackStyle: "bites", minRange: 5, maxRange: 6, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 9, gold: 15, points: 250};
let cultist = {name: "Cultist", ability: "v", hp: 20, attackStyle: "stabs wildly", minRange: 5, maxRange: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 8, gold: 12, points: 110};
let scarabs = {name: "Scarabs", ability: "s", hp: 50, attackStyle: "sting", minRange: 6, maxRange: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 10, gold: 22, points: 165};
let pViper = {name: "Pit Viper", ability: "p", hp: 55, attackStyle: "strikes", minRange: 6, maxRange: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 25, points: 200};
let spectre = {name: "Spectre", ability: "a", hp: 60, attackStyle: "attacks", minRange: 6, maxRange: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 18, points: 220};
let chimera = {name: "Chimera", ability: "p", hp: 65, attackStyle: "attacks", minRange: 5, maxRange: 8, minHit: 5, maxHit: 13, minFlee: 5, maxFlee: 7, toHit: 10, gold: 24, points: 220};
let golem = {name: "Stone Golem", ability: "a", hp: 80, attackStyle: "swings", minRange: 7, maxRange: 9, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 10, gold: 30, points: 240};
let omegaTroll = {name: "Omega Troll", ability: "a", hp: 80, attackStyle: "clubs", minRange: 7, maxRange: 10, minHit: 4, maxHit: 13, minFlee: 6, maxFlee: 6, toHit: 10, gold: 40, points: 275};
let sandMan = {name: "Sandman", ability: "s", hp: 70, attackStyle: "attacks", minRange: 5, maxRange: 7, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 28, points: 175};
let fBat = {name: "Fire Bat", ability: "v", hp: 60, attackStyle: "bites", minRange: 7, maxRange: 6, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 30, points: 220};

//bosses
let chaos = {name: "Chaos", ability: "a", hp: 150, attackStyle: "attacks", minRange: 8, maxRange: 9, minHit: 7, maxHit: 13, minFlee: 5, maxFlee: 8, toHit: 10, gold: 100, points: 1000};
let chaosDemon = {name: "Chaos Demon", ability: "a", hp: 90, attackStyle: "attacks", minRange: 6, maxRange: 12, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 50, points: 500};
let horde = {name: "Necro Horde", ability: "a", hp: 120, attackStyle: "attacks", minRange: 7, maxRange: 9, minHit: 5, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600};
let gryphon = {name: "Gryphon", ability: "a", hp: 120, attackStyle: "strikes", minRange: 7, maxRange: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600};
let litchKing = {name: "Litch  King", ability: "v", hp: 110, attackStyle: "attacks", minRange: 7, maxRange: 10, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 10, gold:50 , points: 800};
let vandal = {name: "Greasy Vandal", ability: "a", hp: 45, attackStyle: "slashes", minRange: 5, maxRange: 10, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 0, points: 250};
let lady;
let victim;
let randomMerchant;


//object of arrays of objects
let areas = {
    "start": [bear, goblins, elf, goblins],
    "merchantRoad" : [gutterBums, bandit, marauder, elf],
    "swampRoad" : [wolves, wraith, mudMan, leech],
    "cityRoad" : [thief, thrall, wyvren, gutterBums],
    "mountainRoad" : [fSprite, mimic, mTroll, bat],
    "valleyRoad" : [fern, zombie, panther, malboro],
    "marshRoad" : [litchling, crows, banshee, aElement],
    "desertRoad" : [scorpion, phantom, wisp, taranTroll],
    "cliffsRoad" : [ants, mimic, doppleganger, miniBears],
    "forestRoad" : [witch, bat, mush, centaur],
    "plainsRoad" : [chimera, crows, sandMan, golem],
    "volcanoRoad" : [chaosEl, fBat, omegaTroll, chimera],
    "lake" : [mLeech, mudMan, lady, poo],
    "city" : [drunk, vandal, rat, cultist],
    "mountain" : [fSprite, chaosDemon, mTroll, bat],
    "valley" : [fern, randomMerchant, viper, malboro],
    "marsh" : [litchling, horde, crows, aElement],
    "desert" : [scorpion, randomMerchant, wisp, taranTroll],
    "cliffs" : [ants, gryphon, crows, miniBears],
    "tomb" : [scarabs, litchKing, pViper, spectre],
    "plains" : [chimera, sandMan, crows, golem],
    "volcano" : [chaosEl, chaos, omegaTroll, fBat]
}

var game = new Vue({
    el: '#game',
    data:{
        backgroundImage: 'pics/forest.jpeg',
        location: 'start',
        chapter: 1,
        potion: 25,
        tmpHp:0,    
        enemy:{
            name: 'itsa me',
            ability: '',
            hp: 0,
            attack: '',
            minRange: 0,
            maxRange: 0,
            minHit: 0,
            maxHit: 0,
            minFlee: 0,
            maxFlee: 0,
            toHit: 0,
            gold: 0,
            points: 0
        },
        player:{
            gold: 0,
            hp: 0,
            hpMax: 0,
            minDmg: 2,
            maxDmg: 5,
            dex: 7,
            evade: 7
        }
    },
    methods:{
        getEnemy: function(){     
            for (var key in areas){
                if (key == this.location){
                    let rand = Math.floor(Math.random() * 4);       
                    this.enemy = areas[key][rand];
                    tmpHp = this.enemy.hp;
                }
            }
        },
        setImage: function(newImage){
            this.image = newImage;
        },
        setLocation: function(newLocation){
            this.location = newLocation
        },
        nextChapter: function(){
            this.chapter+=1;
            this.potion+=25;
        },
        attack: function(){
            let range = this.player.maxDmg - this.player.minDmg;
            let dmg = Math.floor((Math.random() * range)+ this.player.minDmg);
            this.enemy.hp -= dmg;
        },
        resetEnemy: function(){
            this.enemy.hp = tmpHp;
        },
        flee: function(){

        },
        potion: function(){
            this.player.hp += this.potion;
            if (this.player.hp > this.player.hpMax)
                this.player.hp = this.player.hpMax;
        },
        dynamite: function(){
            this.enemy.hp -= 25;
        }
    }

})

/*class Enemy{
    
    constructor(enemy){

        this._name = enemy.name;
        this._ability = enemy.ability;
        this._hp = enemy.hp;
        this._attackStyle = enemy.attackStyle;
        this._minRange = enemy.minRange;
        this._maxRange = enemy.maxRange;
        this._minHit = enemy.minHit;
        this._maxHit = enemy.maxHit;
        this._minFlee = enemy.minFlee;
        this._maxFlee = enemy.maxFlee;
        this._toHit = enemy.toHit;
        this._gold = enemy.gold;
        this._points = enemy.points;

    }
        set hp(hp){
            this._hp += hp;
        }
        get hp(){
            return this._hp;
        }
}
let att = (foe) =>{

    foe.hp -=1;
    document.getElementById("text").textContent = foe.hp;

}
let flee = () =>{

}
let potion = () =>{

}
let dynamite = () =>{

}

let getEnemy = () =>{
    
    let here = document.getElementById("location").textContent;

    for (var key in areas){
        if (key == here){
            let rand = Math.floor(Math.random() * 4);
            let enemy = new Enemy(areas[key][rand])
            return enemy;
        }
    }
}
let battle = () =>{
    
    let foe = getEnemy();
    console.log(foe.name);
    document.getElementById("text").textContent = foe.hp;
    let attack = document.getElementById("attack");
    let flee = document.getElementById("flee");
    let potion = document.getElementById("potion");
    let dynamite = document.getElementById("dynamite");
    attack.addEventListener("click", att(foe), false);
    flee.addEventListener("click", flee, false);
    potion.addEventListener("click", potion, false);
    dynamite.addEventListener("click", dynamite, false);
}

let listeners = () =>{
    let btn = document.getElementById("continue");
    
    btn.addEventListener("click", battle, false);
    
}

window.addEventListener("load", listeners, false);*/