const air = "Tap Air Colombo";

console.log(air.indexOf("a"));
console.log(air.lastIndexOf("b"));

console.log(air.length);

console.log(air.slice(4, 7));
console.log(air.slice(4));
console.log(air.slice(-3));
console.log(air.indexOf(" ") + 1);

const checkMiddleSeat = (seat) => {
  //B and E are middle seats
  const chk = seat.slice(-1);
  const result =
    chk === "B" || chk === "E"
      ? "You got a middle seat"
      : "Yours is not a middle seat";

  console.log(result);
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");
