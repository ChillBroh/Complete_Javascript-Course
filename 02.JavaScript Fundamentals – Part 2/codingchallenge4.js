
const bills = new Array(22,295,176,440,37,105,10,1100,86,52);
const tips = [];
const total = [];

const calcTip = (val) => {
    let tip = (val >= 50 && val <= 300) ? (val* 15)/100 : (val * 20)/100;
    return tip;
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]));
    total.push(tips[i] + bills[i]);
    console.log(`1. Bill = ${bills[i]} , tip = ${tips[i]}, total = ${total[i]}`)
}
