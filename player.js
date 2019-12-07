    
function Player(player){
    this.gold = player.gold;
    this.hp = player.hp;
    this.hpMax = player.hpMax;
    this.minDmg = player.minDmg;
    this.maxDmg = player.maxDmg;
    this.dex = player.dex;
    this.evade = player.evade;
}

let Location = (place) =>{
    let where = document.getElementById("location");
    where.style.display = "none";
    where.textContent = place;      
}

let playerStart = () =>{
    let startPlayer = {gold: 0, hp: 100, hpMax: 100, minDmg: 2, maxDmg: 5, dex: 7, evade: 7};
    let newPlayer = new Player(startPlayer);
    Location("start");
    console.log(newPlayer);
    return newPlayer;
}


//will be on change in future
window.addEventListener("load", playerStart, false);