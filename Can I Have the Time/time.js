var hour = 8;
var minute = 50;
var period = 'am';

if(hour != 9 && period == 'am' && minute > 45){
    console.log("It's almost 9 in the morning");
}

var hour = 7;
var minute = 15;
var period = 'pm';

if(hour == 7 && minute < 16 && period !='am')
    console.log("It's just after 7 in the evening");

