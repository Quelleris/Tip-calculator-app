const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector('#people');
const tipButtons = document.querySelectorAll('.tip-btn');
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

billInput.addEventListener("input", updateBillValue);

peopleInput.addEventListener("input", updatePeopleValue);

resetBtn.addEventListener("click", reset)


function updateBillValue() {
    billValue = (parseFloat(billInput.value) || 0);
    calculateTip();
}

function updatePeopleValue() {
    peopleValue = (parseFloat(peopleInput.value));
    if (peopleValue < 1) {
        error.style.display = "flex";
        peopleInput.style.border = "2px solid red";
        peopleInput.style.outline = "none";
    } else if (peopleInput.value !== 0) {
        error.style.display = "none";
        peopleInput.style.border = "none";
        calculateTip()
    }
}

tipButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
    tipButtons.forEach(btn => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");
    tipValue = e.currentTarget.dataset.value;
    calculateTip() 
})
});

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