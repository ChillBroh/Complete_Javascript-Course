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

//string objects
const name = "Ishara";
const name2 = new String("Ishara");

console.log(name);
console.log(name2);

console.log(typeof name);
console.log(typeof name2);

const passenger = "ISHara";
const pasName = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(pasName);

const passenger3 = "    IshaRa\n";

const trimmedName = passenger3.trim();
const finalName =
  trimmedName[0].toUpperCase() + trimmedName.slice(1).toLowerCase();
const chk = pasName === finalName;
console.log(chk);
