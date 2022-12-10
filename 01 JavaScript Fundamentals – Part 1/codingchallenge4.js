

function tip(){
    let val = document.getElementById("bill").value;
    let tip = (val >= 50 && val <= 300) ? (val* 15)/100 : (val * 20)/100;
    
    let total = Number(val ) + tip;

    alert("The bill was " + val + ",the tip was " + tip + ",and the total value " + total )
}