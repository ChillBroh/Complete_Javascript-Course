const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C: Fix
    value: Number(prompt("Degrees celsius")),
  };

  console.log(measurement);
  //B : Find
  console.table(measurement);

  console.log(measurement.value);
  console.warn(measurement.value);
  console.error(measurement.value);
  debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};
//A : Identify
console.log(measureKelvin());
