function reverseNumber(){
    let number = parseInt(prompt('Enter an integer',0));
    let sign = 0 - number;
    let reverseNum = "";
    const stringg = Math.abs(number).toString();
    for(let i=0; i<stringg.length; i++){
        reverseNum = stringg[i] + reverseNum;
    }
    if(sign>0){
        reverseNum = 0 - parseInt(reverseNum);
    }
    console.log(`reverseNumber(${number});=>`,parseInt(reverseNum));
}