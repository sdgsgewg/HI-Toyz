const button = document.querySelector(".read-more");
const text = document.querySelector(".brief");

button.addEventListener("click", (e) => {
    text.classList.toggle("show-more");

    if(button.innerText === "Read More"){
        button.innerText = "Read Less";
    } 
    else{
        button.innerText = "Read More";
    }

});