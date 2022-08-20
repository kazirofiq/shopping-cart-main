function getTextElementValueById(elementId){
    const totalIphoneElement = document.getElementById(elementId);
    const currentPhoneTotalString =  totalIphoneElement.innerText;
    const currentPhoneTotalValue = parseInt(currentPhoneTotalString);
    return currentPhoneTotalValue;
}

function setTextElementValueById(elementId, value){

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
 

}

function getSubTotalElementById(){
    const currentPhoneTotal = getTextElementValueById('iphone-total');
   const currentCaseTotal = getTextElementValueById('case-total');

   const currentSubTotalElement = currentPhoneTotal + currentCaseTotal;
   setTextElementValueById('sub-total', currentSubTotalElement);

   
//  calculate tax
    const taxAmountString = (currentSubTotalElement * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotalElement + taxAmount;
    setTextElementValueById('final-total', finalAmount)

}