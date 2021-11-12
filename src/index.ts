let filas: any[] = new Array(20);
let i: number = 0;
let j: number = 0;
for (i = 0; i < filas.length; i++) {
  filas[i] = [0, 0, 0];
}

function asientosLibres(): any {
  let asientos = String(prompt("quiere ver los asientos libres?S/N"));
  while (asientos !== "S") {
    asientos = String(prompt("quiere ver los asientos libres?S/N"));
  }

  console.log(filas);
}

asientosLibres();

function asientoVenta(): any {
  i = Number(prompt("que fila de asiento quiere comprar"));
  while (i < 0 && i >= filas.length) {
    i = Number(prompt("que fila de asiento quiere comprar"));
  }
  j = Number(prompt("que asiento quiere comprar de la fila", i));
  while (j < 0 && j >= 3) {
    j = Number(prompt("que asiento quiere comprar de la fila", i));
  }
  filas[i][j] = 1;

  for (let i: number = 0; i < filas.length; i++) {
    for (let j: number = 0; j < 3; j++) {}
  }
  console.log(filas);
}

asientoVenta();
asientosLibres();
