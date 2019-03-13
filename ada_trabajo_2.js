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
//monto de cada componente o muchos

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
console.log("1.A");
console.log("La suma de los componentes es: " + precioMaquina(ventaDelDia)); // 320 ($200 del monitor + $120 del motherboard) // le agregue otro componente asi que $570



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
console.log("1.B")
console.log("El componente se vendio " + cantidadVentasComponente("Monitor ASC 543") + " veces"); // 2

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

    var objetoVendedoras = {
        nombre: [],
        dinero: [],
    }
    for (let w = 0; w < local.vendedoras.length; w++) {
        objetoVendedoras.nombre.push(local.vendedoras[w]);
        
    }
    
    console.log(objetoVendedoras.nombre)

    for (let i = 0; i < local.ventas.length; i++) {
        if (mes - 1 === local.ventas[i].fecha.getMonth() && anio === local.ventas[i].fecha.getFullYear()) {
            
            for (let k = 0; k < objetoVendedoras.nombre.length; k++) {
                console.log(objetoVendedoras.nombre.length);
                
                if(objetoVendedoras.nombre[k] === local.ventas[i].nombreVendedora){
                //  console.log("gol");
                objetoVendedoras.dinero.push(precioMaquina(local.ventas[i].componentes))
                    
                }
                
            }
            
            // for (let j = 0; j < objetoVendedoras.nombre.length; j++) {
            //     console.log(objetoVendedoras.nombre[i]);
            //     if(objetoVendedoras.nombre.indexOf(local.ventas[i].nombreVendedora != 0)) {
            //      console.log("gol")   
            //     }
                
            // }
        }

        


    }
 
    console.log(objetoVendedoras.dinero)
    var mayorDinero = objetoVendedoras.dinero.indexOf(Math.max.apply(null, (objetoVendedoras.dinero)));
    //console.log(indiceCantidadMasVen)

    return objetoVendedoras.nombre[mayorDinero]
}

console.log("1.C")
console.log(vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

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

function ventasVendedora(nombreV) {
    var montoTotal = 0; //numero
    var acumulador = []; //array con los componentes que vendio cada una
    for (let i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].nombreVendedora)
        if (local.ventas[i].nombreVendedora === nombreV) {
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
        var lasFechas = local.ventas[i].fecha;
        if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
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

function ventasSucursal(sucursales) {
    var montoTotal = 0;
    var acumulador = [];
    for (let i = 0; i < local.ventas.length; i++) {
        if (local.ventas[i].sucursal === sucursales) {
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
console.log("LO UNICO QUE CAMBIA ES LA CONDICION DEL IF, es algo con this!? ---- if (local.ventas[i].nombreVendedora === nombreV) ---- if (local.ventas[i].sucursal === sucursales) ----" +
    "El primer termino hasta entrar al objeto LOCAL y al array VENTAS es igual, lo que cambia es la propiedad de ese objeto que necesitamos. El segundo termino entra por parametro")


//PUNTO DOS F
// Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y 
//devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. 
//El importe de una venta es el que indica la función precioMaquina.

function sucursalDelMes(mes, anio) {
    var sucursalUno = [];
    var sucursalDos = [];

    for (let i = 0; i < local.ventas.length; i++) {
        //console.log(local.ventas[i].sucursal)
        var lasFechas = local.ventas[i].fecha
        var lasSucursales = local.ventas[i].sucursal
        var losComponentes = local.ventas[i].componentes

        if (mes - 1 === lasFechas.getMonth() && anio === lasFechas.getFullYear()) {
            //console.log("hola")

            for (let k = 0; k < losComponentes.length; k++) {
                if (lasSucursales === "Centro") {
                    sucursalUno.push(losComponentes[k])

                } else if (lasSucursales === "Caballito") {
                    sucursalDos.push(losComponentes[k])
                }
            }
        }
    }

    if (precioMaquina(sucursalUno) < precioMaquina(sucursalDos)) {
        return "La sucursal que mas vendió es Caballito";
    } else if (precioMaquina(sucursalUno) > precioMaquina(sucursalDos)) {
        return "La sucursal que mas vendió es Centro";
    }

}

console.log("2.F")
console.log(sucursalDelMes(1, 2019)); // "Centro"


///////////////////////////// PARTE 3 ///////////////////////////////

//Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre 
//las ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:

// PUNTO TRES A

//renderPorMes() //Muestra una lista ordenada del importe total vendido por cada mes/año
// el orden viene desde el mes
//console.log(ventasMes(2,2019))
//console.log(local.ventas)

function renderPorMes() {
    return "Ventas por mes" + "\n" + "Total de enero: " + ventasMes(1, 2019) + "\n" + "Total de Febrero: " + ventasMes(2, 2019);
}

console.log("3.A");
console.log(renderPorMes());
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210


//PUNTO TRES B

// renderPorSucursal() // Muestra una lista del importe total vendido por cada sucursal

function renderPorSucursal() {
    return "Ventas por sucursal" + "\n" + "Total Sucursal Centro: " + ventasSucursal("Centro") + "\n" + "Total Sucursal Caballito: " + ventasSucursal("Caballito");
}

console.log("3.B")
console.log(renderPorSucursal());
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265


//PUNTO TRES C

// render() // Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

console.log("3.C");

//console.log("Grace vendio: " + ventasVendedora("Grace"));
//console.log("Ada vendio: " +ventasVendedora("Ada"));
//console.log("Hedy vendio: " +ventasVendedora("Hedy"));
//console.log("Sheryl vendio: " +ventasVendedora("Sheryl"));



function render() {
    //var arrayVendedoras = [];
    //for (let i = 0; i < local.vendedoras.length; i++) {
    //    var ventasLocas = local.vendedoras[i] +  " vendio: " + ventasVendedora(local.vendedoras[i]);
    //    console.log(ventasLocas);
    //}

    //for (let i = 0; i < local.vendedoras.length; i++) {
    //    arrayVendedoras.push(ventasVendedora(local.vendedoras[i]));

    //}
    //console.log(arrayVendedoras)

    return "Reporte" + "\n" + renderPorMes() + "\n" + renderPorSucursal() + "\n" + "Producto estrella: " + componenteMasVendido() + "\n"
}

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