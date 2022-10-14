let firstImgDiv = document.querySelector('.second_div');
let secondImgDiv = document.querySelector('.second_divimg2');
let thirdImgDiv = document.querySelector('.second_divimg3');
//set timer
console.log(firstImgDiv)

console.log(100)
let timer = setInterval(function () {
    if (firstImgDiv.hidden == false) {
        firstImgDiv.hidden = true;
        secondImgDiv.hidden = false;
    } else if (secondImgDiv.hidden == false) {
        secondImgDiv.hidden = true;
        thirdImgDiv.hidden = false;

    } else if (thirdImgDiv.hidden == false) {
        thirdImgDiv.hidden = true;
        firstImgDiv.hidden = false;
    }
}, 3000);

let buy_ticket_btn = document.querySelector("#onclick");
let buy_ticket_btn1 = document.querySelector("#onclick1");
let buy_ticket_btn2 = document.querySelector("#onclick2");
let is_hidden = false;
let popup = document.querySelector(".buy_ticket_template");
buy_ticket_btn.addEventListener('click', function () {
    popup.hidden = false;
    let xBtn = document.querySelector(".x");

    xBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});
// second button
buy_ticket_btn1.addEventListener('click', function () {
    popup.hidden = false;
    let xBtn = document.querySelector(".x");
    xBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});
//third button 
buy_ticket_btn2.addEventListener('click', function () {
    popup.hidden = false;
    let xBtn = document.querySelector(".x");
    xBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});
//closee 
let xxBtn = document.querySelector(".xx");
console.log(xxBtn)
buy_ticket_btn2.addEventListener('click', function () {
    popup.hidden = false;
    let xxBtn = document.querySelector(".xx");
    xxBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});
//second close
buy_ticket_btn.addEventListener('click', function () {
    popup.hidden = false;
    let xxBtn = document.querySelector(".xx");
    xxBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});
///third btn
buy_ticket_btn1.addEventListener('click', function () {
    popup.hidden = false;
    let xxBtn = document.querySelector(".xx");
    xxBtn.addEventListener('click', function () {
        popup.hidden = true;
    });
});

