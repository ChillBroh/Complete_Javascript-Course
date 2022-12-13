function tip(){
    const calcTip = (val) => {
        let tip = (val >= 50 && val <= 300) ? (val* 15)/100 : (val * 20)/100;
        return tip;
    }

    const bills = new Array(125,555,44);
    const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]))

    const total = [(bills[0] + tips[0]),(bills[1] + tips[1]),(bills[2] + tips[2])]

    console.log(`1. Bill = ${bills[0]} , tip = ${tips[0]}, total = ${total[0]}`)
    console.log(`1. Bill = ${bills[1]} , tip = ${tips[1]}, total = ${total[1]}`)
    console.log(`1. Bill = ${bills[2]} , tip = ${tips[2]}, total = ${total[2]}`)
}

tip();

