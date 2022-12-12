                //function declaration
//can call before declaration
console.log(age2(1998));
function age2(birthyear){
    return (2023 - birthyear);
}

                
                //function expression
const age1 = function(birthyear){
    return (2023 - birthyear);
}
//can call only  after function declaration
console.log(age1(2000))

                //arrow function
const age3 = birthyear => 2023 - (birthyear);
//can call only after the expression
console.log(age3(1999));

//use arrow with multiple parameters
const age4 = (birthyear,name) => { 
    const age = (2023 - (birthyear));   
    return `${name} is ${age} years old`
};
console.log(age4(1990,"Ishara"));





