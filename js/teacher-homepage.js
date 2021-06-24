let selectValue = document.querySelector(".ani-select")
let ruler = document.querySelector(".ruler")

let category = document.querySelector(".category")
let toggle = document.querySelector(".toggle")

function tabThis() {
    toggle.classList.add("correct")
    console.log("man")
}





selectValue.addEventListener('click', () => {
    rollThrough()
})


function rollThrough() {
    selectValue.classList.add("change")
    for(let i = 0; i < selectValue; i++){
        ruler[i].classList.add("change")
    }
    console.log("man")
}