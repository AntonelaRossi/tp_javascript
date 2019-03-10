var local = { // 3 objetos con arrays como propiedades
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ], //Anio, dia, mes // EL MES 0 ES ENERO!!!!!!!!! 

    precios: [
        { componente: "Monitor GPRS 3000", precio: 200 },
        { componente: "Motherboard ASUS 1500", precio: 120 },
        { componente: "Monitor ASC 543", precio: 250 },
        { componente: "Motherboard ASUS 1200", precio: 100 },
        { componente: "Motherboard MZI", precio: 30 },
        { componente: "HDD Toyiva", precio: 90 },
        { componente: "HDD Wezter Dishital", precio: 75 },
        { componente: "RAM Quinston", precio: 110 },
        { componente: "RAM Quinston Fury", precio: 230 }
    ]
};


//HECHO PUNTO UNO A

function precioMaquina(componentes) {
    var sumaComponente = 0;

    for (let index = 0; index < componentes.length; index++) {
        //console.log(componentes[index]);

        for (let i = 0; i < local.precios.length; i++) {
            //console.log(local.precios[i].componente);
            if (componentes[index] === local.precios[i].componente) {
                //console.log(local.precios[i].precio);
                sumaComponente += local.precios[i].precio;
            }
        }
    }

    // console.log(sumaComponente)
    return sumaComponente;
}

var ventaDelDia = ["Monitor GPRS 3000", "Motherboard ASUS 1500", "Monitor ASC 543"];
console.log(precioMaquina(ventaDelDia)); // 320 ($200 del monitor + $120 del motherboard)



//HECHO PUNTO UNO B
// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte 
//de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

function cantidadVentasComponente(lasVentas) {
    var sumaVentas = [];
    var arrayObjetosVentas = local.ventas

    for (let i = 0; i < arrayObjetosVentas.length; i++) {
        //console.log(arrayObjetosVentas[i].componentes);
        for (let j = 0; j < arrayObjetosVentas[i].componentes.length; j++) { //coomo entrar directamente al array componentes dentro del array de objetos?
            if (lasVentas === arrayObjetosVentas[i].componentes[j]) {
                //console.log (arrayObjetosVentas[i].componentes[j])
                //COMO HAGO PARA QUE ME CONTABILICE STRINGS?¡?¡?¡??
                sumaVentas.push(arrayObjetosVentas[i].componentes[j])

            }
        }
    }
    return sumaVentas.length
}

console.log(cantidadVentasComponente("Monitor ASC 543")); // 2

//HECHO PUNTO UNO C
// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió 
//en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica 
//la función precioMaquina.
//Date.getMonth() y Date.getFullYear()
//ventas: [ { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },

//entrar a local.ventas para llegar a fecha. en fecha, comparar mes y anio con get month y get full year
// pushear componentes por vendedora 
// monto de plata por vendedora con precioMaquina
// if vendedora uno mayor que dos gana

function vendedoraDelMes(mes, anio) {
    var nombreVendeUno = [];
    var nombreVendeDos = [];

    for (let i = 0; i < local.ventas.length; i++) {
        var lasFechas = local.ventas[i].fecha
        var lasVendedoras = local.ventas[i].nombreVendedora
        var losComponentes = local.ventas[i].componentes
        //console.log(lasFechas);   
        // console.log(lasVendedoras);
        //console.log(losComponentes);

        if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
            //console.log("la hacemo no la hacemo");

            for (let k = 0; k < losComponentes.length; k++) {
                if (lasVendedoras === "Grace") {
                    nombreVendeUno.push(losComponentes[k])
                    //console.log("mi vendedora es Grace, la vuelta es la " +[k] + " los componentes son " + nombreVendeUno);

                } else if (lasVendedoras === "Ada") {
                    nombreVendeDos.push(losComponentes[k])
                    //console.log("mi vendedora es Ada, la vuelta es la " +[k] + " los componentes son " + nombreVendeDos);
                }
            }
        }
    }

    if (precioMaquina(nombreVendeUno) < precioMaquina(nombreVendeDos)) {
        return "La vendedera mas champion es Ada";
    } else if (precioMaquina(nombreVendeUno) > precioMaquina(nombreVendeDos)) {
        return "La vendedora mas champion es Grace";
    }

}

console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)


//HECHO PUNTO UNO D
// ventasMes(mes, anio): Obtener las ventas de un mes.

function ventasMes(mes, anio) {

    var sumaTotal = 0;

    for (let i = 0; i < local.ventas.length; i++) {

        var lasFechas = local.ventas[i].fecha
        var todosComponentes = local.ventas[i].componentes
        // console.log(todosComponentes);
        // console.log(lasFechas);

        if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
            console.log(precioMaquina(todosComponentes));
            sumaTotal = sumaTotal + precioMaquina(todosComponentes)
        }
    }
    return sumaTotal

}

console.log(ventasMes(1, 2019)); // 1250


//HECHO PUNTO UNO E
// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

// en local.ventas esta el nombre vendedora y el componente que vendio cada vendedoras
// precioMaquina es la funcion que suma precio todos los componentes

function ventasVendedora(nombreV) {
    var montoTotal = 0; //numero
    var vendedoraC = []; //array con los componentes que vendio cada una
    for (let i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].nombreVendedora)
        if (local.ventas[i].nombreVendedora === nombreV) {
            vendedoraC.push(local.ventas[i].componentes)
        }
    }

    for (let j = 0; j < vendedoraC.length; j++) {
        montoTotal = montoTotal + precioMaquina(vendedoraC[j]);
    }

    return montoTotal
}

console.log(ventasVendedora("Grace")); // 900
console.log(ventasVendedora("Ada"));


//HECHO PUNTO UNO F
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es 
//el que indica la función cantidadVentasComponente

function componenteMasVendido() {
    var nuevoArray = [];
    
    for (let i = 0; i < local.precios.length; i++) {
        var arrayComponentes= local.precios[i].componente
        
        // cantidad = cantidadVentasComponente(local.precios[i].componente)
        nuevoArray.push(cantidadVentasComponente(arrayComponentes));
    }
    console.log(nuevoArray)
    console.log(nuevoArray.sort())


    //return arrayComponentes[]
    return nuevoArray[nuevoArray.length-1];

}

console.log(componenteMasVendido()); // Monitor GPRS 3000


//HECHO PUNTO UNO G
// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.


//si coincide mes y anio y ventas !== 0 true

function huboVentas(mes, anio) {
    for (let i = 0; i < local.ventas.length; i++) {
        var lasFechas = local.ventas[i].fecha;
        if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
            return true
        } else {
            return false
        }
    }
}

console.log(huboVentas(3, 2019)); // false

// console.log( huboVentas(3, 2019) ); // false
