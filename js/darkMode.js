// get HTML elements
const html = document.documentElement;
const button = document.querySelector("#buttonContainer_btn");

// dark event
button.addEventListener("click", () => {
    
    if(document.getElementById("dark")) {
        html.removeAttribute("id");
    } else {
        html.setAttribute("id", "dark");
    }

});