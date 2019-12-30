//enemies

//enemies

let bear = {name: "Bear", hp: 12, attackStyle: "swipes", minDmg: 3, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 5, maxFlee: 10, toHit: 8, gold: 5, points: 50, poison: false,stun: false,vamp: false};
let goblins = {name: "Goblin", hp: 6, attackStyle: "attack", minDmg: 1, maxDmg: 5, minHit: 5, maxHit: 10, minFlee: 6, maxFlee: 10, toHit: 8, gold: 3, points:10 , poison: false,stun: false,vamp: false};
let elf = {name: "Elf", hp: 8, attackStyle: "attacks", minDmg: 3, maxDmg: 5, minHit: 6, maxHit: 10, minFlee: 5, maxFlee: 10, toHit: 8, gold: 6, points: 30, poison: false,stun: false,vamp: false};
let bandit = {name: "Bandit", hp: 12, attackStyle: "attacks", minDmg: 4, maxDmg: 6, minHit: 4, maxHit: 10, minFlee: 5, maxFlee: 10, toHit: 8, gold: 6, points: 30, poison: false,stun: false,vamp: false};
let marauder = {name: "Marauder", hp: 15, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 10, minFlee: 6, maxFlee: 10, toHit: 8, gold: 7, points: 40, poison: false,stun: false,vamp: false};
let wolves = {name: "Wolf", hp: 15, attackStyle: "attack", minDmg: 2, maxDmg: 7, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 10, toHit: 8, gold: 5, points: 30, poison: false,stun: false,vamp: false};
let wraith = {name: "Wraith", hp: 18, attackStyle: "attacks", minDmg: 4, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 6, maxFlee: 10, toHit: 9, gold: 8, points: 50, poison: false,stun: false,vamp: false};
let mudMan = {name: "Mud Man", hp: 14, attackStyle: "attacks", minDmg: 3, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 6, maxFlee: 10, toHit: 8, gold: 5, points: 40, poison: false,stun: false,vamp: false};
let poo = {name: "Poo", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 6, maxHit: 11, minFlee: 7, maxFlee: 10, toHit: 8, gold: 8, points: 70, poison: false,stun: false,vamp: false};
let leech = {name: "Leech", hp: 14, attackStyle: "bites", minDmg: 3, maxDmg: 8, minHit: 4, maxHit: 12, minFlee: 5, maxFlee: 10, toHit: 8, gold: 6, points: 35, poison: false,stun: false,vamp: true};
let thrall = {name: "Thrall", hp: 20, attackStyle: "lunges", minDmg: 3, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 6, maxFlee: 12, toHit: 8, gold: 12, points: 60, poison: false,stun: false,vamp: false};
let wyvren = {name: "Wyvren", hp: 25, attackStyle: "claws", minDmg: 5, maxDmg: 9, minHit: 4, maxHit: 11, minFlee: 6, maxFlee: 12, toHit: 8, gold: 11, points: 100, poison: false,stun: false,vamp: false};
let fSprite = {name: "Fire Sprite", hp: 30, attackStyle: "throws fireball", minDmg: 5, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 12, toHit: 9, gold: 15, points: 125, poison: false,stun: false,vamp: false};
let mimic = {name: "Mimic", hp: 35, attackStyle: "chomps", minDmg: 5, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let mTroll = {name: "Mountain Troll", hp: 50, attackStyle: "clubs you", minDmg: 6, maxDmg: 8, minHit: 4, maxHit: 11, minFlee: 5, maxFlee: 12, toHit: 8, gold: 20, points: 140, poison: false,stun: false,vamp: false};
let chaosEl = {name: "Chaos Elemental", hp: 60, attackStyle: "burns", minDmg: 7, maxDmg: 8, minHit: 7, maxHit: 12, minFlee: 7, maxFlee: 12, toHit:10 , gold: 28, points: 250, poison: false,stun: false,vamp: false};
let bat = {name: "Vampire Bat", hp: 30, attackStyle: "bites", minDmg: 5, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 13, points: 120, poison: false,stun: false,vamp: true};
let fern = {name: "Fern Feind", hp: 30, attackStyle: "whips", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit:9 , gold: 15, points: 125, poison: false,stun: false,vamp: false};
let zombie = {name: "Zombie", hp: 35, attackStyle: "claws", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let panther = {name: "Panther", hp: 40, attackStyle: "claws", minDmg: 6, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 14, toHit: 9, gold: 20, points: 140, poison: false,stun: false,vamp: false};
let viper = {name: "Viper", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 7, maxFlee: 11, toHit: 9, gold: 15, points: 160, poison: true,stun: false,vamp: false};
let malboro = {name: "Malboro", hp: 35, attackStyle: "swats", minDmg: 7, maxDmg: 6, minHit: 5, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 25, points: 150, poison: true,stun: false,vamp: false};
let litchling = {name: "Litchling", hp: 35, attackStyle: "claws", minDmg: 4, maxDmg: 9, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: true};
let crows = {name: "Murder Crows", hp: 50, attackStyle: "dive bomb", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 25, points: 150, poison: false,stun: false,vamp: false};
let banshee = {name: "Banshee", hp: 55, attackStyle: "claws", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 14, toHit: 9, gold: 18, points: 140, poison: false,stun: false,vamp: false};
let aElement = {name: "Air Elemental", hp: 45, attackStyle: "gusts", minDmg: 7, maxDmg: 5, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let scorpion = {name: "Crystal Scorpion", hp: 35, attackStyle: "stings", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit: 9, gold: 17, points: 155, poison: true,stun: false,vamp: false};
let phantom = {name: "Desert Phantom", hp: 40, attackStyle: "Mind Flays", minDmg: 6, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 150, poison: false,stun: false,vamp: false};
let wisp = {name: "Will-o'-the-wisp", hp: 40, attackStyle: "bludgeons", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 14, toHit: 9, gold: 18, points: 140, poison: false,stun: false,vamp: false};
let taranTroll = {name: "Taran-Troll", hp: 60, attackStyle: "lunges", minDmg: 6, maxDmg: 7, minHit: 4, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: false};
let ants = {name: "Komodo Ants", hp: 40, attackStyle: "sting", minDmg: 6, maxDmg: 5, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit: 9, gold: 15, points: 155, poison: true,stun: false,vamp: false};
let doppleganger = {name: "Doppleganger", hp: 40, attackStyle: "strikes", minDmg: 6, maxDmg: 6, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 14, toHit: 9, gold: 18, points: 150, poison: false,stun: false,vamp: true};
let miniBears = {name: "Minibears", hp: 50, attackStyle: "bite", minDmg: 5, maxDmg: 8, minHit: 6, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 9, gold: 20, points: 175, poison: false,stun: false,vamp: false};
let witch = {name: "Hag Witch", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 13, minFlee: 7, maxFlee: 14, toHit: 10, gold: 25, points: 220, poison: false,stun: true,vamp: false};
let mush = {name: "Mush Man", hp: 50, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 11, minFlee: 5, maxFlee: 14, toHit: 10, gold: 25, points: 200, poison: true,stun: false,vamp: false};
let centaur = {name: "Centaur", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 7, maxFlee: 15, toHit: 10, gold: 30, points: 250, poison: false,stun: false,vamp: false};
let drunk = {name: "Drunkass", hp: 25, attackStyle: "swings", minDmg: 5, maxDmg: 8, minHit: 3, maxHit: 11, minFlee: 3, maxFlee: 14, toHit: 8, gold: 10, points: 80, poison: false,stun: false,vamp: false};
let rat = {name: "Sewer Rat", hp: 25, attackStyle: "bites", minDmg: 5, maxDmg: 6, minHit: 6, maxHit: 12, minFlee: 7, maxFlee: 14, toHit: 9, gold: 15, points: 250, poison: false,stun: false,vamp: false};
let cultist = {name: "Cultist", hp: 20, attackStyle: "stabs wildly", minDmg: 5, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 6, maxFlee: 12, toHit: 8, gold: 12, points: 110, poison: false,stun: false,vamp: true};
let scarabs = {name: "Scarabs", hp: 50, attackStyle: "sting", minDmg: 6, maxDmg: 7, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit: 10, gold: 22, points: 165, poison: false,stun: true,vamp: false};
let pViper = {name: "Pit Viper", hp: 55, attackStyle: "strikes", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 7, maxFlee: 15, toHit: 10, gold: 25, points: 200, poison: true,stun: false,vamp: false};
let spectre = {name: "Spectre", hp: 60, attackStyle: "attacks", minDmg: 6, maxDmg: 7, minHit: 6, maxHit: 12, minFlee: 7, maxFlee: 15, toHit: 10, gold: 18, points: 220, poison: false,stun: false,vamp: false};
let chimera = {name: "Chimera", hp: 65, attackStyle: "attacks", minDmg: 5, maxDmg: 8, minHit: 5, maxHit: 13, minFlee: 7, maxFlee: 15, toHit: 10, gold: 24, points: 220, poison: true,stun: false,vamp: false};
let golem = {name: "Stone Golem", hp: 80, attackStyle: "swings", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 11, minFlee: 7, maxFlee: 15, toHit: 10, gold: 30, points: 240, poison: false,stun: false,vamp: false};
let omegaTroll = {name: "Omega Troll", hp: 80, attackStyle: "clubs", minDmg: 7, maxDmg: 10, minHit: 4, maxHit: 13, minFlee: 7, maxFlee: 16, toHit: 10, gold: 40, points: 275, poison: false,stun: false,vamp: false};
let sandMan = {name: "Sandman", hp: 70, attackStyle: "attacks", minDmg: 5, maxDmg: 7, minHit: 7, maxHit: 12, minFlee: 7, maxFlee: 16, toHit: 10, gold: 28, points: 175, poison: false,stun: true,vamp: false};
let fBat = {name: "Fire Bat", hp: 60, attackStyle: "bites", minDmg: 7, maxDmg: 6, minHit: 7, maxHit: 12, minFlee: 7, maxFlee: 16, toHit: 10, gold: 30, points: 220, poison: false,stun: false,vamp: true};

//bosses
let chaos = {name: "Chaos", hp: 150, attackStyle: "attacks", minDmg: 8, maxDmg: 9, minHit: 7, maxHit: 13, minFlee: 10, maxFlee: 20, toHit: 10, gold: 100, points: 1000, poison: false,stun: false,vamp: false};
let chaosDemon = {name: "Chaos Demon", hp: 90, attackStyle: "attacks", minDmg: 6, maxDmg: 12, minHit: 5, maxHit: 12, minFlee: 8, maxFlee: 15, toHit: 9, gold: 50, points: 500, poison: false,stun: false,vamp: false};
let horde = {name: "Necro Horde", hp: 120, attackStyle: "attacks", minDmg: 7, maxDmg: 9, minHit: 5, maxHit: 13, minFlee: 8, maxFlee: 17, toHit: 9, gold: 40, points: 600, poison: false,stun: false,vamp: false};
let gryphon = {name: "Gryphon", hp: 120, attackStyle: "strikes", minDmg: 7, maxDmg: 9, minHit: 6, maxHit: 12, minFlee: 8, maxFlee: 20, toHit: 9, gold: 40, points: 600, poison: false,stun: false,vamp: false};
let litchKing = {name: "Litch  King", hp: 110, attackStyle: "attacks", minDmg: 7, maxDmg: 10, minHit: 6, maxHit: 12, minFlee: 10, maxFlee: 20, toHit: 10, gold:50 , points: 800, poison: false,stun: false,vamp: true};

//vandal is "mini-boss" that triggers victim event that awards the player with +25 maxHp
let vandal = {name: "Greasy Vandal", hp: 45, attackStyle: "slashes", minDmg: 5, maxDmg: 10, minHit: 5, maxHit: 12, minFlee: 5, maxFlee: 14, toHit: 9, gold: 0, points: 250, poison: false,stun: false,vamp: false};

//NPCs
let lady = {name: 'Lady of the Lake', ability: 'watery tart', hp: 1, attackStyle: 'rendering', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0, poison: false,stun: false,vamp: false};
let randomMerchant = {name: 'Random Merchant', ability: 'swindling', hp: 0, attackStyle: 'poverty', minDmg: 0, maxDmg: 0, minHit: 0, maxHit: 0, minFlee: 0, maxFlee: 0, toHit: 0, gold: 0, points: 0, poison: false,stun: false,vamp: false};

var game = new Vue({
    el: '#game',
    data:{
        gameBackgroundImage: 'pics/gameBackground.jpg',
        backgroundImage: 'pics/start.jpg',
        heroImage: '',
        enemyImage: '',
        strike: '',
        location: 'start',
        direction: 'S',
        chapter: 1,
        potion: false,
        dynamite: false,
        battleCount: 0,
        npcEncounter: false,
        activeBattle: false,
        holdName : '',
        rand: 0,
        areas: {
            "forest": [bear, goblins, elf, goblins],
            "merchantRoad" : [wolves, bandit, marauder, elf],
            "swampRoad" : [wolves, wraith, mudMan, leech],
            "cityRoad" : [marauder, thrall, wyvren, bandit],
            "mountainRoad" : [fSprite, mimic, mTroll, bat],
            "valleyRoad" : [fern, zombie, panther, malboro],
            "marshRoad" : [litchling, crows, banshee, aElement],
            "desertRoad" : [scorpion, phantom, wisp, taranTroll],
            "cliffsRoad" : [ants, mimic, doppleganger, miniBears],
            "forestRoad" : [witch, bat, mush, centaur],
            "plainsRoad" : [chimera, crows, sandMan, golem],
            "volcanoRoad" : [chaosEl, fBat, omegaTroll, chimera],
            "lake" : [leech, mudMan, lady, poo],
            "city" : [drunk, vandal, rat, cultist],
            "mountain" : [fSprite, chaosDemon, mTroll, bat],
            "valley" : [fern, randomMerchant, viper, malboro],
            "marsh" : [litchling, horde, crows, aElement],
            "desert" : [scorpion, randomMerchant, wisp, taranTroll],
            "cliffs" : [ants, gryphon, crows, miniBears],
            "tomb" : [scarabs, litchKing, pViper, spectre],
            "plains" : [chimera, sandMan, crows, golem],
            "volcano" : [chaosEl, chaos, omegaTroll, fBat]
        },
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
            vamp: false,
            stunned: false
        },
        enemyZero:{
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
            vamp: false,
            stunned: false
        },
        hunter: false,
        fighter: false,
        farmer: false,
        weapon: 'Old Sword',
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
            vamp: false,
            stunned: false,
        },
        npc:{
            victim: true,
            chaosDemonBoss: true
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
            for (var key in this.areas){
                if (key == this.location){
                    this.setHeroImage('gifs/hero1.gif');
                    this.rand = Math.floor(Math.random() * 4);                
                    this.setEnemy(this.areas[key][this.rand]);
                    this.setActiveBattle();
                    document.getElementById("statText").textContent = '';
                    document.getElementById("text").textContent = '';
                    document.getElementById("attText").textContent = `${this.enemy.name} appears`;
                    this.setEnemyImage(`gifs/${this.enemy.name}.gif`);
                    this.npcEnc(this.enemy.name);
                }
            }
        },
        setEnemy: function(n){
            this.enemy.name = n.name;
            this.enemy.ability = n.ability;
            this.enemy.hp = n.hp;
            this.enemy.attack = n.attackStyle;
            this.enemy.minDmg = n.minDmg;
            this.enemy.maxDmg = n.maxDmg;
            this.enemy.minHit = n.minHit;
            this.enemy.maxHit = n.maxHit;
            this.enemy.minFlee = n.minFlee;
            this.enemy.maxFlee = n.maxFlee;
            this.enemy.toHit = n.toHit;
            this.enemy.gold = n.gold;
            this.enemy.points = n.points;
            this.enemy.poison = n.poison;
            this.enemy.poisonCount = false;
            this.enemy.stun = false;
            this.enemy.vamp = false;
            this.enemy.stunned = false;
        },
        setActiveBattle: function(){
            this.activeBattle = true;
        },
        setEnemyImage: function(image){
            this.enemyImage = image;
        },
        setHeroImage: function(image){
            this.heroImage = image;
        },
        setImage: function(newImage){
            this.backgroundImage = newImage;
        },
        setLocation: function(newLocation){
            this.location = newLocation;
            this.setImage(`pics/${newLocation}.jpg`);
            this.setHeroImage('');
        },
        setDirection: function(newDirection){
            this.direction = newDirection;
        },
        nextChapter: function(){
            this.chapter += 1;
            this.player.hp += 25;
        },
        setEnemyHp: function(num){
            this.enemy.hp = num
        },
        chooseClass: function(){
            this.setLocation('forest');
            document.getElementById('statText').textContent = "Hunter - Normal.";
            document.getElementById('text').textContent = "Fighter - Easy(dex -1, maxDMG +2)";
            document.getElementById('attText').textContent = "Farmer - Hard (dex -1, evade -1, maxDMG -1, maxHP +10)";
        },
        setFighter: function(){
            this.fighter = true;
            this.equip();
            this.player.hp = this.player.hpMax;
            document.getElementById('statText').textContent = "You have a lifetime of fighting experince giving you more resilience +25 hpMax,\
             but your large stature leaves you less nimble -1 evade";
        },
        setFarmer: function(){
            this.farmer = true;
            this.equip();
            this.player.hp = this.player.hpMax;
            document.getElementById('statText').textContent = "You're just a simple farmer -1 dex, -1 evade";
        },
        setHunter: function(){
            this.hunter = true;
        },
        enemyHit: function(){
            this.setEnemyImage(`pics/${this.enemy.name}.png`);
            this.strike = 'gifs/strike.gif'
        },
        heroHit: function(){
            this.setHeroImage('pics/hero1.png');
        },
        strikeAnimation: function(){
            this.setHeroImage('gifs/heroAttack.gif');
        },
        hitAnimation: function(){
            this.strikeAnimation();
            setTimeout(()=>{this.strikeAnimation(); this.enemyHit(); this.setHeroImage('gifs/hero1.gif');},750);
            setTimeout(()=>{this.strikeAnimation(); this.strike = ''; this.setEnemyImage(`gifs/${this.enemy.name}.gif`); this.setHeroImage('gifs/hero1.gif');},1000);
        },
        attack: function(){          
            //hit or miss
            let out = document.getElementById("text");
            let hit = Math.floor((Math.random() * this.enemy.toHit) + 1);
            //hit for random damage between min & max
            if (this.player.dex >= hit){
                this.hitAnimation();
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
                if(this.heroImage != 'gifs/heroAttack.gif'){
                    this.heroHit();
                    setTimeout(()=>{this.heroHit(); this.setHeroImage(`gifs/hero1.gif`)},750);
                }          
                let range = this.enemy.maxDmg - this.enemy.minDmg;
                let dmg = Math.floor((Math.random() * range) + this.enemy.minDmg);
                this.player.hp -= dmg;
                eOut.textContent = `${this.enemy.name} ${this.enemy.attack} for ${dmg} dmg`;
                if(this.enemy.vamp)
                    this.eVamp();
                else if(this.enemy.stun)
                    this.eStun();
                else if(this.enemy.poison)
                    this.ePoison();
                if(this.player.hp < 1)
                    this.playerKilled();     
            }
            //miss
            else{
                eOut.textContent = `${this.enemy.name} Misses!`;
            }
        },
        //player and enemy attack exchange
        battle: function(){
            document.getElementById("statText").textContent = '';
            this.attack();
            if(this.enemy.hp > 0){
                if(!this.enemy.stunned){
                    this.enemyAttack();     
                }
                else
                    this.enemy.stunned = false;
            } 
        },
        setBattCount: function(num){
            this.battleCount = num;
        },
        //number of battles, forest road takes 5 count
        battCount: function(){         
            this.battleCount += 1;
            console.log(this.battleCount);
        },
        enemyKilled: function(){
            ////////////////////////////////////// HERO WONT GO AWAY NOW ????//////
            setTimeout(()=>{this.strikeAnimation(); this.setEnemyImage(''); this.setHeroImage('gifs/hero1.gif')},800);
            document.getElementById("text").textContent = `You slayed the ${this.enemy.name}!`;
            document.getElementById("attText").textContent = `Gained ${this.enemy.gold} gold!`;
            //add spoils to player stats
            this.player.gold += this.enemy.gold;
            this.player.points += this.enemy.points;
            if(this.enemy.hp < 0){
                this.enemy.hp = 0;
            }
            this.battCount();
            this.activeBattle = false;
            
            if(this.enemy.name == 'Greasy Vandal' && this.npc.victim){
                this.vandalDeath();
                this.npc.victim = false;

            }
            //chaos demon kill glitch? happens on first enemy kill without location check//////////////////////////////////////////////
            if(this.enemy.name = 'Chaos Demon' && this.npc.chaosDemonBoss && this.location == 'mountain'){
                this.chaosDemonDeath();
                this.npc.chaosDemonBoss = false;
            }
            
        },
        playerKilled: function(){
            this.setEnemyImage(''); 
            this.setHeroImage('');
            document.getElementById("statText").textContent = "GAME OVER";
            document.getElementById("attText").textContent = '';
            document.getElementById("text").textContent = '';
            setTimeout(()=>{this.setHeroImage(''); location.reload()}, 2000);
        },
        flee: function(){
            let out = document.getElementById("text");
            let eOut = document.getElementById("attText");        
            //chance to flee, evade must be larger than random enemy
            //flee chance between minflee and maxflee
            let range = this.enemy.maxFlee - this.enemy.minFlee;
            let chance = Math.floor((Math.random() * range) + this.enemy.minFlee);
            if (this.player.evade > chance){     
                out.textContent = `You run away from the ${this.enemy.name}`;
                eOut.textContent = '';
                this.enemy.hp = 0;
                this.battCount();
                this.setHeroImage('');
                this.setEnemyImage('');
                this.activeBattle = false;
            }
            //did not flee
            else{
                out.textContent = "You try to run, but trip and fall on your face instead";
                if(this.enemy.hp > 0){
                    this.enemyAttack();
                }
            }
        },

        setExplosive: function(){
            let out = document.getElementById("text");
            //chapter 1
            if (this.player.gold >= 5){
                if(!this.dynamite){
                    this.dynamite = true;
                    this.player.gold -= 5;
                }
                else
                    out.textContent = "Only room for 1 in inventory";

            }
            else
                out.textContent = "Not enough gold";

        },
        explosive: function(){
            
            let out = document.getElementById("text");
            if (this.dynamite){
                if (this.chapter == 1){
                    this.enemy.hp -= 15;
                    out.textContent = `The explosion thits the ${this.enemy.name} for 15dmg`;
                }
                else if (this.chapter == 2){
                    this.enemy.hp -= 25;
                    out.textContent = `The explosion thits the ${this.enemy.name} for 25dmg`;
                }
                this.dynamite = false;
            }
            else
                out.textContent = "You have no explosives!";
            if(this.enemy.hp > 0){
                this.enemyAttack();
            }
            else{
                this.enemyKilled();
            }       
        },
        //gain amount of health from merchant or potion
        heal: function(n){
            let out = document.getElementById("text");
            this.player.hp += n;
            if (this.player.hp > this.player.hpMax){
                this.player.hp = this.player.hpMax;
                out.textContent = "Full health!";
            }
            else{
                out.textContent = `You heal for ${n}hp`
            }
        },
        //heal from merchant at merchant camp
        eelSauce: function(){
            let out = document.getElementById("text");
            //chapter 1
            if (this.player.hp < this.player.hpMax){
                if (this.location == 'merchantCamp'){
                    if(this.player.gold >= 8){
                        this.heal(50);
                        this.player.gold -= 8;
                    }
                    else
                    out.textContent = "Not enough gold";
                }
                else if (this.location == 'cityProper'){
                    if(this.player.gold >= 15){
                        this.heal(75);
                        this.player.gold -= 15;
                    }
                    else
                    out.textContent = "Not enough gold";
                }
            }
            else
                out.textContent = "Already at Full Health!"     
        },
        //purchase potion from merchant
        setSauce: function(){
            let out = document.getElementById("text");
            //chapter 1
            if (this.potion){
                out.textContent = "Only room for 1 in inventory";
            }
            else {
                if (this.location == 'merchantCamp'){
                    if(this.player.gold >= 5){
                        this.potion = true;
                        this.player.gold -= 5;  
                    }
                    else
                        out.textContent = "Not enough gold";
                }
                else if (this.location == 'cityProper'){
                    if(this.player.gold >= 8){
                        this.potion = true;
                        this.player.gold -= 8;
                    }
                    else
                        out.textContent = "Not enough gold";
                }
            }
        },
        //use potion in battle
        sauce: function(){       
            if(this.potion){
                if (this.chapter == 1)
                    this.heal(25);       
                else if (this.chapter == 2)
                    this.heal(50);
                this.potion = false;
            }
            else{
                document.getElementById("text").textContent = "You have no Sauce!";
            }
            this.enemyAttack();
        },
        eVamp: function(){
            this.enemy.hp += 1;
        },
        pVamp: function(){
            this.player.hp += 1;
        },
        eStun: function(){
            let stun = Math.floor((Math.random() * 7) + 1);
            if(stun % 7 == 0){
                document.getElementById("statText").textContent = "Stunned!";
                this.player.stunned = true;
            }
        },
        unStun: function(){
            this.player.stunned = false;
        },
        pStun: function(){
            let stun = Math.floor((Math.random() * 6) + 1);
            if(stun %6 == 0){
                document.getElementById("statText").textContent = `${this.enemy.name} stunned!`;
                this.enemy.stunned = true;
            }
        },
        ePoison: function(){
            let poison = Math.floor((Math.random() * 5) + 1);
            if(poison % 5 == 0 && this.player.poisonCount < 1){
                this.player.poisonCount = 3;
                document.getElementById("statText").textContent = "Poisoned!"
            }
            else if(this.player.poisonCount > 0){
                this.player.hp -= 2;
                this.player.poisonCount -= 1;
            }
        },
        pPoison: function(){
            let poison = Math.floor((Math.random() * 4) + 1);
            if(poison % 4 == 0 && this.enemy.poisonCount < 1){
                this.enemy.poisonCount = 3;
            }
            else if(this.enemy.poisonCount > 0){
                this.enemy.hp -= 2;
                this.enemy.poisonCount -= 1;
            }
        },
        
        merchantCamp: function(){
            let out = document.getElementById("statText");
            this.setLocation('merchantCamp');
            document.getElementById("attText").textContent = '';
            document.getElementById("text").textContent = '';
            if(this.npc.chaosDemonBoss){
                out.textContent = "There are a couple of Vendors hanging about...";
            }
            else{
                out.textContent = "Returning to the Merchant Camp, you are relieved to be walking among others again. \
                        Though, you can't help but feel an emptyness as if you lost a part of yourself on that mountain. \
                        You spot a man smiling at you from a distance and points South toward the City.";
            }
        },
        lake: function(){
            let out = document.getElementById("statText");
            document.getElementById("attText").textContent = '';
            this.setLocation('lake');
            if (this.npc.lady){
                out.textContent = "You find yourself standing at the edge of a large lake. \
                    This lake seems strangely out of place. Take a look around?";
            }
            else{
                out.textContent = "Once again, you arrive at the lake, though it does not feel the same as before";
            }
        },
        cityProper: function(){
            this.setLocation('cityProper');
            let out = document.getElementById("statText");
            document.getElementById("attText").textContent = '';
            document.getElementById("text").textContent = '';
            if(this.npc.chaosDemonBoss){
                out.textContent = "Inside the City walls, you see only a handful of people walking about \
                    and notice smoke rising from multiple buildings";
            }
            else{
                out.textContent = "You come to find a bustling city, scaffolding around the damaged biuldings, and \
                    the smell of sulpher has disappeared. At the end of the main road you spot a large wagon and a man \
                    busy loading it."
            }
        },
        home: function(){
            this.setLocation('home');
            document.getElementById("statText").textContent = "You're back home";
        },
        tombEntrance: function(){
            this.setLocation('tombEntrance');
            document.getElementById("statText").textContent = "You're at the Entrance to the Ancient Tomb";
        },
        mountainTop: function(){
            this.setLocation('mountain');
            document.getElementById("statText").textContent = '';
            document.getElementById("taxt").textContent = "The top of the mountain is a meandering trenchwork of jagged rock and snow covered boulders.\
                You feel a malicious presence stirring in the air. Take a look around?";
        },
        //npc encounters
        ladyFalse: function(){
            this.npc.lady = false;
            this.areas["lake"][2].name = 'Wolf';
        },
        vandalDeath: function(){
            document.getElementById('statText').textContent = "You wipe the blood from your blade and see the girl not far away. \
                She is shaken, but thanks you and gives you a kiss on the cheek." +
                "It felt so wonderful you breifly closed your eyes, and when you opened them she was gone. +25 Max HP!";
                this.player.hpMax += 25;
                this.player.hp += 25;
        },
        chaosDemonDeath: function(){
            document.getElementById('statText').textContent ="You swing!... and your blade cuts through empty air."
            + "an intense gust of wind throws you forward violently as the demon imploded!"
            + "A small piece of glowing ore has broken apart from the rest, and you pick it up."
            + "It is extremely heavy for its size, and you immediately feel a part of yourself being tied to this small gem."
            + "+25 Max HP! HP fully restored! + 50 gold!";
            this.player.hpMax += 25;
            this.player.hp = this.player.hpMax;
        },
        setEncounter: function(){       
            this.npcEncounter = true;
            this.activeBattle = false;
            this.enemyImage = '';
            this.holdName = this.enemy.name;
            console.log(this.holdName);
            this.setEnemy(this.enemyZero);
        },
        npcFalse: function(){
            this.npcEncounter = false;
            this.holdName = '';
            this.setEnemy(this.areas[this.location][this.rand]);
        },
        choiceEncounter: function(){
            //advance battle count immediately
            this.battCount();
            let out = document.getElementById('statText');
            //VANDAL MINI-BOSS
            if (this.holdName == "Greasy Vandal"){
                this.npcFalse();
                this.setActiveBattle();
                //decrement battle count by 1 if encountered, will increment at end of battle.
                this.setBattCount(this.battleCount -1);
                if(this.npc.victim){
                    out.textContent = "You come accross two Greasy Vandals attempting an unsavory act upon a young lady. \
                        You meet their eyes and your fist clenches your blade";
                    this.enemyImage = `gifs/vandal.gif`;              
                }
                else{
                    out.textContent = "Oh a penny! gold +1";
                    this.player.gold +=1;
                }
            }
             //CHAOS DEMON BOSS
            else if (this.enemy.name == "Chaos Demon"){
                if(this.npc.chaosDemonBoss){
                    this.npcFalse();
                    this.setActiveBattle();
                    this.setBattCount(this.battleCount -1);
                    out.textContent = "You stop in your tracks and regain your own sight, now realizing that you had lost it."
                    + "Filling your gaze is a huge creature, with slightly human form, though molten and amorphous."
                    + "Chaos Demon: Have you come all this way to seek revenge for your village in the forest?"
                    + "I am merely an agent of Chaos and make no decision against fate."
                    + "However, I can see into your mind and know that you desire revenge more than your life..."
                    + "Have at you!  Regen 50% MaxHP!";
                    this.enemyImage = `gifs/chaosDemon.gif`;
                    this.heal(this.player.hpMax / 2);
                    
                }
                else{
                    out.textContent = "Oh a penny! gold +1";
                    this.player.gold +=1;
                }
            }
            //GENERAL ENCOUNTER
            else{  
                this.npcFalse();        
                let x = Math.floor((Math.random() * 2) + 1);
                if (x == 2){
                    out.textContent  = `it was a ruse! ${this.enemy.name} attacks!`;
                    this.enemyImage = `gifs/${this.enemy.name}.gif`;
                    this.setActiveBattle();
                    this.setBattCount(this.battleCount -1);
                    this.enemyAttack();                               
                }
                else{
                    this.setHeroImage('');
                    ////////NEEDS TO BE UNIQUE FOR CERTAIN ENEMIES
                    if (this.enemy.name == "Wraith"){
                        this.player.gold += this.enemy.gold / 2;
                        out.textContent = `You find ${this.enemy.gold / 2} gold! that was too easy...`;
                    }
                    else if (this.enemy.name == "Thrall"){
                        this.player.gold += this.enemy.gold / 2;
                        out.textContent = `"You help the man gather what he needs and he is grateful for your help. \
                            He hands you ${this.enemy.gold / 2} gold for your help. that was too easy...`;
                    }
                    else if (this.enemy.name == "Bandit"){
                        this.player.gold += this.enemy.gold / 2;
                        out.textContent = `You spend the rest of the day helping the man fix his cart. \
                            He hands you ${this.enemy.gold / 2} gold for your help and company. that was too easy...`;
                    }
                }
            }
        },
        npcEnc: function(name){
            if(name == 'Lady of the Lake'){
                let out = document.getElementById("attText");
                this.setEncounter();
                out.textContent = "You see a ghostly woman walk gracefully from the lake. She approaches you, holding a faintly green glowing blade \
                in offering. You instanly feel refreshed in her gentle gaze. +50hp. Take the blade?";
                this.heal(50);
            }
            if(name == 'Random Merchant'){
                this.enemyImage = 'pics/randomMerchant.png';
            }

            if(name == 'Wraith'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = "Something shiny catches your eye... Check it out?";
            }
            if(name == 'Thrall'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = "A terrified looking man runs up to you from the West. \
                He says a small dragon tried to carry off his carriage to the mountain but dropped it on the way. \
                He desperately needs help getting his shit back together... Offer your help?";
            }
            if(name == 'Bandit'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = "A man is busy mending the wheel of his cart. Do you want to help?";
            }
            if(name == 'Mimic'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
            if(name == 'Murder Crows'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
            if(name == 'Greasy Vandal'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = "You hear a hushed scream from down the alley. Take a look?";
            }
            if(name == 'Chaos'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
            if(name == 'Chaos Demon'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = "A voice that is much different than your own begins to tug on your mind. \
                    Give in to  the foreign voice?";
            }
            if(name == 'Necro Horde'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
            if(name == 'Gryphon'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
            if(name == 'Litch King'){
                this.setEncounter();
                let eOut = document.getElementById('attText');
                let out = document.getElementById('statText');
                eOut.textContent = '';
                out.textContent = ""; ////////////////////////////FILL ME IN
            }
        },


        ////////////////  ITEM STUFF

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
        //set weapon. I feeel like this could be easier if there were a weapon data variable, lets try that later
        // if item already equipped, keep player from purchasing again(in html file hide/show on false)
        setShortSword: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 10){
                this.item.shortSword= true;
                this.player.gold -= 10;
                out.textContent = "Short Sword Equipped"
            }
            else{
                out.textContent = "Not Enough Gold";
            }
        },
        setLongSword: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 15){
                this.item.longSword= true;
                this.player.gold -= 15;
                out.textContent = "Long Sword Equipped. It's heavy!"
            }
            else{
                out.textContent = "Not Enough Gold";
            }
        },
        //cannot purchase phantom bane
        setPhantomBane: function(){
            this.item.phantomBane = true;
            document.getElementById("statText").textContent = "The old magic has left this ancient blade, but it's still sharp as ever";
        },
        setBastardSword: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 70){
                this.item.bastardSword = true;
                this.player.gold -= 70;
                out.textContent = "Gripping the pommel, a chill flows from your palm to the top of your head. \
                It feels as though you pulled this sword from its own grave";
            }
            else{
                out.textContent = "Not Enough Gold";
            }
            
        },
        setVoidRapier: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 60){
                this.item.voidRapier = true;
                this.player.gold -= 60;
                out.textContent = "Gripping the pommel, you feel a ghostly tentacle \
                weaving its way through the tendons of your forearm."
            }
            else{
                out.textContent = "Not Enough Gold";
            }     
        },
        setCoralKukri: function(){
            this.item.coralKukri = true;
        },
        setSoulTrapKatana: function(){
            this.item.soultrapKatana = true;
        },
        setLightningAxe: function(){
            this.item.lightningAxe = true;
        },
        setMagicDagger: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 30){
                this.item.magicDagger = true;
                this.player.gold -= 30;
                out.textContent = "Jeweled Dagger Equipped. It feels like it was made just for you."
            }
            else{
                out.textContent = "Not Enough Gold";
            }           
        },
        setMagicShield: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 30){
                this.item.magicShield = true;
                this.player.gold -= 30;
                out.textContent = "Crested Shield Equipped. Your chest swells with Vigor!"
            }
            else{
                out.textContent = "Not Enough Gold";
            }           
        },
        setParryingDagger: function(){
            this.item.parryingDagger = true;
        },
        setLeatherArmor: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 15){
                this.item.leatherArmor= true;
                this.player.gold -= 15;
                out.textContent = "Leather Armor Equipped";
            }
            else{
                out.textContent = "Not Enough Gold";
            }
        },
        setStuddedLeatherArmor: function(){
            this.item.studdedLeatherArmor = true;
        },
        setMBoots: function(){
            let out = document.getElementById("statText");
            if (this.player.gold >= 100){
                this.item.mercurialBoots= true;
                this.player.gold -= 100;
                out.textContent = "You feel light on your feet";
            }
            else{
                out.textContent = "Not Enough Gold";
            }
        },
        //happens at the time of purchase. sets new stats.
        equip: function(){

            //zero for buff reset.
                this.player.evade = 7;
                this.player.dex = 7;
                this.player.hpMax = 100;

            //main-hand weapons, player will always have main-hand weapon.
            if (this.item.shortSword){
                this.player.minDmg = 3;
                this.player.maxDmg = 6;
                this.weapon = 'Short Sword';
                
            }
            else if (this.item.longSword){
                this.player.minDmg = 4;
                this.player.maxDmg = 9;
                this.player.dex -= 1;
                this.weapon = 'Long Sword';
            }
            else if (this.item.phantomBane){
                this.player.minDmg = 5;
                this.player.maxDmg = 8;
                this.weapon = 'Phantom Bane';
            }
            else if (this.item.bastardSword){
                this.player.minDmg = 6;
                this.player.maxDmg = 12;
                this.player.dex -= 1;
                this.player.stun = true;
                this.weapon = 'Frozen Bastard Sword';
            }
            else if (this.item.coralKukri){
                this.player.minDmg = 6;
                this.player.maxDmg = 11;
                this.player.poison = true;
                this.weapon = 'Coral Kukri';
            }
            else if (this.item.voidRapier){
                this.player.minDmg = 5;
                this.player.maxDmg = 11;
                this.player.vamp = true;
                this.weapon = 'Void Rapier';
            }
            else if (this.item.soultrapKatana){
                this.player.minDmg = 7;
                this.player.maxDmg = 13;
                this.player.vamp= true;
                this.weapon = 'Soultrap Katana';
            }
            else if (this.item.lightningAxe){
                this.player.minDmg = 8;
                this.player.maxDmg = 13;
                this.player.stun = true;
                this.weapon = 'Lightning Axe';
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
            //reset special class stats
            if(this.farmer){
                this.player.evade -= 1;
                this.player.dex -= 1;
            }
            else if(this.fighter){
                this.player.evade -= 1;
                this.player.hpMax += 25;
            }
            if (this.player.hp > this.player.hpMax)
                this.player.hp = this.player.hpMax;
        }
    }
})