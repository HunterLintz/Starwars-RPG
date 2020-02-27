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

  function pickFighter(){
    $("#fight").hide();
    $(".fighter").one("click", function(){
      var id = $(this).attr("id");
      $(".fighter").off();
      if(id == "pL"){
        currentFighter = fighters[0];
        $("#pL").removeClass("fighter avail").addClass("you");;
        $("#pHS").removeClass("fighter");
        $("#pV").removeClass("fighter");
        $("#pP").removeClass("fighter");
        $("#uColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pV"));
        $("#aColumn").append($("#pP"));
        alert("You picked Luke!");
      }else if(id == "pHS"){
        currentFighter = fighters[1];
        $("#pHS").removeClass("fighter avail").addClass("you");;
        $("#pL").removeClass("fighter");
        $("#pV").removeClass("fighter");
        $("#pP").removeClass("fighter");
        $("#uColumn").append($("#pHS"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pV"));
        $("#aColumn").append($("#pP"));
        alert("You picked Han Solo!");
      }else if(id == "pV"){
        currentFighter = fighters[2];
        $("#pV").removeClass("fighter avail").addClass("you");;
        $("#pL").removeClass("fighter");
        $("#pHS").removeClass("fighter");
        $("#pP").removeClass("fighter");
        $("#uColumn").append($("#pV"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pP"));
        alert("You picked Darth Vader!");
      }else if(id == "pP"){
        currentFighter = fighters[3];
        $("#pP").removeClass("fighter avail").addClass("you");;
        $("#pL").removeClass("fighter");
        $("#pHS").removeClass("fighter");
        $("#pV").removeClass("fighter");
        $("#uColumn").append($("#pP"));
        $("#aColumn").append($("#pL"));
        $("#aColumn").append($("#pHS"));
        $("#aColumn").append($("#pV"));
        alert("You picked Emperor Palpy!");
      }
      $("#start").hide();
      $("#fight").show();
      pickAvailFighter();
    });
  }
  function pickAvailFighter(id){

    $(".avail").one("click",function(){
      alert("You picked a fighter!")
    });

  }

  pickFighter();
});