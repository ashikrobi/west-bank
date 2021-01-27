//login button event handler
document.getElementById('login').addEventListener('click', function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block";
})
//deposit button event handler
document.getElementById('add-deposit').addEventListener('click', function(){
    let depositInNumber = parseFloat(document.getElementById('deposit-amount').value);
    let currentDepositNumber = parseFloat(document.getElementById('current-deposit').innerText);
    let total = depositInNumber + currentDepositNumber;
    document.getElementById('current-deposit').innerText = total;
    document.getElementById('deposit-amount').value = '';
    //update balance as well
    let currentBalanceInNumber = parseFloat(document.getElementById("current-balance").innerText);
    let updatedBalance = currentBalanceInNumber + depositInNumber;
    document.getElementById('current-balance').innerText = updatedBalance;
})