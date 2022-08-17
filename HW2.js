// پاسخ تمرین اول 
//1 => NaN
//2 => 122
//3 => 23
//4 => 4
//5 => true-false-false-false

//--------------------------------------------پاسخ تمرین دوم
let a =prompt('enter your number:')
let b =prompt('enter your number:')
let c =prompt('enter your number:')
((a<b+c) && (b<c+a) && (c<a+b)) ? console.log('Yes') : console.log('No');

//----------------------------------------------پاسخ تمرین سوم
let number=38907;
let counter=0;
let y=0;
while(number>0){
    y=number%10;
    counter++;
    number=number/10;
    number=parseInt(number)
}
console.log(counter);

//----------------------------------------------پاسخ تمرین چهارم
let First_number = 6;
let Second_number = 18;
for(let i=0;i<Math.max(First_number,Second_number)/2;i++){
    if(First_number%i==0 && Second_number%i==0){
            console.log(i);
        }
}
