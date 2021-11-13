let filas: any[] = new Array(20);
let i: number = 0;
let j: number = 0;
for (i = 0; i < filas.length; i++) {
  filas[i] = [0, 0, 0];
}
let asientos = String(prompt("quiere ver los asientos libres?S/N"));

while (asientos !== "S") {
  asientos = String(prompt("quiere ver los asientos libres?S/N"));
}
console.log(filas);

function asientosLibres(): any {
  let asientos = String(prompt("quiere ver los asientos libres?S/N"));
  while (asientos !== "S") {
    asientos = String(prompt("quiere ver los asientos libres?S/N"));
  }

  console.log(filas);
}

function asientoVenta(): any {
  i = Number(prompt("que fila de asiento quiere comprar"));
  while (i < 0 && i >= filas.length) {
    i = Number(prompt("que fila de asiento quiere comprar"));
  }
  j = Number(prompt("que asiento quiere comprar de la fila", i));
  while (j < 0 && j >= 3) {
    j = Number(prompt("que asiento quiere comprar de la fila", i));
  }
}

asientoVenta();
filas[i][j] = 1;
console.log(filas);
let seguir = String(prompt("quiere seguir comprando?S/N"));
while (seguir === "S") {
  asientosLibres();
  asientoVenta();
  filas[i][j] = 1;
  seguir = String(prompt("quiere seguir comprando?S/N"));
}
console.log("gracias por su compra");
