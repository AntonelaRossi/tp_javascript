var local = { 
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],

    ventas: [
        { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"] },
        { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"] },
        { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"] },
        { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"] }
    ], 

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


//PUNTO UNO A

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
    //console.log(sumaComponente)
    return sumaComponente;
}

var ventaDelDia = ["Monitor GPRS 3000", "Motherboard ASUS 1500", "Monitor ASC 543"];
console.log("1.A");
console.log("La suma de los componentes es: " + precioMaquina(ventaDelDia)); // 320 ($200 del monitor + $120 del motherboard) // le agregue otro componente asi que $570


//PUNTO UNO B

function cantidadVentasComponente(lasVentas) {
    var sumaVentas = [];
    var arrayObjetosVentas = local.ventas

    for (let i = 0; i < arrayObjetosVentas.length; i++) {
        //console.log(arrayObjetosVentas[i].componentes);
        for (let j = 0; j < arrayObjetosVentas[i].componentes.length; j++) { 
            if (lasVentas === arrayObjetosVentas[i].componentes[j]) {
                //console.log (arrayObjetosVentas[i].componentes[j])
                sumaVentas.push(arrayObjetosVentas[i].componentes[j])

            }
        }
    }
    return sumaVentas.length
}
console.log("1.B")
console.log("El componente se vendio " + cantidadVentasComponente("Monitor ASC 543") + " veces"); // 2

//HECHO PUNTO UNO C
// vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió 
//en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica 
//la función precioMaquina.
//Date.getMonth() y Date.getFullYear()


function vendedoraDelMes(mes, anio) {
    var nuevoArray = [];

    for (let i = 0; i < local.vendedoras.length; i++) {
        var objetoVendedora = {
            nombre: local.vendedoras[i],
            dineroVendido: 0,
        }

        for (let z = 0; z < local.ventas.length; z++) { //4 vueltas

            if (mes - 1 === local.ventas[z].fecha.getMonth() && anio === local.ventas[z].fecha.getFullYear()) {
                var precioComponentes = precioMaquina(local.ventas[z].componentes)

                if (local.ventas[z].nombreVendedora === local.vendedoras[i]) {
                    //console.log(local.ventas[z].nombreVendedora)

                    if (objetoVendedora.nombre === local.ventas[z].nombreVendedora) {

                        objetoVendedora.dineroVendido = objetoVendedora.dineroVendido + precioComponentes;
                    }
                }
            }
        }
        nuevoArray.push(objetoVendedora)
    }

    var vendedoraMaxima;
    var ventaMaxima = 0


    for (let k = 0; k < nuevoArray.length; k++) {
        // console.log(nuevoArray[k].dineroVendido)

        if (nuevoArray[k].dineroVendido > ventaMaxima) {
            ventaMaxima = nuevoArray[k].dineroVendido;
            vendedoraMaxima = nuevoArray[k].nombre;
            return "La vendedora que mas vendio es " + vendedoraMaxima + " vendio " + nuevoArray[k].dineroVendido
        }

    }

}
console.log("1.C")
console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)



// VERSION HARDCODEO
// function vendedoraDelMes(mes, anio) {
//     var nombreVendeUno = [];
//     var nombreVendeDos = [];

//     for (let i = 0; i < local.ventas.length; i++) {
//         
//         var lasVendedoras = local.ventas[i].nombreVendedora
//         var losComponentes = local.ventas[i].componentes
//         //console.log(lasFechas);   
//         //console.log(lasVendedoras);
//         //console.log(losComponentes);

//         if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
//             //console.log("la hacemo no la hacemo");

//             for (let k = 0; k < losComponentes.length; k++) {
//                 if (lasVendedoras === "Grace") {
//                     nombreVendeUno.push(losComponentes[k])
//                     //console.log("mi vendedora es Grace, la vuelta es la " +[k] + " los componentes son " + nombreVendeUno);

//                 } else if (lasVendedoras === "Ada") {
//                     nombreVendeDos.push(losComponentes[k])
//                     //console.log("mi vendedora es Ada, la vuelta es la " +[k] + " los componentes son " + nombreVendeDos);
//                 }
//             }
//         }
//     }

//     if (precioMaquina(nombreVendeUno) < precioMaquina(nombreVendeDos)) {
//         return "La vendedora mas champion es Ada";
//     } else if (precioMaquina(nombreVendeUno) > precioMaquina(nombreVendeDos)) {
//         return "La vendedora mas champion es Grace";
//     }

// }



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
            //console.log(precioMaquina(todosComponentes));
            sumaTotal = sumaTotal + precioMaquina(todosComponentes)
        }
    }
    return sumaTotal

}
console.log("1.D")
console.log("La suma total del mes es " + ventasMes(1, 2019)); // 1250


