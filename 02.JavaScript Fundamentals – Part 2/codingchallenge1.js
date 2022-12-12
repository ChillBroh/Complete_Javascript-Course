function values(){
let dv1 = document.getElementById('dv1').value*1;
let dv2 = document.getElementById('dv2').value*1;
let dv3 = document.getElementById('dv3').value*1;
let cv1 = document.getElementById('kv1').value*1;
let cv2 = document.getElementById('kv2').value*1;
let cv3 = document.getElementById('kv3').value*1;



const calcAverage = (s1,s2,s3) => {

    return (s1+s2+s3)/3;
};

const avgDolphine = calcAverage(dv1,dv2,dv3);
const avgkola = calcAverage(cv1,cv2,cv3);

const checkWinner = (avgDolphins,avgKoalas) => {
    const winner = (avgDolphine >= 2 * avgKoalas) ? `Dolphine win (${avgDolphine} vs. ${avgKoalas})` : (avgKoalas >= 2 * avgDolphine) ? `Koalas win (${avgKoalas} vs. ${avgDolphine})` : "";
    alert(winner);
}

checkWinner(avgDolphine,avgkola);
}