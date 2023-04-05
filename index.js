
//Manera para hacer que los funciones operen con los botones sin loop
// document.querySelector("button").addEventListener("click", function handleClick() {alert("i got clicked.");});
// document.querySelectorAll("button")[0].addEventListener("click", handleClick);
// document.querySelectorAll("button")[1].addEventListener("click", handleClick);
// document.querySelectorAll("button")[2].addEventListener("click", handleClick);
// document.querySelectorAll("button")[3].addEventListener("click", handleClick);
// document.querySelectorAll("button")[4].addEventListener("click", handleClick);
// document.querySelectorAll("button")[5].addEventListener("click", handleClick);
// document.querySelectorAll("button")[6].addEventListener("click", handleClick);



//manera para hacer loops con la funcion de los botones
// for (var i = 0 ; i < document.querySelectorAll(".drum").length); Se puede hacer de esta manera corta sencilla y rapida


//Detector de alguna tecla
var numberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < numberOfDrumButton; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

});

}


//Detectando alguna tecla
document.addEventListener("keydown", function (event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w": var tom1 = new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;

    case "a": var tom2 = new Audio('sounds/tom-2.mp3');
               tom2.play();
               break;

    case "s": var tom3 = new Audio('sounds/tom-3.mp3');
               tom3.play();
               break;

    case "d": var tom4 = new Audio('sounds/tom-4.mp3');
              tom4.play();
              break;

    case "j": var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;

    case "k": var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;

    case "l": var kickBass = new Audio('sounds/kick-bass.mp3');
                kickBass.play();
                break;

    default: console.log(key);
  }
}

function buttonAnimation (currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
