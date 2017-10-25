function numbersOnly(arr){
    var newArray = [];
    for(var i = 0; i<arr.length; i++){
        if(typeof(arr[i]) == "number"){
            newArray.push(arr[i]);
    }
}
    console.log("Numbers only array:", newArray);
    return newArray;
}
numbersOnly([1, "apple", -3, "orange", 0.5]);


function removeNum(rearr){
    for(i = 0; i < rearr.length; i++){
        if(typeof(rearr[i] != "number")){
            for(var j = i; j < rearr.length; j++){
                rearr[j] = rearr[j+1];
            }
            rearr.pop();
        }                        
    }
    console.log("Remove number array:",rearr);
    return rearr;
}
removeNum([10,'coding',23,'dojo',543,'VOR']);