//HECHO PUNTO UNO E
// ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

// en local.ventas esta el nombre vendedora y el componente que vendio cada vendedoras
// precioMaquina es la funcion que suma precio todos los componentes

function ventasVendedora(param) {
    var montoTotal = 0; //numero
    var acumulador = []; //array con los componentes que vendio cada una
    for (let i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].nombreVendedora)
        if (local.ventas[i].nombreVendedora === param) {
            acumulador.push(local.ventas[i].componentes)
        }
    }

    for (let j = 0; j < acumulador.length; j++) {
        montoTotal = montoTotal + precioMaquina(acumulador[j]);
    }

    return montoTotal
}
console.log("1.E")
console.log("La vendedora elegida vendio " + ventasVendedora("Grace") + " pesos en total"); // 900
console.log("La vendedora elegida vendio " + ventasVendedora("Ada") + " pesos en total");


//HECHO PUNTO UNO F
// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es 
// el que indica la función cantidadVentasComponente
// creo un array para guardar las cantidades de ventas nuevoArray (saco los componentes de precios y les aplico la funcion cantidadVen)
// las cantidades me deben coincidir con los componentes tal componente tal cantidad

function componenteMasVendido() {

    var objetoData = {
        nombre: [],
        cantidad: [],
    }

    for (let i = 0; i < local.precios.length; i++) {
        objetoData.nombre.push(local.precios[i].componente);
        objetoData.cantidad.push(cantidadVentasComponente(local.precios[i].componente));
    }

    var indiceCantidadMasVen = objetoData.cantidad.indexOf(Math.max.apply(null, (objetoData.cantidad)));
    //console.log(indiceCantidadMasVen)

    return objetoData.nombre[indiceCantidadMasVen]

    //console.log(objetoData)
}

console.log("1.F")
console.log("El componente mas vendido es: " + componenteMasVendido()); // Monitor GPRS 3000


//HECHO PUNTO UNO G
// huboVentas(mes, anio): que indica si hubo ventas en un mes determinado.


//si coincide mes y anio y ventas !== 0 true

function huboVentas(mes, anio) {
    for (let i = 0; i < local.ventas.length; i++) {

        if (ventasMes(mes, anio) !== 0) {
            return true
        } else {
            return false
        }
    }
}
console.log("1.G")
console.log("En el mes seleccionado hubo ventas: " + huboVentas(3, 2019)); // false

// console.log( huboVentas(3, 2019) ); // false


//////////////////////////////// PARTE 2 ///////////////////////////////


// Nueva sucursal en Caballito, datos de las ventas también tienen el nombre de la sucursal en la cual se realizó. 
//Por ejemplo: { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: 'Centro' }. Por este cambio, se pide:


//PUNTO DOS A
// En las ventas ya existentes, tenemos que agregar la propiedad sucursal con el valor Centro (ya que es la sucursal original).
console.log("2.A")
console.log("Sucursal Centro al array Ventas:")
for (let i = 0; i < local.ventas.length; i++) {
    local.ventas[i].sucursal = "Centro";
    console.log(local.ventas[i]);
}

//PUNTO DOS B
// Agregar al objeto principal la propiedad sucursales: ['Centro', 'Caballito']
console.log("2.B")
console.log("Agregamos la propiedad SUCURSALES a local:")
local.sucursales = ["Centro", "Caballito"];
console.log(local)

//PUNTO DOS C
// Cargar la siguiente información en el array ventas, creando sus respectivos objetos 
//siguiendo el patrón: fecha, nombreVendedora, componentes, sucursal
console.log("2.C")
console.log("NUEVAS VENTAS!!!")

function nuevasVentas(fecha, nombreVendedora, componentes, sucursal) {
    local.ventas.push({ fecha, nombreVendedora, componentes, sucursal })
    return
}

