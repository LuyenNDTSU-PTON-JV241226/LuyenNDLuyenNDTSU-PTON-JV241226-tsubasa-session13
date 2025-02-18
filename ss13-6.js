let randum = [1, 5, 22, 23, 6, 9, 54, 17, 11, 3, 15, 32, 12, 4];
let sum = 0;
let sums = 0;
for (i = 0; i < randum.length; i++){
    if(randum[i] % 2 != 0){
        sum = sum +randum[i];
    }
}
alert("Tổng các số lẻ là: " + sum);


for (i = 0; i < randum.length; i++){
    if(randum[i] % 2 == 0){
        sums = sums +randum[i];
    }
}
alert("Tổng các số chẵn là: " + sums);