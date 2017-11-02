var reward = .01;
var day = 1;
console.log(day);
console.log(reward);

for(var day = 2; day<=30; day++){
    reward *= 2;
    console.log(day);
    console.log("$" + reward);
}


var reward = .01;
for(var day = 0; reward <= 1000000000; day++){
    reward *= 2;
    console.log(day);
    console.log("$" + reward);
}

console.log("It would take the servant 21 days to make $10,000")
console.log("It would take the servant 36 days to make $1 billion")


var reward = .01;
for(var i = 0; i <= 10000000; i++){
    reward *= 2;
    if(reward >= Infinity){
        console.log("Days to reach infinite money is", i);
        break;
    }
}