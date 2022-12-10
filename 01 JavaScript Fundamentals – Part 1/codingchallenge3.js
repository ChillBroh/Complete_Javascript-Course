
function values(){
let dv2 = document.getElementById('dv2').value;
let dv3 = document.getElementById('dv3').value;
let cv1 = document.getElementById('kv1').value;
let cv2 = document.getElementById('kv2').value;
let cv3 = document.getElementById('kv3').value;
let dv1 = document.getElementById('dv1').value;

let kola = avg(cv1,cv2,cv3)
let dolphine = avg(dv1,dv2,dv3);
    alert("Score of Dolphine is " + dolphine);    
    alert("Score of kola is " + kola);
   
    alert(compare(kola,dolphine));
}


function avg(v1,v2,v3){
    return (v1*1+v2*1+v3*1)/3;
}

function compare(a,b){
    let result =(a>b) ? `Kola is winner` : `Dolphine is winner`;
    return result;
}

function winner(a,b){

}

