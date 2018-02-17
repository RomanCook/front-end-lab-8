function isPrime(){
    let prime = parseInt(prompt(`Enter natural number`,0));
    let primeIs = true;
    if(prime < 2 ){
        primeIs = false;
    }else{
        for(i = 2; i <= prime-1; i++){
            if(prime%i == 0){
                primeIs = false;
            }
        }
    }
    console.log(`isPrime(${prime});=>`,primeIs);
}