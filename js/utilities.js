console.log('testing');
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