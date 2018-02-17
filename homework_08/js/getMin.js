function getMin(){
    let minArguments;
    let n = prompt('Enter quantity of integer arguments',0);
for(i = 1; i <= n; i++){
    arguments[i] = parseInt(prompt(`Enter argument # ${i}`,0));
}
    minArguments = arguments[1];
for(j = 2; j <= n; j++){
    if(arguments[j] < minArguments){
        minArguments = arguments[j];
    }
}
    console.log(`getmin () //=>`,minArguments);
}