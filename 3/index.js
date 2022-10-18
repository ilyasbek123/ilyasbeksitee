const dino = document.getElementsByClassName('dino')
const cactus = document.getElementsByClassName('cactus')

document.addEventListener("keydown",function (event) {
    jump()
    
});
function jump (){
    if ( dino.classList ="jump"){
    dino.classList.add("jump")
    }
    setTimeout (function (){
        dino.classList.remove("jump")
    },300 )
}