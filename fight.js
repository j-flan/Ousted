function Enemy(enemy){

    this.name = enemy.name;
    this.ability = enemy.ability;
    this.hp = enemy.hp;
    this.attackStyle = enemy.attackStyle;
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

let attack = (enemy) =>{

}
let flee = () =>{

}
let potion = () =>{

}
let dynamite = () =>{

}

let getEnemy = () =>{

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var enemyList = JSON.parse(this.responseText);
            return enemyList;
        }
    };
}
let battle = () =>{
    
    let enemyObj = getEnemy();
    //let enemy = new Enemy(enemyList.location.forest.Bear);

    let attack = document.getElementById("attack");
    let flee = document.getElementById("flee");
    let potion = document.getElementById("potion");
    let dynamite = document.getElementById("dynamite");

    console.log(enemyObj);

    let enemy = JSON.stringify(enemyObj);
    console.log(enemy)

    let enemyArray = Array.from(enemy);
    console.log(enemyArray);
    //console.log(enemy.name, enemy.maxHit);

    if (attack){
        
    }
    else if (flee){

    }
    else if (potion){

    }
    else if (dynamite){

    }

}

let listeners = () =>{
    let btn = document.getElementById("continue");
    btn.addEventListener("click", battle, false);
}

window.addEventListener("load", listeners, false);