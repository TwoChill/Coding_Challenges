// NOT PASSED //
var weeklyPass = 'darlene';
var weekDay = 'monday';

var currentPass;


var firstSevenChar = function(placeholder){
    var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z', 'W', 'Y', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'];
    
    // correct
    var cPassSlice = currentPass.slice(0,7);
    var newPass= [];

    // console.log(array);   
    for (var i = 0; i < cPassSlice.length; i++){
        for (var j = 0; j < consonants.length; j++){

            if (cPassSlice[i] === consonants[j]){
                newPass.push(cPassSlice[i]);
                break; //else num ++
                }            
        }
    }
    
    return newPass.toString();
  

};


switch (weekDay){
    case 'monday':
        weekDay = weekDay.slice(0,1) + weekDay.slice(2,4) + weekDay.charAt(5);
        currentPass = weeklyPass + weekDay;
        break;
    case 'tuesday':
        weekDay = weekDay.charAt(0) + weekDay.slice(3,5) + weekDay.charAt(6);
        currentPass = weeklyPass + weekDay;
        break;
    case 'wednesday':
        weekDay = weekDay.charAt(0) + weekDay.slice(2,4) + weekDay.slice(5,7) + weekDay.charAt(8);
        currentPass = weeklyPass + weekDay;
        break;
    case 'thursday':
        weekDay = weekDay.slice(0,2) + weekDay.slice(3,6) + weekDay.charAt(7);
        currentPass = weeklyPass + weekDay;
        break;
    case 'friday':
        weekDay = weekDay.slice(0,2) + weekDay.charAt(3) + weekDay.charAt(5);
        currentPass = weeklyPass + weekDay;
        break;
    case 'saturday':
        weekDay = weekDay.charAt(0) + weekDay.charAt(2) + weekDay.slice(4,6) + weekDay.charAt(7);
        currentPass = weeklyPass + weekDay;
        break;
    case 'sunday':
        weekDay = weekDay.charAt(0) + weekDay.slice(2,4) + weekDay.charAt(5);
        currentPass = weeklyPass + weekDay;
        break;
        // I left the default clause out
}

console.log(currentPass);