nuevasVentas(new Date(2019, 1, 12), "Hedy", ["Monitor GPRS 3000", "HDD Toyiva"], "Centro");
nuevasVentas(new Date(2019, 1, 24), "Sheryl", ["Motherboard ASUS 1500", "HDD Wezter Dishital"], "Caballito")
nuevasVentas(new Date(2019, 1, 1), "Ada", ["Motherboard MZI", "RAM Quinston Fury"], "Centro")
nuevasVentas(new Date(2019, 1, 11), "Grace", ["Monitor ASC 543", "RAM Quinston"], "Caballito")
nuevasVentas(new Date(2019, 1, 15), "Ada", ["Motherboard ASUS 1200", "RAM Quinston Fury"], "Centro")
nuevasVentas(new Date(2019, 1, 12), "Hedy", ["Motherboard ASUS 1500", "HDD Toyiva"], "Caballito")
nuevasVentas(new Date(2019, 1, 21), "Grace", ["Motherboard MZI", "RAM Quinston"], "Centro")
nuevasVentas(new Date(2019, 1, 08), "Sheryl", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro")
nuevasVentas(new Date(2019, 1, 16), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston Fury"], "Centro")
nuevasVentas(new Date(2019, 1, 27), "Hedy", ["Motherboard ASUS 1200", "HDD Toyiva"], "Caballito")
nuevasVentas(new Date(2019, 1, 22), "Grace", ["Monitor ASC 543", "HDD Wezter Dishital"], "Centro")
nuevasVentas(new Date(2019, 1, 05), "Ada", ["Motherboard ASUS 1500", "RAM Quinston"], "Centro")
nuevasVentas(new Date(2019, 1, 01), "Grace", ["Motherboard MZI", "HDD Wezter Dishital"], "Centro")
nuevasVentas(new Date(2019, 1, 07), "Sheryl", ["Monitor GPRS 3000", "RAM Quinston"], "Caballito")
nuevasVentas(new Date(2019, 1, 14), "Ada", ["Motherboard ASUS 1200", "HDD Toyiva"], "Centro")

console.log(local.ventas)

//PUNTO DOS D
// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(param) {
    var montoTotal = 0;
    var acumulador = [];
    for (let i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].sucursal === param) {
            acumulador.push(local.ventas[i].componentes)
        }
    }

    for (let j = 0; j < acumulador.length; j++) {
        montoTotal = montoTotal + precioMaquina(acumulador[j]);

    }
    return montoTotal;
}

console.log("2.D")
console.log("La sucursal elegida vendió: " + ventasSucursal("Centro")); // 4195


//PUNTO DOS E
// Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad 
//pero trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos repetir?

console.log("2.E")
console.log("LO UNICO QUE CAMBIA ES LA CONDICION DEL IF: if (local.ventas[i].nombreVendedora === param) ---- if (local.ventas[i].sucursal === param) ----" +
    "se podria poner un Or || en la condicion del if para que solo dependa de lo que entra por parametro")


//PUNTO DOS F
// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y 
//devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina.

