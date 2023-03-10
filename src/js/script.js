const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector('#people');
const tipButtons = Array.from(document.querySelectorAll('.tip-btn'));
const tipAmountElem = document.querySelector('#tip-amount');
const totalElem = document.querySelector('#total');
const resetBtn = document.querySelector("#reset-btn");
const customTipInput = document.querySelector("#custom-tip-btn");
const error = document.querySelector("#people-error");

billInput.value = "";
peopleInput.value = "";
tipAmountElem.textContent = "$" + (0.0).toFixed(2);
totalElem.textContent = "$" + (0.0).toFixed(2);

let tipValue = 0;
let billValue = 0.0;
let peopleValue = 1;

billInput.addEventListener("input", updateBill);

peopleInput.addEventListener("input", updatePeople);

tipButtons.forEach(btn => addEventListener("click", updateTip));

resetBtn.addEventListener("click", reset)

function updateBill() {
        billValue = (parseFloat(billInput.value) || 0);
        calculateTip(); }

function updatePeople() {
    peopleValue = (parseFloat(peopleInput.value) || 0);

    if (peopleValue < 1) {
        error.style.display = "flex";
        peopleInput.style.border = "2px solid red";
        peopleInput.style.outline = "none";
    } else if (peopleValue !== "") {
        error.style.display = "none";
        peopleInput.style.border = "none";
        calculateTip()
    }
}

function updateTip(e) {
    tipButtons.forEach(btn => btn !== e.target && btn.classList.remove("active"));
    e.target.classList.add("active");
    tipValue = e.target.dataset.value;
    calculateTip()
}

function calculateTip() {
    if (billValue > 0 && peopleValue > 0 && tipValue !== undefined) {
        console.log(billValue, peopleValue, tipValue)
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue / peopleValue) + tipAmount;
        console.log(tipAmount)
        tipAmountElem.textContent = "$" + tipAmount.toFixed(2);
        totalElem.textContent = "$" + total.toFixed(2);
    } else {
        tipAmountElem.textContent = "$" + (0.0).toFixed(2);
        totalElem.textContent = "$" + (0.0).toFixed(2);
    }
}

function reset() {
    billValue = 0;
    peopleValue = 1;
    tipValue = 0;
    billInput.value = "";
    peopleInput.value = "";
    customTipInput.value = "";
    tipAmountElem.textContent = "$" + (0.0).toFixed(2);
    totalElem.textContent = "$" + (0.0).toFixed(2);
}




