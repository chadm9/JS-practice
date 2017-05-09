/**
 * Created by mephisto on 5/8/17.
 */
/*var d = new Date();

if (d.getDay() >= 5){
    console.log("Sleep in.")
}
else{
    console.log("Go to work.")
}*/



var month = parseInt(prompt("Please enter a number between 1-12"));
var year = parseInt(prompt("Please enter the year."));


switch(month) {
    case 4:
        console.log("There are 30 days in this month");
        break;
    case 6:
        console.log("There are 30 days in this month");
        break;
    case 9:
        console.log("There are 30 days in this month");
        break;
    case 11:
        console.log("There are 30 days in this month");
        break;
    case 2:
        if (year % 4 != 0) {
            console.log("There are 28 days in this month.");
        }
        else if (year % 100 != 0) {
            console.log("There are 28 days in this month.");
        }
        else if (year % 400 != 0) {
            console.log("There are 28 days in this month");
        }
        else {
            console.log("There are 29 days in this month.");
        }

        break;
    default:
        console.log("There are 31 days in this month.");
}