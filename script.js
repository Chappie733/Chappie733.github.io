let yes_button;
let no_button;
var scale_no = 1;
var scale_yes = 1;

function onLoad() {
    yes_button = document.getElementById("button_yes");
    no_button = document.getElementById("button_no");
}

function onYesClick() {
    document.getElementById("main_img").src = "bear_hug.png"
    yes_button.style.visibility = "hidden";
    no_button.style.visibility = "hidden";
    document.getElementById("main-text").innerHTML = "Scelta giusta :))";
}

function onNoClick() {
    scale_no *= 0.9;
    scale_yes *= 1.1;
    no_button.style.scale = Math.max(scale_no, 0.6);

    if (scale_yes >= 1.8*1.1)
        no_button.style.visibility = "hidden";
    yes_button.style.scale = Math.min(scale_yes, 1.8);
}