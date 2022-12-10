
let markHigherBMI;
function details(){
    
    let mark_M = document.getElementById("mass1").value;
    let mark_H = document.getElementById("height1").value;
    let jhon_M = document.getElementById("mass2").value;
    let jhon_H = document.getElementById("height2").value;
    
    let mark_BMI = BMI(mark_M,mark_H);
    let jhon_BMI = BMI(jhon_M,jhon_H);
    
    markHigherBMI = (mark_BMI > jhon_BMI) ? `Mark's BMI (${mark_BMI}) is higher than John's(${jhon_BMI})! ` : `John's BMI(${jhon_BMI}) is higher 
    than Mark's(${jhon_BMI})!`;
    alert("Mark's BMI is " + mark_BMI);
    alert("Jhon's BMI is " + jhon_BMI);
    alert(markHigherBMI)
    }
    
    function BMI(mass,height){
        return mass / height ** 2 ;   
    }
    
    
    