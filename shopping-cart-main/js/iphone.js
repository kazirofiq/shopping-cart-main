// console.log('Sadia ami toamake onek onek vlobasi')

function iphoneNumberField(increase){
    const iphoneField = document.getElementById('iphone-input');
    const iphoneFieldString = iphoneField.value;
    const previousInputFieldValue = parseInt(iphoneFieldString);
     
    let newIphoneFieldNumber;

    if(increase === true){
        newIphoneFieldNumber = previousInputFieldValue + 1;
    }
    else{
        newIphoneFieldNumber = previousInputFieldValue -1;
    }
    iphoneField.value = newIphoneFieldNumber;
    return newIphoneFieldNumber;
}

function newUpdateIphonePrice(newIphoneFieldNumber){
    const totalIphonePrice = newIphoneFieldNumber * 1219;
    const totalIphoneElement = document.getElementById('iphone-total');
    totalIphoneElement.innerText = totalIphonePrice;
}

function getTextElementValueById(elementId){
    const totalIphoneElement = document.getElementById(elementId);
    const currentPhoneTotalString =  totalIphoneElement.innerText;
    const currentPhoneTotalValue = parseInt(currentPhoneTotalString);
    return currentPhoneTotalValue;
}
function getSubTotalElementById(){
    const currentPhoneTotal = getTextElementValueById('iphone-total');
   const currentCaseTotal = getTextElementValueById('case-total');
   const currentSubTotalElement = currentPhoneTotal + currentCaseTotal;
   const subTotalElement = document.getElementById('sub-total');
   subTotalElement.innerText = currentSubTotalElement;
}
document.getElementById('btn-iphone-plus').addEventListener('click', function(){
   const newIphoneFieldNumber = iphoneNumberField(true);

    newUpdateIphonePrice(newIphoneFieldNumber);
    getSubTotalElementById()
    // calculate total
//    const currentPhoneTotal = getTextElementValueById('iphone-total');
//    const currentCaseTotal = getTextElementValueById('case-total');
//    const currentSubTotalElement = currentPhoneTotal + currentCaseTotal;
//    const subTotalElement = document.getElementById('sub-total');
//    subTotalElement.innerText = currentSubTotalElement;
})

document.getElementById('btn-iphone-minus').addEventListener('click', function(){
   const newIphoneFieldNumber = iphoneNumberField(false);

    newUpdateIphonePrice(newIphoneFieldNumber);
    getSubTotalElementById()
})