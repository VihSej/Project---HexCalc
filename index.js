let hm = document.querySelector(".hm");
let menu = document.querySelector(".hm-menu");
let design = document.querySelector(".design");
let cd = document.querySelector(".calc-and-design");
let menuLoading = false;
let selectedOp = -1;
let firstArg = "";
let disVal = "0";
let disRes = "0";
let err = false;
let doubleNeg = false;

let copy = document.querySelector(".logo-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

hm.addEventListener("click", () => {
    if (menuLoading) return;

    if (menu.classList.contains("slide-left")) {
        menu.classList.remove("slide-left");
        menu.classList.add("menu-hidden");
        hm.classList.remove("crossed");
        hm.classList.add("stacked");
        document.querySelector(".sign-up").style.visibility = "visible";
        menuLoading = true;
    }
    else if (menu.classList.contains("menu-hidden")) {
        menu.classList.remove("menu-hidden");
        menu.classList.add("slide-left");
        hm.classList.remove("stacked");
        hm.classList.add("crossed");
        document.querySelector(".sign-up").style.visibility = "hidden";
        menuLoading = true;
    }
    setTimeout(() => {
        menuLoading = false;
    }, 250);
});

// Calculator Code

//query selectors
let b0 = document.querySelector(".b0");
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let bA = document.querySelector(".bA");
let bB = document.querySelector(".bB");
let bC = document.querySelector(".bC");
let bD = document.querySelector(".bD");
let bE = document.querySelector(".bE");
let bF = document.querySelector(".bF");

let bDivide = document.querySelector(".bDivide");
let bMult = document.querySelector(".bMult");
let bAdd = document.querySelector(".bAdd");
let bSub = document.querySelector(".bSub");
let bEq = document.querySelector(".bEq");
let bClear = document.querySelector(".bClear");
let bPosNeg = document.querySelector(".bPosNeg");
let display = document.querySelector(".calcDis");

display.innerHTML = disVal;
bClear.addEventListener("click", function () {
    display.innerHTML = "";
    for (let i = 0; i < 18; i++) {
        setTimeout(() => {
            display.innerHTML += "$";
        }, 10 * i);
    }
    setTimeout(() => {
        display.innerHTML = "0";
        disVal = "0";
        selectedOp = -1;
        show("0", 1);
    }, 300);
});

b0.addEventListener("click", function () {

    if (selectedOp === -1){
        if (((disVal === "0") || (disVal === NaN))) {
            disVal = "0";
            show(disVal, 1);        }
        else { disVal += "0"; show("0", 0) }
    }
    else {
        disVal += "0";
        show("0", 0)
    }
        
});
b1.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) {
            disVal = "1";
            show(disVal, 1); 
        }
        else { disVal += "1"; show(disVal, 1);  }
    }
    else {
        disVal += "1";
        show("1", 0)
    }
});
b2.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "2"; show(disVal, 1);  }
        else { disVal += "2"; show(disVal, 1);  }
    }
    else {
        disVal += "2";
        show("2", 0)
    }

});
b3.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "3"; show(disVal, 1);  }
        else { disVal += "3"; show(disVal, 1);  }
        }
    else {
        disVal += "3";
        show("3", 0)
    }
});
b4.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "4"; show(disVal, 1);  }
        else { disVal += "4"; show(disVal, 1);  }
            }
    else {
        disVal += "4";
        show("4", 0)
    }

});
b5.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "5"; show(disVal, 1);  }
        else { disVal += "5"; show(disVal, 1);  }
            }
    else {
        disVal += "5";
        show("5", 0)
    }

});
b6.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "6"; show(disVal, 1);  }
        else { disVal += "6"; show(disVal, 1);  }
            }
    else {
        disVal += "6";
        show("6", 0)
    }
});
b7.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "7"; show(disVal, 1);  }
        else { disVal += "7"; show(disVal, 1);  }
            }
    else {
        disVal += "7";
        show("7", 0)
    }
});
b8.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "8"; show(disVal, 1);  }
        else { disVal += "8"; show(disVal, 1);  }
            }
    else {
        disVal += "8";
        show("8", 0)
    }
});
b9.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "9"; show(disVal, 1);  }
        else { disVal += "9"; show(disVal, 1);  }
            }
    else {
        disVal += "9";
        show("9", 0)
    }
});
bA.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "A"; show(disVal, 1);  }
        else { disVal += "A"; show(disVal, 1);  }
            }
    else {
        disVal += "A";
        show("A", 0)
    }
});
bB.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "B"; show(disVal, 1);  }
        else { disVal += "B"; show(disVal, 1);  }
            }
    else {
        disVal += "B";
        show("B", 0)
    }
});
bC.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "C"; show(disVal, 1);  }
        else { disVal += "C"; show(disVal, 1);  }
            }
    else {
        disVal += "C";
        show("C", 0)
    }
});
bD.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "D"; show(disVal, 1);  }
        else { disVal += "D"; show(disVal, 1);  }
            }
    else {
        disVal += "D";
        show("D", 0)
    }
});
bE.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "E"; show(disVal, 1);  }
        else { disVal += "E"; show(disVal, 1);  }
            }
    else {
        disVal += "E";
        show("E", 0)
    }
});
bF.addEventListener("click", function () {
    if (selectedOp === -1){
        if ((disVal === "0") || (disVal === "NaN")) { disVal = "F"; show(disVal, 1);  }
        else { disVal += "F"; show(disVal, 1);  }
            }
    else {
        disVal += "F";
        show("F", 0)
    }
});
bAdd.addEventListener("click", function () {
    selectedOp = 0;
    firstArg = disVal;
    show(disVal+"+", 1);
    disVal = "";
});
bSub.addEventListener("click", function () {
   if(selectedOp === -1){
    selectedOp = 1;
    firstArg = disVal;
    show(disVal+"-", 1);
    disVal = "";
    }
    else {
        disVal = "-";
        show("-", 0)
    }
});
bMult.addEventListener("click", function () {
    selectedOp = 2;
    firstArg = disVal;
    show(disVal+"*", 1);
    disVal = "";
});
bDivide.addEventListener("click", function () {
    selectedOp = 3;
    firstArg = disVal;
    show(disVal+"/", 1);
    disVal = "";
});
bEq.addEventListener("click", function () {
    let acc = 0;
    let finalV = 0;
    switch (selectedOp) {
        case 0:
            acc = hexStrToDec(firstArg);
            finalV = acc + hexStrToDec(disVal);
            break;
        case 1:
            acc = hexStrToDec(firstArg);
            finalV = acc - hexStrToDec(disVal);
            break;
        case 2:
            acc = hexStrToDec(firstArg);
            finalV = acc * hexStrToDec(disVal);
            break;
        case 3:
            console.log("second arg is: " + disVal);
            acc = hexStrToDec(firstArg);
            if (hexStrToDec(disVal) !== 0) {
                finalV = acc / hexStrToDec(disVal);
                if(finalV % 1 !==0) {
                    err = true;
                    display.innerHTML = "UNSUPPORTED";
                    setTimeout(()=>{
                        bClear.dispatchEvent(new Event("click"));
                        err = false;
                    }, 1000);
                }
            }
            else {
                err = true;
                display.innerHTML = "ERROR";
                setTimeout(()=>{
                    bClear.dispatchEvent(new Event("click"));
                    err = false;
                }, 1000);
            }
            break;
    }
    selectedOp = -1;
        if(!err){
            disVal = decStrToHex(finalV);
            show(disVal, 1)
        }
});
bPosNeg.addEventListener("click", function () {

    if(selectedOp !== -1 && disVal === ""){
        bClear.dispatchEvent(new Event("click"));
    }

    if(disVal === "0") return;
    let decV = hexStrToDec(disVal);
    if(decV > 0 && selectedOp === 1) {
        disRes = disRes.substring(0, disRes.length-2);
        show(disRes+"+"+disVal, 1)
        selectedOp = 0;
    }
    else 
    decV *= -1;
    if(selectedOp !== -1) {
        let l1 = disVal.length;
        show(disRes.substring(0, disRes.length - l1), 1);
    }
    disVal = decStrToHex(decV);
    if ((disVal !== "0") && selectedOp === -1) {
        show(disVal, 1)
    }
    else{
        show(disVal, 0)
    }

});

