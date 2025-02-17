let a = prompt("Hãy nhập vào dãy số bạn muốn");
let b = a.split("");
let max = b[0];
let index = 0;
for(i = 1 ; i < b.length ; i++){
    if(b[i] > max){
        max = b[i];
        index = i;
    }
}
alert(max);

