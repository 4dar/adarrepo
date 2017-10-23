// function fancyArray(arr){
//     for(var i = 0; i < arr.length; i++){
//         console.log(i + " " + "->" + " " + arr[i]);
//     }
// }
// fancyArray(["James", "Jill", "Jane", "Jack"]);


function fancyArray(arr, symbol){
    for(var i = 0; i < arr.length; i++){
        console.log(i + " " + symbol + " " + arr[i]);
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"], '->');


function fancyArray(arr, symbol, reversed){
    if(reversed){
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i] + " " + symbol + " " , i);
        }
    }
    else{
        for(var i = 0; i < arr.length; i++){
        console.log(i + " " + symbol + " " + arr[i]);
        }
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"], '->', true);
