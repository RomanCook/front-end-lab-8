var a,b,c,S,TypeTriangle;

a = prompt("Please enter lenghf 1-st side of triangle",0);
b = prompt("Please enter lenghf 2-nd side of triangle",0);
c = prompt("Please enter lenghf 3-rd side of triangle",0);

if (a < 0 && b < 0 && c < 0 &&
     a == null || b == null || c == null /* &&
typeof(a) == string || typeof(b) == string || typeof(c) == string*/) {
    console.log('For data',a,b,c,'Incorrect data');
    } else{
        if (a*a == +b*b + +c*c || b*b == +a*a + +c*c || c*c == +a*a + +b*b){
            TypeTriangle = "right triangle";
        } else{
             if (a == b && b == c){
                TypeTriangle = "scalene";
            }
            else{
                if(a == b || b == c || c == a){
                    TypeTriangle = "isosceles";
                }
                else{
                    TypeTriangle = "scalene";
                }
            }
        }
    S = Math.sqrt((+a + +b - c)*(+a - b + +c)*(-a + +b + +c)*(+a + +b + +c))/4;
    console.log('Type of triangle is',TypeTriangle,' and square is',S.toFixed(2));
}