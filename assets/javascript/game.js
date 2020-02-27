$(document).ready(function() {

  var fighters = [
    luke = {name:"Luke",
            health: 120,
            attack: 8},
    hanSolo = {name:"Han",
            health: 100,
            attack: 5},
    vader = {name:"Vader",
            health: 150,
            attack: 20},
    palpy = {name:"Palpy",
            health: 180,
            attack: 25},
  ]
  var currentFighter;
  var currentEnemy;
  var pickedFighter = false;
  var enemyDead = false;
  var baseEnemyHealth;
  var winCounter = 0;

  function pickFighter(){
    $("#fight").hide();
    $(".fighter").one("click", function(){
      var id = $(this).attr("id");
      $(".fighter").off();
      if(id == "pL"){
        currentFighter = fighters[0];
        $("#pL").removeClass("avail");
        $("#uColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pV"));
        $("#aColumn").append($("#pP"));
        $("#lukeH").addClass("currentFH");
        $("#lukeA").addClass("currentFA");
      }else if(id == "pHS"){
        currentFighter = fighters[1];
        $("#pHS").removeClass("avail");
        $("#uColumn").append($("#pHS"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pV"));
        $("#aColumn").append($("#pP"));
        $("#hanH").addClass("currentFH");
        $("#hanA").addClass("currentFA");
      }else if(id == "pV"){
        currentFighter = fighters[2];
        $("#pV").removeClass("avail");
        $("#uColumn").append($("#pV"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pP"));
        $("#vaderH").addClass("currentFH");
        $("#vaderA").addClass("currentFA");
      }else if(id == "pP"){
        currentFighter = fighters[3];
        $("#pP").removeClass("avail");
        $("#uColumn").append($("#pP"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pV"));
        $("#palpyH").addClass("currentFH");
        $("#palpyA").addClass("currentFA");
      }
      $("#pL").removeClass("fighter");
      $("#pHS").removeClass("fighter");
      $("#pV").removeClass("fighter");
      $("#pP").removeClass("fighter");
      $("#start").hide();
      $("#fight").show();
      pickAvailFighter(id);
    });
  }
  function pickAvailFighter(){
    pickedFighter = false;
    $("#instruct").html("Pick Your Next Enemy")
    $(".avail").one("click",function(){
      if (pickedFighter == false){
        var id = $(this).attr("id");
        if (id == "pL"){
          currentEnemy = fighters[0]
          $("#cColumn").append($("#pL"));
          $("#pL").removeClass("avail").addClass("current");
          $("#lukeH").addClass("currentEH");
          $("#lukeA").addClass("currentEA");
        }else if (id == "pHS"){
          currentEnemy = fighters[1]
          $("#cColumn").append($("#pHS"));
          $("#pHS").removeClass("avail").addClass("current");
          $("#hanH").addClass("currentEH");
          $("#hanA").addClass("currentEA");
        }else if (id == "pV"){
          currentEnemy = fighters[2]
          $("#cColumn").append($("#pV"));
          $("#pV").removeClass("avail").addClass("current");
          $("#vaderH").addClass("currentEH");
          $("#vaderA").addClass("currentEA");
        }else if (id == "pP"){
          currentEnemy = fighters[3]
          $("#cColumn").append($("#pP"));
          $("#pP").removeClass("avail").addClass("current");
          $("#vaderH").addClass("currentEH");
          $("#vaderA").addClass("currentEA");
        }
        baseEnemyHealth = currentEnemy.health;
        pickedFighter = true;
      }
      fight();
    });

  }
  function fight(){
    enemyDead = false
    $(".currentEH").text(currentEnemy.health);
    currentEnemy.health = baseEnemyHealth;
    var baseAttack = currentFighter.attack;
    $("#instruct").html("Attack Your Enemy!")
    $("#attackButton").unbind().click(function(){
      if (enemyDead == false){
        currentEnemy.health -= currentFighter.attack;
        $(".currentEH").text(currentEnemy.health);
        if (currentEnemy.health <= 0){
          currentEnemy.health = 0;
          alert("You killed him!")
          currentEnemy.health = 0;
          $(".currentEH").text(currentEnemy.health);
          $("#dColumn").append($(".current"));
          $(".current").removeClass("current").addClass("dead");
          enemyDead = true;
          winCounter += 1;
          if (winCounter < 3){
            pickAvailFighter();
          }else if (winCounter >= 3){
            $(document).ready(function() {
              alert("You Win! Press ok to retart!")
              location.reload();
            });
          }
        }else{
          currentFighter.health -= currentEnemy.attack;
          $(".currentFH").text(currentFighter.health);
          currentFighter.attack += baseAttack;
          $(".currentFA").text(currentFighter.attack);
  
          if (currentFighter.health <= 0){
            alert("You died! Click ok to retry!")
            location.reload();
          }
        }
      }
    });
  }

  pickFighter();
});