function checkNumber() {

    let num = document.getElementById("input").value;

    let result = document.getElementById("result");

    if (num > 0) {
        result.innerText = "this is a positive number";
    } else if (num < 0) {
        result.innerText = "this is a negative number";
    } else if (num == 0) {
        result.innerText = "zero";
    } else {
        result.innerText = "you have to type a number";
    }

}

function printArr() {

    let numA = document.getElementById("numA").value;
    let numB = document.getElementById("numB").value;
    let response = document.getElementById("array");
    let arr = "";

    numA = parseInt(numA);
    numB = parseInt(numB);

    if (numA < numB) {
        for (let i = numA; i <= numB; i++) {
            arr = arr + i + " ";
            response.innerText = arr;
        }

    } else if (numA > numB) {
        for (let i = numB; i <= numA; i++) {
            arr = arr + i + " ";
        }
        response.innerText = arr;
    } else {
        response.innerText = "you have to type numbers, and they have to be different"
    }

}

//--------------------------------------------------------slider

let slideNum = Math.floor(Math.random()*5)+1;
let timer1 = 0;
let timer2 = 0;

function pickSlide(num){
    clearTimeout(timer1);
    clearTimeout(timer2);
    slideNum = num - 1;

    hideSlide();
    setTimeout("changeSlide()", 500)
}

function hideSlide(){
    $("#slider").fadeOut(500);
}

function changeSlide(){
    slideNum++;
    if (slideNum > 5) {slideNum = 1};

    let file = "<img src=\"pics/" + slideNum + ".jpg\"/>";
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);

    timer1 = setTimeout("changeSlide()", 5000);
    timer2 = setTimeout("hideSlide()", 4500);
}