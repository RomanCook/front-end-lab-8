function getClosestToZero(){
    let closestToZero;
    let n = prompt('Enter quantity of integer arguments',0);
for(i = 1; i <= n; i++){
    arguments[i] = parseInt(prompt(`Enter argument # ${i}`,0));
}
    closestToZero = Math.abs(arguments[1]);
for(j = 2; j <= n; j++){
    if(0 - Math.abs(arguments[j]) > 0 - Math.abs(closestToZero)){
        closestToZero = arguments[j];
    }
}
    console.log(`getClosestToZero () //=>`,closestToZero);
}