function getValues()
{
    //get value from input fields 
    var loanAmount = parseInt(document.getElementById("loanAmount").value);
    var termAmount = parseInt(document.getElementById("termAmount").value);
    var interestRate = parseFloat(document.getElementById("interestAmount").value/1200);

    moPay = monthlyPayments(loanAmount,termAmount,interestRate);
    remBal = reminingBalance(loanAmount,moPay);
    princPaid = principlePaid(moPay,interestRate,termAmount);
    intPaid = interestPaid(moPay,princPaid);
    totPay = totalPayments(moPay,termAmount);

    moPay = moPay.toFixed(2)
    remBal = remBal.toFixed(2)
    princPaid = princPaid.toFixed(2) 
    intPaid = intPaid.toFixed(2)
    totPay = totPay.toFixed(2)

    let tableArray = [termAmount,moPay,princPaid,intPaid,remBal]

    displayData(tableArray);

}


function monthlyPayments(loanAmount,termAmount,interestRate)
    {
    
        var monthlyPayments = loanAmount * ((interestRate * ((1+interestRate)** termAmount)) / (((1+interestRate)** termAmount)-1 ));
        return monthlyPayments
    }
function reminingBalance(loanAmount,moPay)
    {
        var reminingBalance = loanAmount - moPay;
        return reminingBalance
    }
function interestPaid(moPay,princPaid)
    {
         var interestPaid = moPay - princPaid;
         return interestPaid
    }
function principlePaid(moPay,interestRate,termAmount)
    {
        termAmount /= 60;

        var principlePaid = moPay / (1+(interestRate * termAmount));
        return principlePaid
    }
function totalPayments(moPay,termAmount)
    {
        var totalPayments = moPay * termAmount;
        return totalPayments
    }

function displayData(tableArray)
    {
        let templateRows="";

        for (let index = 0; index <= 4; index++) 
        {
            let number = tableArray[index];
            templateRows +=`<tr><td>${number}</td></tr>`;
        }

        document.getElementById("results").innerHTML = templateRows;
        
    }
    