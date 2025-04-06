const numArray = ['01101101','01100001','01110010','01100001','01110100','01101000','01101111','01101110','01101001','01110100','01100101','01101101','01101101','01100001','01101110','01100001','01100111','01100101','01110010']
const numContainer = document.getElementById('putBinary');
const arrayCount = numArray.length - 1;
let intervalCount = 0
setInterval(function(){
    if (intervalCount > arrayCount){
        intervalCount = 0
    }else if (intervalCount <= 7){
        numContainer.classList.add('mimGreenBG');
        numContainer.classList.remove('mimBlueBG', 'mimBlackBG');
        numContainer.innerText = numArray[intervalCount];
        intervalCount += 1;
    }else if(intervalCount > 7 && intervalCount <= 11){
        numContainer.classList.add('mimBlueBG');
        numContainer.classList.remove('mimGreenBG', 'mimBlackBG')
        numContainer.innerHTML = numArray[intervalCount];
        intervalCount += 1;
    }else{
        numContainer.classList.add('mimBlackBG');
        numContainer.classList.remove('mimGreenBG', 'mimBlueBG');
        numContainer.innerHTML = numArray[intervalCount];
        intervalCount += 1;
    }
}, 1000)