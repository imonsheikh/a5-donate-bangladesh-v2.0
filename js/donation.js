//Global
// const totalBalance = getTextValueById("total-balance");

//Donate now card 1111111111
const donateNow = document.getElementById("donate-now");
donateNow.addEventListener("click", function () {
  //Read OR Get data...
  const totalBalance = getTextValueById("total-balance");
  const card1InputValue = getInputValueById("card1-input");
  
  if(card1InputValue > totalBalance){
    return alert('Donation is greater than your balance')
  }
  //   validation
  if (isNaN(card1InputValue) || card1InputValue <= 0 || typeof card1InputValue !== 'number') {
    alert("Invalid Input");
    return;
  }



  //initial ++
  const card1TextValue = getTextValueById("card1-balance");
  //update ++
  const updateCard1TextValue = card1InputValue + card1TextValue;
  document.getElementById("card1-balance").innerText = updateCard1TextValue;


  //update --
  const updateTotalBalance = totalBalance - card1InputValue;
  document.getElementById("total-balance").innerText = updateTotalBalance;

  //  modal showing here
  document.getElementById("my_modal_1").showModal();



  // function from utilities
  historyCard(card1InputValue, "Flood at Noakhali, Bangladesh")


});



// Donate card 222222
const donateNow2 = document.getElementById("donate-now2");
donateNow2.addEventListener("click", function () {
  //Read OR Get data...
  const card2InputValue = getInputValueById("card2-input");

  // validation 
  if (isNaN(card2InputValue) || card2InputValue <= 0) {
    alert("Invalid Input");
    return;
  }

  // initial total + card2 total
  const card2TextValue = getTextValueById("card2-balance");
  const totalBalance = getTextValueById("total-balance");

  //Update ++ && --
  const updateCard2TextValue = card2InputValue + card2TextValue;
  document.getElementById("card2-balance").innerText = updateCard2TextValue;
  const updateTotalBalance2 = totalBalance - card2InputValue;
  document.getElementById("total-balance").innerText = updateTotalBalance2;

    //  modal showing here
    document.getElementById("my_modal_1").showModal();


      // function from utilities
  historyCard(card2InputValue, "Flood Relief in Feni,Bangladesh")
});




// Donate card 33333
const donateNow3 = document.getElementById("donate-now3");
donateNow3.addEventListener("click", function () {
  //Read OR Get data...
  const card3InputValue = getInputValueById("card3-input");

  // validation 
  if (isNaN(card3InputValue) || card3InputValue <= 0) {
    alert("Invalid Input");
    return;
  }

  // initial total + card2 total
  const card3TextValue = getTextValueById("card3-balance");
  const totalBalance = getTextValueById("total-balance");

  //Update ++ && --
  const updateCard3TextValue = card3InputValue + card3TextValue;
  document.getElementById("card3-balance").innerText = updateCard3TextValue;
  const updateTotalBalance2 = totalBalance - card3InputValue;
  document.getElementById("total-balance").innerText = updateTotalBalance2;

  document.getElementById('donate-now3').value = ""

    //  modal showing here
    document.getElementById("my_modal_1").showModal();


   // function from utilities
  historyCard(card3InputValue, "Aid for Injured in the Quota Movement")

  });
