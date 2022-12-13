
const Mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
};


const John = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.BMI = this.mass / this.height**2;
        return this.BMI;
    }
};
 Mark.calcBMI();
 John.calcBMI();
const result = (John.BMI > Mark.BMI) ? `John's BMI (${John.BMI}) is higher than Mark's (${Mark.BMI})` :  `Mark's BMI (${Mark.BMI}) is higher than John's (${John.BMI})`;
console.log(result);