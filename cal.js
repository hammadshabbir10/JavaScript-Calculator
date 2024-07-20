let subrow1 = document.querySelector(".subrow1");
let subrow2 = document.querySelector(".subrow2");

let row1 = document.getElementById("row1");
let row2 = document.getElementById("row2");
let row3 = document.getElementById("row3");
let row4 = document.getElementById("row4");
let row5 = document.getElementById("row5");


let result = '';
let input = '';


const validation = ()=> {
    const sign = input[input.length - 2];
    if(sign === '/' || sign === '-' || sign === '+' || sign === '*' || sign === '.')
    {
        input = input.slice(0, -1);
    }
}

const displaySubRow2 = ()=> {
    subrow2.innerHTML = input;
}

const answer = ()=>{
    if(input.length === 0){
        screen2.innerHTML = '';
    }
    if(input[0] === '0' && input[1] !== '.' && input.length > 1) {
        input = input.slice(1);
    }
    result = +(eval(input)).toFixed(2);
    input += ` = ${result}`;
    subrow1.innerHTML = input;
    subrow2.innerHTML = result;
    input = '';
}


const calculate = ()=> {
    row1.children[0].addEventListener("click", ()=> {
        console.log("button clicked");
        input = '';
        displaySubRow2();
    });

    row1.children[1].addEventListener("click", ()=> {
        console.log("button clicked");
        input = input.slice(0, -1);
        displaySubRow2();
    });

    row1.children[2].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '/';
        validation();
        displaySubRow2();
    });

    row2.children[0].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '7';
        displaySubRow2();

    });

    row2.children[1].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '8';
        displaySubRow2();
    });

    row2.children[2].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '9';
        displaySubRow2();
    });

    row2.children[3].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '*';
        validation();
        displaySubRow2();
    });

    row3.children[0].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '4';
        displaySubRow2();
    });

    row3.children[1].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '5';
        displaySubRow2();
    });

    row3.children[2].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '6';
        displaySubRow2();

    });

    row3.children[3].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '-';
        validation();
        displaySubRow2();
    });

    row4.children[0].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '1';
        displaySubRow2();
    });

    row4.children[1].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '2';
        displaySubRow2();
    });

    row4.children[2].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '3';
        displaySubRow2();
    });

    row4.children[3].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '+';
        validation();
        displaySubRow2();
    });

    row5.children[0].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '.';
        validation();
        displaySubRow2();
    });

    row5.children[1].addEventListener("click", ()=> {
        console.log("button clicked");
        input += '0';
        displaySubRow2();
    });

    row5.children[2].addEventListener("click", ()=> {
        console.log("button clicked");
        answer();
    });


}

calculate();

document.addEventListener("DOMContentLoaded", () => {
    const gradientButtons = document.querySelectorAll(".gradient-btn");
    const body = document.body;

    gradientButtons.forEach(button => {
        button.addEventListener("click", () => {
            const gradient = button.getAttribute("data-gradient");
            body.style.background = gradient;
            body.style.setProperty("--button-gradient", gradient);
        });
    });
});



/*
const calculate = () => {
    row1.getElementsByClassName("calc-btn")[2].querySelector("button").addEventListener("click", () => {
        console.log("button clicked");
        input += '/';
        displaySubRow2();
    });
}
*/