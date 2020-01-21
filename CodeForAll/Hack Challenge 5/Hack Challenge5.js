// PASSED! //

var getValidPassword = function (loggedPasscodes){
    var count = 0;
    var newPwd = [];
    
    for (var i = 0; i < loggedPasscodes.length; i++){
        for (var j = 0; j < loggedPasscodes[i].length; j++){
            
            if (loggedPasscodes[i][j] % 2 === 0){
                count++;
                
                if (count === 5){
                    newPwd.push(loggedPasscodes[i]);
                    count = 0;
                }
            }
        }
    }
    // Because of the double array. Indexing is required.
    return newPwd[0];
};


var loggedPasscodes = [
    [1, 4, 4, 1],
    [1, 2, 3, 1],
    [2, 6, 0, 8],
    [5, 5, 5, 5],
    [4, 3, 4, 3]
];

console.log(getValidPassword(loggedPasscodes));