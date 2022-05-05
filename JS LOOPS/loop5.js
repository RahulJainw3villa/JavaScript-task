
let string = "";

for(let i = 1; i <= 6; i++) { 
  for(let j = 1; j <=11; j++) { 
    if((j<=7-i || j>=5+i) || (i%2===0 && j%2==1)  || (j%2===0 && i%2==1)){
        string += " ";
    }
    else{
    string += "*";
    }
}

  string += "\n";
}

console.log(string);