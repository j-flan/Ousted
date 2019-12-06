


function Enemy(enemy){

    this.name = enemy.name;
    this.ability = enemy.ability;
    this.hp = enemy.hp;
    this.attackStyle = enemy.attackStyle;
    this.killText = enemy.killText;
    this.deathFlavor = enemy.deathFlavor;
    this.minRange = enemy.minRange;
    this.maxRange = enemy.maxRange;
    this.minHit = enemy.minHit;
    this.maxHit = enemy.maxHit;
    this.minFlee = enemy.minFlee;
    this.maxFlee = enemy.maxFlee;
    this.toHit = enemy.toHit;
    this.gold = enemy.gold;
    this.points = enemy.points;

}
let getEnemy = () =>{

    return enemy;
}

let attack = (enemy) =>{

}
let flee = () =>{

}
let potion = () =>{

}
let dynamite = () =>{

}

let battle = () =>{

   // let enemyType = document.getElementById("enemy").value;
    //let enemy = new Enemy(enemyType);

    let attack = document.getElementById("attack");
    let flee = document.getElementById("flee");
    let potion = document.getElementById("potion");
    let dynamite = document.getElementById("dynamite");
    console.log(enemy.name, enemy.maxHit);

    if (attack){
        
    }
    else if (flee){

    }
    else if (potion){

    }
    else if (dynamite){

    }

}


window.addEventListener("load", battle, false);