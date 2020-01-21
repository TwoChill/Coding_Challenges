// NOT PASSED (??) //
var extractPassword = function (chars){
    var password = [];
    var newPassword = '';

    var valid = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    for (var i = 0; i < chars.length; i++){
        for (var j = 0; j < valid.length; j++){
            if (valid[j] === chars[i]){
                password.push(chars[i]);
            }
        }
    }

    for (var l = 0; l < password.length; l++){
        newPassword += password[l];
    }
    

    

    return newPassword;
};


console.log(extractPassword(['a', '-', '~', '1', 'a', '/']));

console.log(extractPassword(['~', 'A', '7', '/', 'C'])); 