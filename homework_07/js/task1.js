let Pyramid = "";
let N = prompt("Please enter natural number N (0<N<=20)",0);
if (N<=0 || N>20 || isNaN(N) || Math.ceil(N)!=N){
    console.error('Incorrect!');
}else
    for (let i = 1; i <= N; i++){
        for (let j = N-i; j > 0; j--){
            Pyramid += "   ";
        }
        for (let k = 1; k <=(2*(i-1) + +1); k++){
            Pyramid += "[~]";
        }
    console.log(Pyramid);
    Pyramid = "";
}