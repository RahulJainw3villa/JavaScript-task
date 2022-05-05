


function upper(str){
    let arr1 = str.split(' ');
    let arr2 = [];

    for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1));

    }
    return arr2.join(' ');
}

console.log(upper("the quick brown fox"));


