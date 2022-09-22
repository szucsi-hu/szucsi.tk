function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;    
    
    if (amountNumber > 10) {
        alert("Maximum 10 terméket rendelhet!");
    }
    else if (amountNumber < 1) {
        alert("Minimum 1 terméket rendelni kell!");
    }
    else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}



let a = "Hol van a baba";   //létrehoztam egy változót "Hol van a baba" stringel

console.log(a.indexOf("baba"));  //a baba indexét ez esetben a 10 kiíratom (0-tól kezdjük a számolást)

console.log(a.replace("baba", "pénz"));  //kicserélem a a baba stringet a pénz stringre

let b = a.replace("baba", "pénz");  //létrehozok egy új változót amiben elmentem a módosítást

console.log(b); //kiíratom az új stringet

a = a.replace("baba", "pénz"); //felülírom az eredeti változómat

console.log(a);  //és kiíratom

//Igaz vagy hamis értékek - Boolean
let active = true;
console.log(active);
console.log(typeof active);
Boolean = (0);
false
Boolean = (3);
true
Boolean = (-333);
true
Boolean = ("Hello");
true
Boolean = ("");
false
