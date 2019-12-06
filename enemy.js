
/*var enemyName =["Bear","Goblins","Elf","Naked Bums","Bandit","Marauder","Wolves","Wraith","Mud Man","PooPoo","Leech"
                ,"Thief", "Thrall", "Wyvren", "Fire Sprite", "Mimic", "Mountain Troll", "Bat", "Fern", "Zombie",
                "Panther", "Viper", "Malboro", "Litchling", "Murder Crows", "Banshee", "Air Elemental", "Crystal Scorpion",
                "Phantom", "Will-o'-the-wisp", "Tarantroll", "Komodo Ants", "Doppleganger", "Minibears", "Hag Witch",
                "Mush Man", "Centaur", "Drunkass", "Sewer Rat", "Cultist", "Scarabs", "Pit Viper", "Spectre", "Chimera",
                "Stone Golem", "Chaos Elemental", "Omega Troll", "Sand Man", "Fire Bat"];

var bossName =["Greasy Vandal", "Litch King", "Gryphon", "Necro Horde", "Chaos Demon", "Chaos"];*/


let getEnemy = () =>{

    //HTTP request will go here

    let enemy = document.getElementById("enemy");

}
let listeners = () =>{
    let btn = document.getElementById("continue");
    btn.addEventListener("click", getEnemy, false);
}

window.addEventListener("load", listeners, false);