const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx= 0;

function carrossel(){
    idx++;

    if(idx > img.length - 2){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1080}px)`;

}

setInterval(carrossel, 1800);