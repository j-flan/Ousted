//enemies

let bear = {name: "Bear", hp: 12, attackStyle: "swipes", minDmg: 3, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 50, poison: false,stun: false,vamp: false};
let goblins = {name: "Goblins", hp: 6, attackStyle: "attack", minDmg: 1, maxDmg: 5, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 8, toHit: 8, gold: 3, points:10 , poison: false,stun: false,vamp: false};
let elf = {name: "Elf", hp: 8, attackStyle: "attacks", minDmg: 3, maxDmg: 5, minHit: 6, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30, poison: false,stun: false,vamp: false};
let gutterBums = {name: "Gutter Bums", hp: 12, attackStyle: "attack", minDmg: 1, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 4, points: 25, poison: false,stun: false,vamp: false};
let bandit = {name: "Bandit", hp: 8, attackStyle: "attacks", minDmg: 4, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 30, poison: false,stun: false,vamp: false};
let marauder = {name: "Marauder", hp: 10, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 10, minFlee: 5, maxFlee: 7, toHit: 8, gold: 7, points: 40, poison: false,stun: false,vamp: false};
let wolves = {name: "Wolves", hp: 15, attackStyle: "attack", minDmg: 2, maxDmg: 7, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 30, poison: false,stun: false,vamp: false};
let vWolves = {name: "Vicious Wolves", hp: 20, attackStyle: "attack", minDmg: 3, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 7, points: 40, poison: false,stun: false,vamp: false};
let wraith = {name: "Wraith", hp: 18, attackStyle: "attacks", minDmg: 4, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 50, poison: false,stun: false,vamp: false};
let mudMan = {name: "Mud Man", hp: 14, attackStyle: "attacks", minDmg: 3, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 8, gold: 5, points: 40, poison: false,stun: false,vamp: false};
let poo = {name: "Poo", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 6, maxHit: 11, minFlee: 6, maxFlee: 6, toHit: 8, gold: 8, points: 70, poison: false,stun: false,vamp: false};
let leech = {name: "Leech", hp: 14, attackStyle: "bites", minDmg: 3, maxDmg: 8, minHit: 4, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 8, gold: 6, points: 35, poison: false,stun: false,vamp: true};
let mLeech = {name: "Massive Leech", hp: 20, attackStyle: "bites", minDmg: 4, maxDmg: 9, minHit: 4, maxHit:12 , minFlee: 4, maxFlee: 8, toHit: 8, gold: 10, points: 80, poison: false,stun: false,vamp: true};
let rWraith = {name: "Rotten Wraith", hp: 24, attackStyle: "swipes", minDmg: 4, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 9, gold: 8, points: 80, poison: false,stun: false,vamp: false};
let thief = {name: "Thief", hp: 15, attackStyle: "attacks", minDmg: 4, maxDmg: 6, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 8, gold: 5, points: 40, poison: false,stun: false,vamp: false};
let thrall = {name: "Thrall", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 8, toHit: 8, gold: 12, points: 60, poison: false,stun: false,vamp: false};
let wyvren = {name: "Wyvren", hp: 25, attackStyle: "claws", minDmg: 5, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 4, toHit: 8, gold: 11, points: 100, poison: false,stun: false,vamp: false};
let fSprite = {name: "Fire Sprite", hp: 30, attackStyle: "throws fireball", minDmg: 5, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 125, poison: false,stun: false,vamp: false};
let mimic = {name: "Mimic", hp: 35, attackStyle: "chomps", minDmg: 5, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let mTroll = {name: "Mountain Troll", hp: 50, attackStyle: "clubs you", minDmg: 6, maxDmg: 8, minHit: 4, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 8, gold: 20, points: 140, poison: false,stun: false,vamp: false};
let chaosEl = {name: "Chaos Elemental", hp: 60, attackStyle: "burns", minDmg: 7, maxDmg: 8, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 8, toHit:10 , gold: 28, points: 250, poison: false,stun: false,vamp: false};
let bat = {name: "Vampire Bat", hp: 30, attackStyle: "bites", minDmg: 5, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 13, points: 120, poison: false,stun: false,vamp: true};
let fern = {name: "Fern Feind", hp: 30, attackStyle: "whips", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit:9 , gold: 15, points: 125, poison: false,stun: false,vamp: false};
let zombie = {name: "Zombie", hp: 35, attackStyle: "claws", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let panther = {name: "Panther", hp: 40, attackStyle: "claws", minDmg: 6, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 6, toHit: 9, gold: 20, points: 140, poison: false,stun: false,vamp: false};
let viper = {name: "Viper", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 6, maxFlee: 11, toHit: 9, gold: 15, points: 160, poison: true,stun: false,vamp: false};
let malboro = {name: "Malboro", hp: 35, attackStyle: "swats", minDmg: 7, maxDmg: 6, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150, poison: true,stun: false,vamp: false};
let litchling = {name: "Litchling", hp: 35, attackStyle: "claws", minDmg: 4, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: true};
let crows = {name: "Murder Crows", hp: 50, attackStyle: "dive bomb", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 25, points: 150, poison: false,stun: false,vamp: false};
let banshee = {name: "Banshee", hp: 55, attackStyle: "claws", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140, poison: false,stun: false,vamp: false};
let aElement = {name: "Air Elemental", hp: 45, attackStyle: "gusts", minDmg: 7, maxDmg: 5, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let scorpion = {name: "Crystal Scorpion", hp: 35, attackStyle: "stings", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 17, points: 155, poison: true,stun: false,vamp: false};
let phantom = {name: "Desert Phantom", hp: 40, attackStyle: "Mind Flays", minDmg: 6, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let wisp = {name: "Will-o'-the-wisp", hp: 40, attackStyle: "bludgeons", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 140, poison: false,stun: false,vamp: false};
let taranTroll = {name: "Taran-Troll", hp: 60, attackStyle: "lunges", minDmg: 6, maxDmg: 7, minHit: 4, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: false};
let ants = {name: "Komodo Ants", hp: 40, attackStyle: "sting", minDmg: 6, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 9, gold: 15, points: 155, poison: true,stun: false,vamp: false};
let doppleganger = {name: "Doppleganger", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 6, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 9, gold: 18, points: 150, poison: false,stun: false,vamp: true};
let miniBears = {name: "Minibears", hp: 50, attackStyle: "bite", minDmg: 5, maxDmg: 8, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: false};
let witch = {name: "Hag Witch", ability: "s", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 10, gold: 25, points: 220, poison: false,stun: true,vamp: false};
let mush = {name: "Mush Man", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 4, maxFlee: 8, toHit: 10, gold: 25, points: 200, poison: true,stun: false,vamp: false};
let centaur = {name: "Centaur", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 9, toHit: 10, gold: 30, points: 250, poison: false,stun: false,vamp: false};
let drunk = {name: "Drunkass", hp: 25, attackStyle: "swings", minDmg: 5, maxDmg: 8, minHit: 3, maxHit: 11, minFlee: 3, maxFlee: 8, toHit: 8, gold: 10, points: 80, poison: false,stun: false,vamp: false};
let rat = {name: "Sewer Rat", hp: 25, attackStyle: "bites", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 9, gold: 15, points: 250, poison: false,stun: false,vamp: false};
let cultist = {name: "Cultist", hp: 20, attackStyle: "stabs wildly", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 8, gold: 12, points: 110, poison: false,stun: false,vamp: true};
let scarabs = {name: "Scarabs", ability: "s", hp: 50, attackStyle: "sting", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 4, maxFlee: 8, toHit: 10, gold: 22, points: 165, poison: false,stun: true,vamp: false};
let pViper = {name: "Pit Viper", hp: 55, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 25, points: 200, poison: true,stun: false,vamp: false};
let spectre = {name: "Spectre", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 5, maxFlee: 7, toHit: 10, gold: 18, points: 220, poison: false,stun: false,vamp: false};
let chimera = {name: "Chimera", hp: 65, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 13, minFlee: 5, maxFlee: 7, toHit: 10, gold: 24, points: 220, poison: true,stun: false,vamp: false};
let golem = {name: "Stone Golem", hp: 80, attackStyle: "swings", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 7, toHit: 10, gold: 30, points: 240, poison: false,stun: false,vamp: false};
let omegaTroll = {name: "Omega Troll", hp: 80, attackStyle: "clubs", minDmg: 7, maxDmg: 10, minHit: 4, maxHit: 13, minFlee: 6, maxFlee: 6, toHit: 10, gold: 40, points: 275, poison: false,stun: false,vamp: false};
let sandMan = {name: "Sandman", ability: "s", hp: 70, attackStyle: "attacks", minDmg: 5, maxDmg: 7, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 28, points: 175, poison: false,stun: true,vamp: false};
let fBat = {name: "Fire Bat", hp: 60, attackStyle: "bites", minDmg: 7, maxDmg: 6, minHit: 7, maxHit: 12, minFlee: 6, maxFlee: 6, toHit: 10, gold: 30, points: 220, poison: false,stun: false,vamp: true};

//bosses
let chaos = {name: "Chaos", hp: 150, attackStyle: "attacks", minDmg: 8, maxDmg: 9, minHit: 7, maxHit: 13, minFlee: 5, maxFlee: 8, toHit: 10, gold: 100, points: 1000, poison: false,stun: false,vamp: false};
let chaosDemon = {name: "Chaos Demon", hp: 90, attackStyle: "attacks", minDmg: 6, maxDmg: 12, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 50, points: 500, poison: false,stun: false,vamp: false};
let horde = {name: "Necro Horde", hp: 120, attackStyle: "attacks", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 13, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600, poison: false,stun: false,vamp: false};
let gryphon = {name: "Gryphon", hp: 120, attackStyle: "strikes", minDmg: 7, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 9, gold: 40, points: 600, poison: false,stun: false,vamp: false};
let litchKing = {name: "Litch  King", hp: 110, attackStyle: "attacks", minDmg: 7, maxDmg: 10, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 8, toHit: 10, gold:50 , points: 800, poison: false,stun: false,vamp: true};
let vandal = {name: "Greasy Vandal", hp: 45, attackStyle: "slashes", minDmg: 5, maxDmg: 10, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 8, toHit: 9, gold: 0, points: 250, poison: false,stun: false,vamp: false};

//empty enemy;
let empty = {name: '', ability: '', hp: 0, attackStyle: '', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0, poison: false,stun: false,vamp: false};

//NPCs   ---- make as empty character? could make as .name = special event.
let lady = {name: 'Lady of the Lake', ability: 'watery tart', hp: 0, attackStyle: 'rendering', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0, poison: false,stun: false,vamp: false};
let randomMerchant = {name: 'Random Merchant', ability: 'swindling', hp: 0, attackStyle: 'poverty', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0, poison: false,stun: false,vamp: false};

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
        direction: 'S',
        chapter: 1,
        potion: 25,
        tmpHp: 0,
        battleCount: 0,
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
            points: 0,
            poison: false,
            poisonCount: 0,
            stun: false,
            vamp: false
        },
        player:{
            gold: 0,
            hp: 100,
            hpMax: 100,
            minDmg: 2,
            maxDmg: 5,
            dex: 7,
            evade: 7,
            points: 0,
            poison: false,
            poisonCount: 0,
            stun: false,
            vamp: false
        },
        npc:{
            lady: true,
            victim: true,
        },
        item:{
            shortSword: false,
            longSword: false,
            phantomBane: false,
            leatherArmor: false,
            studdedLeatherArmor: false,
            mercurialBoots: false,
            magicDagger: false,
            magicShield: false,
            bastardSword: false,
            voidRapier: false,
            coralKukri: false,
            parryingDagger: false,
            studdedLeatherArmor: false,
            soultrapKatana: false,
            lightningAxe: false,
            voidBangle: false
        }
    },
    methods:{
        getEnemy: function(){  
            for (var key in areas){
                if (key == this.location){
                    document.getElementById("text").textContent = '';
                    let rand = Math.floor(Math.random() * 4);       
                    this.enemy = areas[key][rand];
                    this.tmpHp = this.enemy.hp;
                    document.getElementById("attText").textContent = `${this.enemy.name}`;
                    this.npcEnc(this.enemy.name);
                }
            }
        },
        setImage: function(newImage){
            this.backgroundImage = newImage;
        },
        setLocation: function(newLocation){
            this.location = newLocation;
            this.setImage(`pics/${newLocation}.jpg`);
        },
        setDirection: function(newDirection){
            this.direction = newDirection;
        },
        nextChapter: function(){
            this.chapter+=1;
            this.potion+=25;
            this.player.hp+=25;
        },
        attack: function(){          
            //hit or miss
            let out = document.getElementById("text");
            let hit = Math.floor((Math.random() * this.enemy.toHit) + 1);

            //hit for random damage between min & max
            if (this.player.dex >= hit){
                let range = this.player.maxDmg - this.player.minDmg;
                let dmg = Math.floor((Math.random() * range)+ this.player.minDmg);
                this.enemy.hp -= dmg;
                out.textContent = `You hit the ${this.enemy.name} for ${dmg} dmg`;
                if(this.player.vamp)
                    this.pVamp();
                else if(this.player.stun)
                    this.pStun();
                else if(this.player.poison)
                    this.pPoison();
                //enemy killed
                if (this.enemy.hp <= 0){
                    this.enemyKilled();
                } 
            }
            //miss
            else{
                out.textContent = "You Miss!";
            }        
        },
        enemyAttack: function(){
            //hit or miss
            let eOut = document.getElementById("attText");
            let hitRange = this.enemy.maxHit - this.enemy.minHit;
            let hit = Math.floor((Math.random() * hitRange) + this.enemy.minHit);

            //hit for random damage between min & max
            if (hit >= this.player.evade){
                let range = this.enemy.maxDmg - this.enemy.minDmg;
                let dmg = Math.floor((Math.random() * range) + this.enemy.minDmg);
                this.player.hp -= dmg;
                eOut.textContent = `${this.enemy.name} ${this.enemy.attackStyle} for ${dmg} dmg`;
                if(this.enemy.vamp)
                    this.eVamp();
                else if(this.enemy.stun)
                    this.eStun();
                else if(this.enemy.poison)
                    this.ePoison();       
            }
            //miss
            else{
                eOut.textContent = `${this.enemy.name} Misses!`;
            }
        },
        battle: function(){
            document.getElementById("statText").textContent = '';
            this.attack();
            if(this.enemy.hp > 0)
                this.enemyAttack();
            if(this.player.hp < 1)
                this.playerKilled();  
        },
        setBattCount: function(num){
            this.battleCount = num;
        },
        battCount: function(){
            let sOut = document.getElementById("statText");
            if (this.battleCount == 3)
                this.setBattCount(0);
            else
                this.battleCount += 1;
                sOut.textContent = `Battle count ${this.battleCount}`;        
        },
        enemyKilled: function(){
            document.getElementById("text").textContent = `You slayed the ${this.enemy.name}!`;
            document.getElementById("attText").textContent = '';
            //add spoils to player stats
            this.player.gold += this.enemy.gold;
            this.player.points += this.enemy.points;
            this.battCount();
            this.resetEnemy();
            if (this.battleCount < 3){
                this.getEnemy();
            }
        },
        playerKilled: function(){
            document.getElementById("text").textContent = "GAME OVER";
            document.getElementById("attText").textContent = '';
            this.player = {gold: 0,hp: 100,hpMax: 100,minDmg: 2,maxDmg: 5,dex: 7,evade: 7,points: 0, poison: false, stun: false, vamp: false};
            this.resetEnemy();
        },
        resetEnemy: function(){
            //enemy hp reset for future battles
            this.enemy.hp = this.tmpHp;
            //wipe enemy
            this.enemy = empty;
        },
        flee: function(){
            let out = document.getElementById("text");
            let eOut = document.getElementById("attText");        
            //chance to flee, evade must be larger than random enemy
            //flee chance between minflee and maxflee
            let range = this.enemy.maxFlee - this.enemy.minFlee;
            let chance = Math.floor((Math.random() * range) + this.enemy.minFlee);
            if (this.player.evade > chance){
                this.battCount();
                out.textContent = `You run away from the ${this.enemy.name} like a bitch`;
                eOut.textContent = '';
                this.resetEnemy();
            }
            //did not flee
            else{
                out.textContent = "You try to run, but trip and fall on your face instead";
                if(this.enemy.hp > 0){
                    this.enemyAttack();
                }
            }
        },
        dynamite: function(){
            let out = document.getElementById("text");
            this.enemy.hp -= 25;
            out.textContent = `The explosion thits the ${this.enemy.name} for 25dmg`;
            if(this.enemy.hp > 0){
                this.enemyAttack();
            }
            else{
                this.enemyKilled();
            }       
        },
        heal: function(){
            let out = document.getElementById("text");
            this.player.hp += this.potion;
            if (this.player.hp > this.player.hpMax){
                this.player.hp = this.player.hpMax;
                out.textContent = "Full health!";
            }
            else{
                out.textContent = `You heal for ${this.potion}hp`
            }
            this.enemyAttack();
        },

        /////////////////////THIS
        chooseClass: function(){

        },

        eVamp: function(){
            this.player.hp -= 2;
            this.enemy.hp += 1;
        },
        pVamp: function(){
            this.enemy.hp -= 2;
            this.player.hp += 1;
        },
        eStun: function(){
            let stun = Math.floor(Math.random() * 5);
            if(stun % 4 == 0){
                document.getElementById("statText").textContent = "Stunned!"
                this.enemyAttack();
            }
        },
        pStun: function(){
            let stun = Math.floor(Math.random() * 4);
            if(stun % 3 == 0){
                this.attack();
            }
        },
        ePoison: function(){
            let poison = Math.floor(Math.random() * 5);
            if(poison % 4 == 0 && this.player.poisonCount < 1){
                this.player.poisonCount = 3;
                document.getElementById("statText").textContent = "Poisoned!"
            }
            else if(this.player.poisonCount > 0){
                this.player.hp -= 2;
                this.player.poisonCount -= 1;
            }
        },
        pPoison: function(){
            let poison = Math.floor(Math.random() * 4);
            if(poison % 3 == 0 && this.enemy.poisonCount < 1){
                this.enemy.poisonCount = 3;
            }
            else if(this.enemy.poisonCount > 0){
                this.enemy.hp -= 2;
                this.enemy.poisonCount -= 1;
            }
        },
        //only one weapon active at a time
        resetWeapon: function(){
            this.item.shortSword= false,
            this.item.longSword= false,
            this.item.phantomBane= false,
            this.item.bastardSword= false,
            this.item.voidRapier= false,
            this.item.coralKukri= false,
            this.item.soultrapKatana= false,
            this.item.lightningAxe= false
        },
        //only one off-hand at a time
        resetOffHand: function(){
            this.item.magicDagger= false,
            this.item.magicShield= false,
            this.item.parryingDagger= false
        },
        //only one armor at a time
        resetArmor: function(){
            this.item.leatherArmor= false,
            this.item.studdedLeatherArmor=false
        },
        //happens once at the time of purchase (leaving merchant). sets new stats.
        equip: function(){
            //main-hand weapons, player will always have main-hand weapon.

            //zero for buff reset.
            this.player.evade = 7;
            this.player.dex = 7;
            this.player.hpMax = 100;

            if (this.item.shortSword){
                this.player.minDmg = 3;
                this.player.maxDmg = 6;
            }
            else if (this.item.longSword){
                this.player.minDmg = 4;
                this.player.maxDmg = 9;
                this.player.dex = 6;
            }
            else if (this.item.phantomBane){
                this.player.minDmg = 5;
                this.player.maxDmg = 8;
            }
            else if (this.item.bastardSword){
                this.player.minDmg = 6;
                this.player.maxDmg = 12;
            }
            else if (this.item.coralKukri){
                this.player.minDmg = 6;
                this.player.maxDmg = 11;
                this.player.poison = true;
            }
            else if (this.item.voidRapier){
                this.player.minDmg = 5;
                this.player.maxDmg = 11;
                this.player.vamp = true;
            }
            else if (this.item.soultrapKatana){
                this.player.minDmg = 7;
                this.player.maxDmg = 13;
                this.player.vamp= true;
            }
            else if (this.item.lightningAxe){
                this.player.minDmg = 8;
                this.player.maxDmg = 13;
                this.player.stun = true;
            }
            else{
                this.player.minDmg = 2;
                this.player.maxDmg = 5;
            }
            //armors
            if (this.item.leatherArmor){
                this.player.evade += 1;
            }
            else if (this.item.studdedLeatherArmor){
                this.player.evade += 2;
            }
            //accessories
            if (this.item.mercurialBoots){
                this.player.evade += 1;           
            }
            if (this.item.voidBangle){
                this.player.vamp = true;
            }
            //off-hand
            if (this.item.magicDagger){
                this.player.minDmg += 1;
                this.player.dex += 1;
            }
            else if (this.item.magicShield){
                this.player.hpMax += 25
            }
            else if (this.item.parryingDagger){
                this.player.dex += 2;
                this.player.minDmg += 1;
            }
            if (this.player.hp > this.player.hpMax)
                this.player.hp = this.player.hpMax;
        },
        merchantCamp: function(){
            this.setLocation('merchantCamp');
            document.getElementById("text").textContent = "You're at the Merchant Camp";
        },
        cityProper: function(){
            this.setLocation('cityProper');
            document.getElementById("text").textContent = "You're in the City Proper";
        },
        home: function(){
            this.setLocation('home');
            document.getElementById("text").textContent = "You're back home";
        },
        tombEntrance: function(){
            this.setLocation('tombEntrance');
            document.getElementById("text").textContent = "You're at the Entrance to the Ancient Tomb";
        },
        npcEnc: function(name){
            if(name == 'Lady of the Lake'){
                document.getElementById("text").textContent = "You have met the lady of the lake, \
                this is placeholder text. receive full hp (once, in the future) and the phantom bane sword. check stats. player\
                can choose to take this or not and encounter can happen only once. additional buttons required";
                this.player.hp = this.player.hpMax;

                //this is the equip weapon idea
                this.resetWeapon();
                this.item.phantomBane = true;
                this.equip();
            }


            ///////////////////////////////////HERE, THIS TOO//////////////////////////////////
            if(name == 'Random Merchant'){

            }
        }
    }
})