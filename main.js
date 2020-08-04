const myAudio = document.getElementsByTagName('audio');
const myButton = document.getElementById('myButton');
const myBody = document.querySelector('body')

// add class "sound" to audio elements
for (let i = 0; i < myAudio.length; i++) {

    myAudio[i].classList.add('sound');

};

window.addEventListener('load', () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6068d3",
        "#f546bb",
    ]

    // playing sounds
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    // bubbles functions
    const createBubbles = function (index) {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function (){
            visual.removeChild(this);
        });
    };
});

// dark mode function

function darkMode() {

        myButton.textContent = "light mode"
        myBody.classList.remove('body-light')
        myBody.classList.add('body-dark')
        myButton.classList.remove('button-light')
        myButton.classList.add('button-dark')

}

// light mode function

function lightMode() {

    myButton.textContent = "dark mode"
    myBody.classList.remove('body-dark')
    myBody.classList.add('body-light')
    myButton.classList.remove('button-dark')
    myButton.classList.add('button-light')
    
}

// activeting the functions

myButton.addEventListener('click', () => {
    if (myButton.textContent == "dark mode") {

        darkMode()
    
    } else if (myButton.textContent == "light mode") {
         lightMode()
    }
})






