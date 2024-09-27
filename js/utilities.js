//Get input value
function getInputValueById(id){
   const inputValue = document.getElementById(id).value
   const inputValueNumber = parseFloat(inputValue)
   return inputValueNumber;
}

//Get text value
function getTextValueById(id){
    const textValue = document.getElementById(id).innerText
    const textValueNumber = parseFloat(textValue)
    console.log(textValueNumber);
    
    return textValueNumber
}


function addHidden(id){
    document.getElementById(id).classList.add('hidden')
}


function removeHidden(id){
    document.getElementById(id).classList.remove('hidden')
}



//history card
function historyCard(cardInputValue, place){
    const historyDiv = document.createElement('div')
historyDiv.className = 'border border-state-100  p-4 rounded-lg  md:w-10/12 mx-auto mt-10'

historyDiv.innerHTML = `
<h1 class='text-xl font-bold'>${cardInputValue} Taka is Donated for ${place}</h1>
<p class='text-gray'>${new Date}</p>
`

const historySection = document.getElementById('history-section')
historySection.appendChild(historyDiv)
}