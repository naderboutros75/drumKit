var numOfDrumButtoms = document.querySelectorAll(".drum").length;


for (let i = 0; i < numOfDrumButtoms; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        switch (this.innerHTML) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            default: console.log();
                break;
        }
    });

}




// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();




// var drums = document.querySelectorAll(".drum");
// var names = ["crash", "kick", "snare", "tom1", "tom2", "tom3", "tom4"];
// //Renamed .mp3 files and .png files to have the same corresponding name

// var audio = [];


// for (let i = 0; i < drums.length; i++) {

//     drums[i].style.backgroundImage = "url(./images/" + names[i] + ".png)";

//     drums[i].addEventListener("click", function () {
//         audio[i] = new Audio("./sounds/" + names[i] + ".mp3")
//         audio[i].play();
//     });
// }
