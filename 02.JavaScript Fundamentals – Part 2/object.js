//object simple
const ishara = {
    firstname: "ishara",
    lastname: "Madusanka",
    birthYear : 1998,
    job : "Student",
    friends : ["sanka", "dinidu", "yasiru"],
    hasDriverLicense :true,
    calcAge: function(){
        return 2022 - this.birthYear; 
    },
    calcAge2: birthYear =>{
        return 2022 - birthYear; 
    },

    check : () =>{
        const result = (ishara.hasDriverLicense)? "he has a driver's license" : "he don't have a driver's license"
        return result;
    }
};
console.log(ishara)
console.log(ishara.calcAge())
console.log(ishara.calcAge(ishara.birthYear))
console.log(ishara.calcAge2(2008))
//dot notationa
console.log(ishara.firstname) 
//bracket notation
console.log(ishara['firstname'])

const namekey = 'name';
console.log(ishara['first' + namekey]) //cannnot do this with  dot operator
console.log(ishara['last' + namekey])

//add extra details to object
ishara.location = "Srilanka";
ishara['facebook'] = "www.facebook.com/isharamadusanka";

console.log(ishara)

//challenge
console.log(`${ishara.firstname} has ${ishara.friends.length} friends, and his best friend is called ${ishara.friends[2]}`)

//challenge 2


const final = `${ishara.firstname} is a ${ishara.calcAge()} old ${ishara.job}, and ${ishara.check()}`;
console.log(final);