const historyBtn = document.getElementById('history-btn')
const donationBtn = document.getElementById('donation-btn')
const historySection = document.getElementById('history-section')



historyBtn.addEventListener('click', function(){
    // toggleing 
const showHistory = addHidden('cards-section')
historyBtn.classList.add(
    "bg-primaryBtn",
    "font-bold",
    "text-secondaryText"
)
historyBtn.classList.remove(
    "bg-transparent",
    "border-gray-900",
    "border-2",
    "text-gray"
)
donationBtn.classList.remove(
    "bg-primaryBtn",
    "font-bold",
    "text-secondaryText"
)

removeHidden('history-section')

})


//Go back to donation
donationBtn.addEventListener('click', function(){

  const showDonation = removeHidden('cards-section')
    
    donationBtn.classList.add(
        "bg-primaryBtn",
        "font-bold",
        "text-secondaryText"
    )
    donationBtn.classList.remove(
    "bg-transparent",
    "border-gray-900",
    "border-2",
    "text-gray"
    )
    historyBtn.classList.remove(
        "bg-primaryBtn",
        "font-bold",
        "text-secondaryText"
    )

addHidden('history-section')

})



