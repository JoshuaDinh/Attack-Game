let GameManager = {
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        switch(classType){
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
          
            case "Rogue":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
          
            case "Mage":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
         
            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
    }   
    let getInterface = document.querySelector('.Interface');
    getInterface.innerHTML='<img src = "images/image-avatar/' + classType.toLowerCase() +  '.jpeg" class= "image-avatar"><div><h3>' + classType+ '</h3><p class = "health-player>Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p> </div>';           
 },
    setPreFight: function(){
       let getHeader = document.querySelector(".Header");
        let getActions = document.querySelector(".Actions");
        let  getArena = document.querySelector(".Arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = 'visible';
    },
    setFight: function (){
        let getHeader = document.querySelector(".Header");
        let getActions = document.querySelector(".Actions");
        let getEnemy= document.querySelector(".Enemy");

        //Create Enemy!
        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("BloodTroll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch(chooseRandomEnemy) {
            case 0 :
                enemy = enemy00;
                break;
            case 1 :
                enemy = enemy01;
                break;    
        }
        getHeader.innerHTML = '<p>Task: choose your Move</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack</a>'
        getEnemy.innerHTML = '<img src = "images/enemy-avatar/' + enemy.enemyType.toLowerCase() +  '.jpeg" alt = " ' + enemy.enemyType + '" class="image- avatar"><div><h3>' + enemy.enemyType+ '</h3><p class="enemy-health">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p> </div>';     
    }
}