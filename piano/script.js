const keys = document.querySelectorAll(".board .key");
const toggle = document.querySelector(".toggle input")
let audio = new Audio("sounds/sounds/a.mp3");


const playSound = (key) =>{
    audio.src = `sounds/sounds/${key}.mp3`;
    audio.play();

    const touchEffect = document.querySelector(`[data-key = "${key}"]`);
    touchEffect.classList.add("active");

    setTimeout( ()=> {
    touchEffect.classList.remove("active");
    }, 145)
}



keys.forEach(key => {
    key.addEventListener("click" , () => {
        playSound(key.dataset.key);

        
    })
    
    
});

toggle.addEventListener("click", () =>{
   let body = document.querySelector("body");
   body.classList.toggle('alternate-bg');
    let heading = document.querySelector(".heading");
    heading.classList.toggle('alternate-bg');
   
} );
