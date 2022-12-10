
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
    alert(winner(kola, dolphine));
}


function avg(v1,v2,v3){
    return (v1*1+v2*1+v3*1)/3;
}

function compare(a,b){
    let result =(a>b) ? `Kola is Has winning chance` :(b>a)? `Dolphine has winning chance`: "Match can be draw";
    return result;
}

function winner(a,b){
    let result;

    if(a > b)
        if(a > 100)
            result = "kola is the winner";
        else
            result = "Kola Don't have required points";
    else if( b > a)
        if(b > 100)
            result = "Dolphine is the winner";
        else
            result = "Kola Don't have required points";
    else if(a==b)
        if(a >= 100 && b >= 100)
            result = "Match Draw";
        else
            result = "No chance to draw or win";

    return result;
}

