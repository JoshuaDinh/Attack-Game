let player;

function Player(classType,health,mana,strength,agility,speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;


let PlayerMoves = {
    calcAttack: function(){
        //Who Attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    
    //Player Attacks!
    let playerAttack = function() {
        let calcBaseDamage;
        if (player.mana > 0){
            calcBaseDamage = player.strength * player.mana / 1000;
        } else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let  calcOutputDamage = calcBaseDamage + offsetDamage;
        // # of Hits
        let offsetDamagenumberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //Enemy Attacks!
    let enemyAttack = function() {
        let calcBaseDamage;
        if (enemy.mana > 0){
            calcBaseDamage = enemy.strength * enemy.mana / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let  calcOutputDamage = calcBaseDamage + offsetDamage;
        // # of Hits
        let offsetDamagenumberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    //Get health to change
    let getPlayerhealth = document.querySelector(".health-player");
    let getEnemyhealth = document.querySelector(".enemy-health");
    //Initiate attacks! 
    if(getPlayerSpeed >= getEnemySpeed){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("you hit" + playerAttackValues[0]+"damage" +playerAttackvalues[1] + "time.s");
        if (enemy.health <= 0) {
            alert(" You win! Refresh your browser to play again");
            getPlayerhealth.innerHTML = "health: "+ player.health;
            getEnemyhealth.innerHTML = "health: 0";
         } else {
            getEnemyHealth.innerHTML = "health: "+ enemy.health;
            //Enemy Attacks!
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit" + enemyAttackValues[0]+"damage" +enemyAttackvalues[1] + "time.s");
        if (player.health <= 0) {
            alert(" You win! Refresh your browser to play again");
            getenemyhealth.innerHTML = "health: "+ enemy.health;
            getPlayerhealth.innerHTML = "health: 0";
         } else {
            getPlayerhealth.innerHTML = 'Health: ' + player.healthe;
         }
      }
    }
 }

}}
