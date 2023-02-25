window.onload = function(){
    document.getElementById('open_menu').onclick = function(){
        let x = document.querySelector(".sidebar-menu");
        x.classList.add("open");
    };

    document.getElementById('close_menu').onclick = function(){
        let u = document.querySelector(".sidebar-menu");
        u.classList.remove("open");
        u.classList.add("close");
    };
};

//Script for modal

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
} 

