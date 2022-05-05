let str = "ababa";
let rev = "";

for(let i=str.length;i>=0;i--){
    rev  += str.charAt(i);
}

if(rev === str){
console.log("Palindrome")
}
else{
    console.log("not a palindrome")
}