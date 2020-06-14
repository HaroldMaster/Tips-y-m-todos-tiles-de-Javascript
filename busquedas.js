var x = [12,233,12,3,4,999,23,33]
function numeroMayor(array){
    var ultimo=x[x.length-1];
    var i =0;
    for(var j = 1; j<array.length;j++){
        if(j==array.length-1){
            return ultimo
        }
        if(array[i]<array[j]){
            console.log("el numero " + array[i] + " es menor que "+ array [j]);
           i=j;
        }
        else{
            console.log("el numero " + array[i] + " es mayor que "+ array [j])
            
            if(array[j]==ultimo){
                return array[i];
            }
        }
    }
    


}
console.log(numeroMayor(x));