let number = 153;
let numCopy = number;
let sum =0;

while(numCopy > 0){

    let rem = numCopy%10;
    sum = sum + rem*rem*rem;
    numCopy = parseInt(numCopy/10);
}

if(number===sum){
    console.log(number + " number is Armstrong");
}
else{
    console.log(number + " number is not Armstrong");
}