
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumberValue = parseInt(caseNumberFieldString);

    let newCaseNumberValue;

    if(isIncrease === true){
        newCaseNumberValue = previousCaseNumberValue + 1;
    }
    else{
        newCaseNumberValue = previousCaseNumberValue - 1;
    }


    caseNumberField.value = newCaseNumberValue;
    return newCaseNumberValue;
    
}

function updateCaseNumberPrice(newCaseNumberValue){
    const totalCasePrice = newCaseNumberValue * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = totalCasePrice; 
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
  const newCaseNumberValue = updateCaseNumber(true);
  
  updateCaseNumberPrice(newCaseNumberValue)
  getSubTotalElementById()
   
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
   const newCaseNumberValue = updateCaseNumber(false);

   updateCaseNumberPrice(newCaseNumberValue);
   getSubTotalElementById()
   
})