function show(hexStr, mode) {
    if(mode === 0) {
        disRes += hexStr;
        display.innerHTML = disRes;
    }
    else if(mode === 1) {
        disRes = hexStr;
        display.innerHTML = disRes;
    }
}
function hexStrToDec(hexStr) {
    let l = hexStr.length;
    let pos = true;
    if (hexStr[0] === "-") pos = false;
    let end = pos ? 0 : 1;
    let pow = 0;
    let dec = 0;
    for (let i = l - 1; i >= end; i--) {
        dec += (parseInt(hexStr[i], 16) * Math.pow(16, pow));
        pow++;
    }
    if (!pos) dec = dec * (-1);
    return dec;
}

function decStrToHex(dec) {
    if (dec === 0) return "0";
    let neg = false;
    if (dec < 0) {
        neg = true;
        dec = dec * (-1);
    }
    let decC = dec;
    let arr = [];
    while (decC !== 0) {
        let x = decC % 16;
        arr.push(x);
        decC = Math.floor(decC / 16);
    }
    arr.reverse();
    let hexStr = "";
    if (neg) hexStr += "-";
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] <= 9) hexStr += arr[j];
        else {
            switch (arr[j]) {
                case 10: hexStr += "A"; break;
                case 11: hexStr += "B"; break;
                case 12: hexStr += "C"; break;
                case 13: hexStr += "D"; break;
                case 14: hexStr += "E"; break;
                case 15: hexStr += "F"; break;
            }
        }
    }
    return hexStr;
}
