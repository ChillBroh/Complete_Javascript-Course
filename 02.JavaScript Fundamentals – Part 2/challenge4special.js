
  const calcAverage = (arr) =>{
    let total = 0;
        for(let i =0; i < arr.length; i++){
            total += arr[i];
        }
        return total/arr.length;
  }

  const array = [20,10,10,30,30 ];
  console.log(calcAverage(array));