function sucursalDelMes(mes, anio) {
    var nuevoArray = [];

    for (let i = 0; i < local.sucursales.length; i++) {
        var objetoSucursales = {
            sucursal: local.sucursales[i],
            dineroVendido: 0,
        }

        for (let z = 0; z < local.ventas.length; z++) { //4 vueltas

            if (mes - 1 === local.ventas[z].fecha.getMonth() && anio === local.ventas[z].fecha.getFullYear()) {
                var precioComponentes = precioMaquina(local.ventas[z].componentes)

                if (local.ventas[z].sucursal === local.sucursales[i]) {
                    //console.log(local.ventas[z].nombreVendedora)

                    if (objetoSucursales.sucursal === local.ventas[z].sucursal) {

                        objetoSucursales.dineroVendido = objetoSucursales.dineroVendido + precioComponentes;
                    }
                }
            }
        }
        nuevoArray.push(objetoSucursales)
    }

    var sucursalMaxima;
    var ventaMaxima = 0


    for (let k = 0; k < nuevoArray.length; k++) {
        // console.log(nuevoArray[k].dineroVendido)

        if (nuevoArray[k].dineroVendido > ventaMaxima) {
            ventaMaxima = nuevoArray[k].dineroVendido;
            sucursalMaxima = nuevoArray[k].sucursal;
            return "La sucursal que mas vendio es " + sucursalMaxima
        }

    }

    //console.log(nuevoArray)

}
console.log("2.F")
console.log(sucursalDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

//VERSION HARDCODEADA 2F

// function sucursalDelMes(mes, anio) {
//     var sucursalUno = [];
//     var sucursalDos = [];

//     for (let i = 0; i < local.ventas.length; i++) {
//         //console.log(local.ventas[i].sucursal)
//         var lasFechas = local.ventas[i].fecha
//         var lasSucursales = local.ventas[i].sucursal
//         var losComponentes = local.ventas[i].componentes

//         if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
//             //console.log("hola")

//             for (let k = 0; k < losComponentes.length; k++) {
//                 if (lasSucursales === "Centro") {
//                     sucursalUno.push(losComponentes[k])

//                 } else if (lasSucursales === "Caballito") {
//                     sucursalDos.push(losComponentes[k])
//                 }
//             }
//         }
//     }

//     if (precioMaquina(sucursalUno) < precioMaquina(sucursalDos)) {
//         return "La sucursal que mas vendió es Caballito";
//     } else if (precioMaquina(sucursalUno) > precioMaquina(sucursalDos)) {
//         return "La sucursal que mas vendió es Centro";
//     }

// }

// console.log("2.F")
// console.log(sucursalDelMes(1, 2019)); // "Centro"


///////////////////////////// PARTE 3 ///////////////////////////////

//Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre 
//las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// PUNTO TRES A

//renderPorMes() //Muestra una lista ordenada del importe total vendido por cada mes/año
// el orden viene desde el mes
//console.log(ventasMes(2,2019))
//console.log(local.ventas)

function renderPorMes() {
    console.log("Ventas por mes")
    var stringMuyLargo = ""
    var meses = {
        mesesNumero: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        mesesPalabra: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
            "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    }

    for (let i = 0; i < meses.mesesNumero.length; i++) {
        if (huboVentas(meses.mesesNumero[i], 2019)) {
            stringMuyLargo = stringMuyLargo + "El mes " + meses.mesesPalabra[i] + " vendio: " + ventasMes(meses.mesesNumero[i], 2019) + "\n";
            //porque me deja ver meses.mesesPalabra con i si no lo estoy recorriendo?

            //con return solo me retorna un dato
            //return "El mes " + meses.mesesPalabra[i] + " vendio: " + ventasMes(meses.mesesNumero[i],2019)
        }
        
    }
    return stringMuyLargo
}


console.log("3.A");
console.log(renderPorMes());
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210


//PUNTO TRES B

// renderPorSucursal() // Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal() {
    console.log("Ventas por sucursal")
    var stringMuyLargo = ""

    for (let i = 0; i < local.sucursales.length; i++) {
        stringMuyLargo = stringMuyLargo + "El local " + local.sucursales[i] + " vendió " + ventasSucursal(local.sucursales[i]) + "\n";

    }
    return stringMuyLargo

}

console.log("3.B")

console.log(renderPorSucursal());
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


//PUNTO TRES C

// render() // Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó



//console.log("Grace vendio: " + ventasVendedora("Grace"));
//console.log("Ada vendio: " + ventasVendedora("Ada"));
//console.log("Hedy vendio: " + ventasVendedora("Hedy"));
//console.log("Sheryl vendio: " + ventasVendedora("Sheryl"));



function render() {
    console.log(renderPorMes());
    console.log(renderPorSucursal());
    console.log("Producto estrella: " + componenteMasVendido())

    var ventasVendedorasGlobal = [];

    for (let i = 0; i < local.vendedoras.length; i++) {
        vendioVendedora = {
            nombre: local.vendedoras[i],
            vendio: 0,
        }

        vendioVendedora.vendio = vendioVendedora.vendio + ventasVendedora(local.vendedoras[i])
        ventasVendedorasGlobal.push(vendioVendedora)
    }

    //console.log(ventasVendedorasGlobal)

    var vendedoraMaxima;
    var ventaMaxima = 0

    for (var k = 0; k < ventasVendedorasGlobal.length; k++) {
        //console.log(ventasVendedorasGlobal.length)

        if (ventaMaxima < ventasVendedorasGlobal[k].vendio) {
            ventaMaxima = ventasVendedorasGlobal[k].vendio;
            vendedoraMaxima = ventasVendedorasGlobal[k].nombre;
            
            
        }
        
    }
    return "Vendedora que mas ingresos generó: " + vendedoraMaxima 
}

console.log("3.C");
console.log("Reporte")

console.log(render());
// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace