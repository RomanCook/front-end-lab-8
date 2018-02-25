
let iterator = 0;
function increaseIteratorBy1(){
    iterator++;
    printIteratorValue();
}
function printIteratorValue(){
    console.log('Iterator value ', iterator);
}
const debounce = (callback, ms)=>{
    let timoutId=0;
    return () =>{
      clearTimeout(timoutId);
      timoutId = setTimeout(callback, ms);
    }
}
var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();