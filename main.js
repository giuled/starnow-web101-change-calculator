// Write your JavaScript here

var calcButton =  document.getElementById('calculate-change');
var amountDue = document.getElementById('amount-due');
var amountGiven = document.getElementById("amount-received");

  calcButton.addEventListener("click", function(){
    calculateChange(amountDue.value, amountGiven.value);
  })

function calculateChange(amountDue, amountGiven){

    //total change due to customer
    let totalChange = amountGiven - amountDue;

    //gets the dollars from the change and subtracts the dollars from the total change
    let dollars = Math.trunc(totalChange);
    totalChange-= dollars;

    //gets quarters and subtracts from total change
    let quaters = Math.trunc(totalChange / .25);
    totalChange -= (quaters * .25)

    //gets dimes and subtracts from total change
    let dimes = Math.trunc(totalChange / .10);
    totalChange -= (dimes * .10);

    //gets nickels and subtracts from total change
    let nickels = Math.trunc(totalChange / .05);
    totalChange -=(nickels * .05);

    //take the last of the total change as pennies the Math.round is needed to avoid rounding errors or having tenths of a cent
    let pennies = (Math.round((totalChange + 0.00001) * 100) / 100) * 100;

    let dollarsTab = document.getElementById("dollars-output");
    let quatersTab = document.getElementById("quarters-output");
    let dimesTab = document.getElementById("dimes-output");
    let nickelsTab = document.getElementById("nickels-output");
    let penniesTab = document.getElementById("pennies-output");

    dollarsTab.textContent = dollars;
    quatersTab.textContent = quaters;
    dimesTab.textContent = dimes;
    nickelsTab.textContent = nickels;
    penniesTab.textContent =  pennies;


    console.log(totalChange);
    console.log("dollars: " + dollars);
    console.log("quaters: " +quaters);
    console.log("dimes: " + dimes);
    console.log("nickels: " + nickels);
    console.log("pennies: " + pennies);
    
}