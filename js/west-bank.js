//login button event handler
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
})
//deposit button event handler
document.getElementById('add-deposit').addEventListener('click', function(){
    let depositInNumber = parseFloat(document.getElementById('deposit-amount').value);
    // let currentDepositNumber = parseFloat(document.getElementById('current-deposit').innerText);
    // let total = depositInNumber + currentDepositNumber;
    // document.getElementById('current-deposit').innerText = total;
    //we made a function with commented codes sow we can eliminate repetition
    updateSpanText('current-deposit', depositInNumber);
    document.getElementById('deposit-amount').value = '';
    //update balance as well
    updateSpanText('current-balance', depositInNumber);
})

//withdraw button event handler
document.getElementById('add-withdraw').addEventListener('click', function(){
    // let withdrawInNumber = parseFloat(document.getElementById('withdraw-amount').value);
    let withdrawAmountInNumber = getInputNumber('withdraw-amount');
    updateSpanText('current-withdraw', withdrawAmountInNumber);
    updateSpanText('current-balance', -1 * withdrawAmountInNumber);
    
    document.getElementById('withdraw-amount').value = '';
})
function getInputNumber(id) {
    let inputNumber = parseFloat(document.getElementById(id).value);
    return inputNumber;
}

function updateSpanText(id , depositInNumber) {
    let currentNumber = parseFloat(document.getElementById(id).innerText);
    let total = currentNumber + depositInNumber;
    document.getElementById(id).innerText = total;
}
