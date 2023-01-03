//logical operators can use any data types. return any data type
//short - circutting (if found truthy first will imediatly return the value)
//OR
console.log(3 || "Ishara");
console.log(0 || "Ishara");
console.log("" || "Ishara");
console.log(true || 0);
console.log(undefined || null); //no short circuting
console.log(undefined || null || "chill");

//AND
console.log(0 && "Ishara");
console.log(0 && null);
console.log("Ishara" && 0);
console.log(3 && "Ishara"); //no short circuting
