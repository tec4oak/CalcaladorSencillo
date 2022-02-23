function onGetnumber(){
    const input1 = document.getElementById("InputNum1").value;
    const input2 = document.getElementById("InputNum2").value;
      
    var resultado;

    var cmbx = document.getElementById('slct').value;
    console.log(cmbx);

    if (cmbx == '1'){
        resultado = suma(input1,input2);
        console.log('Suma:' +resultado);
        document.getElementById("salida").innerText = ('Resultado= '+resultado);        
    }
    if (cmbx == '2'){
        resultado = resta(input1,input2);
        console.log('Resta:' +resultado);
        document.getElementById("salida").innerText = ('Resultado = '+resultado);   
    }
    if (cmbx == '3'){
        resultado = producto(input1,input2);
        console.log('Producto:' +resultado);
        document.getElementById("salida").innerText = ('Resultado = '+resultado);    
    }
    if (cmbx == '4'){
        resultado = division(input1,input2);
        console.log('Division:' +resultado);
        document.getElementById("salida").innerText = ('Resultado = '+resultado);        
    }

}



function suma(a,b){
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);
    const suma = numero1 + numero2;
    return suma;
}
function resta(a,b){
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);
    const resta = numero1 - numero2;
    return resta;
}
function producto(a,b){
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);
    const producto = numero1 * numero2;
    return producto;
}
function division(a,b){
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);
    const division = numero1 / numero2;
    return division;
}

