
//can call before declaration
console.log(age2(1998));

function age2(birthyear){
    return (2023 - birthyear);
}


//save a function body to a variable and this variable will work as function name

const age1 = function(birthyear){
    return (2023 - birthyear);
}

//can call only  after function declaration
console.log(age1(2000))




