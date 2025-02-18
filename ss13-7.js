let randum = [1, 2, 3, 1, 2, 3, 2, 1, 1, 2, 3, 3, 3, 2, 3, 1, 2, 3, 1, 2]
let x = +prompt("Hãy thử nhập vào 1 trong 3 số1 , 2, 3");
let value = 0;
for(i = 0; i < randum.length; i++){
    if(randum[i]===x){
        value = value + 1;
    }
}
alert(value);
