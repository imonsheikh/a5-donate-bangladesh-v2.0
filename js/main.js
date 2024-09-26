//Donate now part 
const donateNow = document.getElementById('donate-now')
donateNow.addEventListener('click', function(){

  const card1InputValue = getInputValueById('card1-input')
//   validation
if(isNaN(card1InputValue) || card1InputValue <= 0){
alert('Invalid Input')
return
}


//initial ++
const card1TextValue = getTextValueById('card1-balance')
//update ++
const updateCard1TextValue = card1InputValue + card1TextValue
 document.getElementById('card1-balance').innerText = updateCard1TextValue
  
 //initial --
 const totalBalance = getTextValueById('total-balance')
//update --
const updateTotalBalance = totalBalance - card1InputValue
 document.getElementById('total-balance').innerText = updateTotalBalance

//  modal showing here 
document.getElementById("my_modal_1").showModal()


})