function Calcular() {
    let n1 = parseInt(document.getElementById('Producto_1').value)
    let n2 = parseInt(document.getElementById('Producto_2').value)
    let n3 = parseInt(document.getElementById('Producto_3').value)
    let n4 = parseInt(document.getElementById('Producto_4').value)
    let n5 = parseInt(document.getElementById('Producto_5').value)
    
        
    if (isNaN(n1)) {
        alertify.error('Producto 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Producto 2 en blanco')
    } else if(isNaN(n3)) {
        alertify.error('Producto 3 en blanco')
    }else if (isNaN(n4)) {
        alertify.error('Producto 4 en blanco')
    }else if (isNaN(n5)) {
        alertify.error('Producto 5 en blanco')
   
    }else
        {if (n1 + n2 + n3 + n4 + n5 <1000){
        let producto = n1 + n2 + n3 + n4 + n5;
        let descuento = ('0%')
        let Subtotal = producto 
        let Resultado = Subtotal;
        document.getElementById('descuento').value = descuento
        document.getElementById('Subtotal').value = Subtotal
        document.getElementById('Resultado').value = Resultado
        alertify.error('No aplica descuento')
    } else if (n1 + n2 + n3 + n4 + n5 <5000){
        let producto = n1 + n2 + n3 + n4 + n5;
        let descuento = ('10%')
        let Subtotal = producto 
        let porcentaje = Subtotal * 0.10
        let Resultado = Subtotal * 0.90;
        document.getElementById('descuento').value = descuento
        document.getElementById('Subtotal').value = Subtotal
        document.getElementById('porcentaje').value = porcentaje
        document.getElementById('Resultado').value = Resultado
        alertify.error('Su descuento es del 10%')
    } else if (n1 + n2 + n3 + n4 + n5 <9000){
        let producto = n1 + n2 + n3 + n4 + n5;
        let descuento = ('20%')
        let Subtotal = producto 
        let porcentaje = Subtotal * 0.20
        let Resultado = Subtotal * 0.80;
        document.getElementById('descuento').value = descuento
        document.getElementById('Subtotal').value = Subtotal
        document.getElementById('porcentaje').value = porcentaje
        document.getElementById('Resultado').value = Resultado
        alertify.error('Su descuento es del 20%')  
     } else if (n1 + n2 + n3 + n4 + n5 <13000){
        let producto = n1 + n2 + n3 + n4 + n5;
        let descuento = ('30%')
        let Subtotal = producto 
        let porcentaje = Subtotal * 0.30
        let Resultado = Subtotal * 0.70;
        document.getElementById('descuento').value = descuento
        document.getElementById('Subtotal').value = Subtotal
        document.getElementById('porcentaje').value = porcentaje
        document.getElementById('Resultado').value = Resultado
        alertify.error('Su descuento es del 30%') 
    } else if (n1 + n2 + n3 + n4 + n5 >12999){
        let producto = n1 + n2 + n3 + n4 + n5;
        let descuento = ('40%')
        let Subtotal = producto 
        let porcentaje = Subtotal * 0.60
        let Resultado = Subtotal * 0.60;
        document.getElementById('descuento').value = descuento
        document.getElementById('Subtotal').value = Subtotal
        document.getElementById('porcentaje').value = porcentaje
        document.getElementById('Resultado').value = Resultado
        alertify.error('Su descuento es del 30%') 
    }

  }
}

function limpiar() {
    document.getElementById('Producto_1').value = ''
    document.getElementById('Producto_2').value = ''
    document.getElementById('Producto_3').value = ''
    document.getElementById('Producto_4').value = ''
    document.getElementById('Producto_5').value = ''
    document.getElementById('Subtotal').value = ''
    document.getElementById('descuento').value = ''
    document.getElementById('porcentaje').value = ''
    document.getElementById('Resultado').value = ''
}