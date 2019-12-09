//enemies

let bear = {name: "Bear", ability: "a", hp: 12, attackStyle: "swipes", minDmg: 3, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 50};
let goblins = {name: "Goblins", ability: "a", hp: 6, attackStyle: "attack", minDmg: 1, maxDmg: 5, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 8, toHit: 8, gold: 3, points:10 };
let elf = {name: "Elf", ability: "a", hp: 8, attackStyle: "attacks", minDmg: 3, maxDmg: 5, minHit: 6, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30};
let gutterBums = {name: "Gutter Bums", ability: "a", hp: 12, attackStyle: "attack", minDmg: 1, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 4, points: 25};
let bandit = {name: "Bandit", ability: "a", hp: 8, attackStyle: "attacks", minDmg: 4, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30};
let marauder = {name: "Marauder", ability: "a", hp: 10, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 7, toHit: 8, gold: 7, points: 40};
let wolves = {name: "Wolves", ability: "a", hp: 15, attackStyle: "attack", minDmg: 2, maxDmg: 7, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 30};
let vWolves = {name: "Vicious Wolves", ability: "a", hp: 20, attackStyle: "attack", minDmg: 3, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 7, points: 40};
let wraith = {name: "Wraith", ability: "a", hp: 18, attackStyle: "attacks", minDmg: 4, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 50};
let mudMan = {name: "Mud Man", ability: "a", hp: 14, attackStyle: "attacks", minDmg: 3, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 8, gold: 5, points: 40};
let poo = {name: "Poo", ability: "a", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 6, maxHit: 11, minFlee: 6, maxFlee: 6, toHit: 8, gold: 8, points: 70};
let leech = {name: "Leech", ability: "v", hp: 14, attackStyle: "bites", minDmg: 3, maxDmg: 8, minHit: 4, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 35};
let mLeech = {name: "Massive Leech", ability: "v", hp: 20, attackStyle: "bites", minDmg: 4, maxDmg: 9, minHit: 4, maxHit:12 , minFlee: 4, maxFlee: 8, toHit: 8, gold: 10, points: 80};
let rWraith = {name: "Rotten Wraith", ability: "a", hp: 24, attackStyle: "swipes", minDmg: 4, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 80};
let thief = {name: "Thief", ability: "a", hp: 15, attackStyle: "attacks", minDmg: 4, maxDmg: 6, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 40};
let thrall = {name: "Thrall", ability: "a", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 8, toHit: 8, gold: 12, points: 60};
let wyvren = {name: "Wyvren", ability: "a", hp: 25, attackStyle: "claws", minDmg: 5, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 4, toHit: 8, gold: 11, points: 100};
let fSprite = {name: "Fire Sprite", ability: "a", hp: 30, attackStyle: "throws fireball", minDmg: 5, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 125};
let mimic = {name: "Mimic", ability: "a", hp: 35, attackStyle: "chomps", minDmg: 5, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let mTroll = {name: "Mountain Troll", ability: "a", hp: 50, attackStyle: "clubs you", minDmg: 6, maxDmg: 8, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 8, gold: 20, points: 140};
let chaosEl = {name: "Chaos Elemental", ability: "a", hp: 60, attackStyle: "burns", minDmg: 7, maxDmg: 8, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 8, toHit:10 , gold: 28, points: 250};
let bat = {name: "Vampire Bat", ability: "v", hp: 30, attackStyle: "bites", minDmg: 5, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 13, points: 120};
let fern = {name: "Fern Feind", ability: "a", hp: 30, attackStyle: "whips", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit:9 , gold: 15, points: 125};
let zombie = {name: "Zombie", ability: "a", hp: 35, attackStyle: "claws", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let panther = {name: "Panther", ability: "a", hp: 40, attackStyle: "claws", minDmg: 6, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 9, gold: 20, points: 140};
let viper = {name: "Viper", ability: "p", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 6, maxFlee: 11, toHit: 9, gold: 15, points: 160};
let malboro = {name: "Malboro", ability: "p", hp: 35, attackStyle: "swats", minDmg: 7, maxDmg: 6, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150};
let litchling = {name: "Litchling", ability: "v", hp: 35, attackStyle: "claws", minDmg: 4, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 20, points: 175};
let crows = {name: "Murder Crows", ability: "a", hp: 50, attackStyle: "dive bomb", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150};
let banshee = {name: "Banshee", ability: "a", hp: 55, attackStyle: "claws", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140};
let aElement = {name: "Air Elemental", ability: "a", hp: 45, attackStyle: "gusts", minDmg: 7, maxDmg: 5, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let scorpion = {name: "Crystal Scorpion", ability: "p", hp: 35, attackStyle: "stings", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 17, points: 155};
let phantom = {name: "Desert Phantom", ability: "a", hp: 40, attackStyle: "Mind Flays", minDmg: 6, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150};
let wisp = {name: "Will-o'-the-wisp", ability: "v", hp: 40, attackStyle: "bludgeons", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140};
let taranTroll = {name: "Taran-Troll", ability: "a", hp: 60, attackStyle: "lunges", minDmg: 6, maxDmg: 7, minHit: 4, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175};
let ants = {name: "Komodo Ants", ability: "p", hp: 40, attackStyle: "sting", minDmg: 6, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 155};
let doppleganger = {name: "Doppleganger", ability: "v", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 6, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 150};
let miniBears = {name: "Minibears", ability: "a", hp: 50, attackStyle: "bite", minDmg: 5, maxDmg: 8, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175};
let witch = {name: "Hag Witch", ability: "s", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 10, gold: 25, points: 220};
let mush = {name: "Mush Man", ability: "p", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 10, gold: 25, points: 200};
let centaur = {name: "Centaur", ability: "a", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 9, toHit: 10, gold: 30, points: 250};
let drunk = {name: "Drunkass", ability: "a", hp: 25, attackStyle: "swings", minDmg: 5, maxDmg: 8, minHit: 3, maxHit: 11, minFlee: 3, maxFlee: 8, toHit: 8, gold: 10, points: 80};
let rat = {name: "Sewer Rat", ability: "a", hp: 25, attackStyle: "bites", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 9, gold: 15, points: 250};
let cultist = {name: "Cultist", ability: "v", hp: 20, attackStyle: "stabs wildly", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 8, gold: 12, points: 110};
let scarabs = {name: "Scarabs", ability: "s", hp: 50, attackStyle: "sting", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 10, gold: 22, points: 165};
let pViper = {name: "Pit Viper", ability: "p", hp: 55, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 25, points: 200};
let spectre = {name: "Spectre", ability: "a", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 18, points: 220};
let chimera = {name: "Chimera", ability: "p", hp: 65, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 13, minFlee: 5, maxFlee: 7, toHit: 10, gold: 24, points: 220};
let golem = {name: "Stone Golem", ability: "a", hp: 80, attackStyle: "swings", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 10, gold: 30, points: 240};
let omegaTroll = {name: "Omega Troll", ability: "a", hp: 80, attackStyle: "clubs", minDmg: 7, maxDmg: 10, minHit: 4, maxHit: 13, minFlee: 6, maxFlee: 6, toHit: 10, gold: 40, points: 275};
let sandMan = {name: "Sandman", ability: "s", hp: 70, attackStyle: "attacks", minDmg: 5, maxDmg: 7, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 28, points: 175};
let fBat = {name: "Fire Bat", ability: "v", hp: 60, attackStyle: "bites", minDmg: 7, maxDmg: 6, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 30, points: 220};

//bosses
let chaos = {name: "Chaos", ability: "a", hp: 150, attackStyle: "attacks", minDmg: 8, maxDmg: 9, minHit: 7, maxHit: 13, minFlee: 5, maxFlee: 8, toHit: 10, gold: 100, points: 1000};
let chaosDemon = {name: "Chaos Demon", ability: "a", hp: 90, attackStyle: "attacks", minDmg: 6, maxDmg: 12, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 50, points: 500};
let horde = {name: "Necro Horde", ability: "a", hp: 120, attackStyle: "attacks", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600};
let gryphon = {name: "Gryphon", ability: "a", hp: 120, attackStyle: "strikes", minDmg: 7, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600};
let litchKing = {name: "Litch  King", ability: "v", hp: 110, attackStyle: "attacks", minDmg: 7, maxDmg: 10, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 10, gold:50 , points: 800};
let vandal = {name: "Greasy Vandal", ability: "a", hp: 45, attackStyle: "slashes", minDmg: 5, maxDmg: 10, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 0, points: 250};

//NPCs
let lady;
let victim;
let randomMerchant;

//empty enemy;
let empty = {name: '', ability: '', hp: 0, attackStyle: '', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0};


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
            name: '',
            ability: '',
            hp: 0,
            attack: '',
            minDmg: 0,
            maxDmg: 0,
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
            hp: 100,
            hpMax: 100,
            minDmg: 2,
            maxDmg: 5,
            dex: 7,
            evade: 7,
            points: 0
        }
    },
    methods:{
        getEnemy: function(){  
            for (var key in areas){
                if (key == this.location){
                    let rand = Math.floor(Math.random() * 4);       
                    this.enemy = areas[key][rand];
                    this.tmpHp = this.enemy.hp;
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
            //hit or miss
            let out = document.getElementById("text");
            let hit = Math.floor((Math.random() * this.enemy.toHit) + 1);
            //hit
            if (this.player.dex >= hit){
                let range = this.player.maxDmg - this.player.minDmg;
                let dmg = Math.floor((Math.random() * range)+ this.player.minDmg);
                this.enemy.hp -= dmg;
                out.textContent = `${this.enemy.name} hit for ${dmg} dmg`
            }
            //miss
            else{
                out.textContent = "You Miss!"
            }
            if (this.enemy.hp <= 0){
                out.textContent = `You slay the ${this.enemy.name}!`;
                this.enemyKilled();
            }          
        },
        enemyKilled: function(){
            this.player.gold += this.enemy.gold;
            this.player.points += this.enemy.points;
            this.resetEnemy();
            this.enemy = empty;

        },
        resetEnemy: function(){
            this.enemy.hp = this.tmpHp;
        },
        enemyAttack: function(){
            let out = document.getElementById("text");
            let hitRange = this.enemy.maxHit - this.enemy.minHit;
            let hit = Math.floor((Math.random() * hitRange) + this.enemy.minHit);
            if (hit >= this.player.evade){
                let range = this.enemy.maxDmg - this.enemy.minDmg;
                let dmg = Math.floor((Math.random() * range) + this.enemy.minDmg);
                this.player.hp -= dmg;
                out.textContent = `${this.enemy.name} hits for ${dmg} dmg`
            }
            else{
                out.textContent = `${this.enemy.name} Misses!`
            }
        },
        flee: function(){
            let out = document.getElementById("text");
            let range = this.enemy.maxFlee - this.enemy.minFlee;
            let chance = Math.floor((Math.random() * range) + this.enemy.minFlee);
            if (this.player.evade > chance){
                out.textContent = `You run away from the ${this.enemy.name} like a bitch`
            }
        },
        dynamite: function(){
            this.enemy.hp -= 25;         
        },
        heal: function(){
            this.player.hp += this.potion;
            if (this.player.hp > this.player.hpMax){
                this.player.hp = this.player.hpMax;
            }
        },
        chooseClass: function(){

        },
        eVamp: function(){

        },
        pVamp: function(){

        },
        eStun: function(){

        },
        pStun: function(){

        },
        ePoison: function(){

        },
        pPoison: function(){
            
        }
    }

})