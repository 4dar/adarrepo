function insertCoin(quarters){
    while(quarters > 0){
        var winnings = Math.floor(Math.random()*100);
        if(winnings == 1){
            var amountWon = Math.random()*50 + 50;
            return amountWon + quarters;
        }
    }
    return 0;
}

function insertCoinBonus(quarters, goal){
    while(quarters > 0){
        var winnings = Math.floor(Math.random()*100);
        if(winnings == 1){
            var amountWon = Math.floor(Math.random()*50 +50)
            if(amountWon + quarters > goal){
                return amountWon + quarters}
                else{
                    quarters = quarters + amountWon;
                    console.log("won:", quarters);
                }
            }
        }
        console.log("lossed");
        return 0;
    }

insertCoinBonus(100, 200);