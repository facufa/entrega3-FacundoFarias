const listaProductos = [];

function Productos(nombre, almacenamiento, color, nivelBateria, condicion, oferta, precio ,id) {
    this.nombre = nombre,
    this.gb = almacenamiento,
    this.color = color,
    this.bateria = nivelBateria,
    this.condicion = condicion,
    this.oferta = oferta,
    this.precioUsd = precio,

    listaProductos.push(this)
};

//IPhone 
const IPhone01 = new Productos('IPhone 14', '128 GB', 'blue', '100%', 'usado como nuevo', false, 870, 1);
const IPhone02 = new Productos('IPhone 14 pro', '128 GB', 'silver', '100%', 'usado como nuevo', false, 1100, 2);
const IPhone03 = new Productos('IPhone 14', '128 GB', 'blue', '100%', 'usado como nuevo', false, 870, 3);
const IPhone04 = new Productos('IPhone 13 pro max', '128 GB', 'silver', '97%', 'usado como nuevo', false, 1050, 4);
const IPhone05 = new Productos('IPhone 13 pro max', '128 GB', 'blue sierra', '87%', 'usado como nuevo', false, 970, 5);
const IPhone06 = new Productos('IPhone 13 pro max', '128 GB', 'blue sierra', '88%', 'usado como nuevo', false, 970, 6);
const IPhone07 = new Productos('IPhone 13 pro max', '128 GB', 'blue sierra', '88%', 'usado como nuevo', false, 970, 7);
const IPhone08 = new Productos('IPhone 13 pro', '128 GB', 'blue sierra', '100%', 'usado como nuevo', false, 960, 8);
const IPhone09 = new Productos('IPhone 13', '256 GB', 'blue', '91%', 'usado como nuevo', false, 790, 9);
const IPhone10 = new Productos('IPhone 13', '128 GB', 'white', '100%', 'usado como nuevo', false, 790, 10);
const IPhone11 = new Productos('IPhone 13', '128 GB', 'blue', '91%', 'usado como nuevo', false, 760, 11);
const IPhone12 = new Productos('IPhone 13', '128 GB', 'white', '86%', 'usado como nuevo', true, 700, 12);
const IPhone13 = new Productos('IPhone 12 pro max', '128 GB', 'blue pacific', '88%', 'usado como nuevo', false, 760, 13);
const IPhone14 = new Productos('IPhone 12 pro', '128 GB', 'blue', '88%', 'usado como nuevo', false, 730, 14);
const IPhone15 = new Productos('IPhone 12', '64 GB', 'purple', '100%', 'usado como nuevo', false, 560, 15);
const IPhone16 = new Productos('IPhone 12', '64 GB', 'purple', '100%', 'usado como nuevo', false, 560, 16);
const IPhone17 = new Productos('IPhone 11 pro max', '64 GB', 'graphite', '82%', 'usado como nuevo', false, 550, 17);
const IPhone18 = new Productos('IPhone 11 pro', '64 GB', 'green', '100%', 'usado como nuevo', false, 560, 18);
const IPhone19 = new Productos('IPhone 11 pro', '64 GB', 'silver', '100%', 'usado como nuevo', false, 560, 19);
const IPhone20 = new Productos('IPhone 11 pro', '64 GB', 'green', '87%', 'usado como nuevo', false, 560, 20);
const IPhone21 = new Productos('IPhone 11 pro', '64 GB', 'silver', '84%', 'usado como nuevo', false, 520, 21);
const IPhone22 = new Productos('IPhone 11', '128 GB', 'black', '100%', 'usado como nuevo', true,  510, 22);
const IPhone23 = new Productos('IPhone 11', '128 GB', 'purple', '90%', 'usado como nuevo', false, 490, 23);
const IPhone24 = new Productos('IPhone 11', '128 GB', 'black', '86%', 'usado como nuevo', false, 470, 24);
const IPhone25 = new Productos('IPhone 11', '128 GB', 'white', '83%', 'usado como nuevo', true, 450, 25);
const IPhone26 = new Productos('IPhone 11', '64 GB', 'black', '100%', 'usado como nuevo', false, 470, 26);
const IPhone27 = new Productos('IPhone 11', '64 GB', 'white', '100%', 'usado como nuevo', false, 470, 27);
const IPhone28 = new Productos('IPhone 11', '64 GB', 'purple', '99%', 'usado como nuevo', false, 460, 28);
const IPhone29 = new Productos('IPhone 11', '64 GB', 'white', '86%', 'usado como nuevo', false, 420, 29);
const IPhone30 = new Productos('IPhone 11', '64 GB', 'white', '84%', 'usado como nuevo', false, 420, 30);
const IPhone31 = new Productos('IPhone xr', '128 GB', 'yellow', '100%', 'usado como nuevo', true, 400, 31);
const IPhone32 = new Productos('IPhone xr', '128 GB', 'coral', '100%', 'usado como nuevo', false, 400, 32);
const IPhone33 = new Productos('IPhone xr', '128 GB', 'coral', '79%', 'usado como nuevo', false, 350, 33);
const IPhone34 = new Productos('IPhone xr', '64 GB', 'white', '100%', 'usado como nuevo', false, 350, 34);
const IPhone35 = new Productos('IPhone xr', '64 GB', 'white', '100%', 'usado como nuevo', false, 350, 35);
const IPhone36 = new Productos('IPhone 14 pro max', '128 GB', 'space black', '100%', 'nuevo', false, 1400, 36);
const IPhone37 = new Productos('IPhone 14 pro', '128 GB', 'gold', '100%', 'nuevo', false, 1315, 37);
const IPhone38 = new Productos('IPhone 13', '128 GB', 'mindnigth', '100%', 'nuevo', false, 930, 38);
const IPhone39 = new Productos('IPhone 13', '128 GB', 'pink', '100%', 'nuevo', false, 930, 39);
const IPhone40 = new Productos('IPhone 13', '128 GB', 'pink', '100%', 'nuevo', false, 930, 40);
//macbook
const macbook01 = new Productos('macbook air m1 chip', '256 GB', 'space gray', '90%', 'usado como nuevo', false, 830, 100);
const macbook02 = new Productos('macbook air m1 chip', '256 GB', 'space gray', '100%', 'usado como nuevo', false, 890, 101);
//IPad
const IPad01 = new Productos('IPad air 4ta generacion', '64 GB', 'gray', '95%', 'usado como nuevo', false, 500, 102);
//accesorios
const mouse01 = new Productos('magic mouse 2', '-', 'white', 'pocos ciclos', 'usado como nuevo', false, 170, 103);
const pencil01 = new Productos('apple pencil 1', '-', 'white', '-', 'nuevo', false, 170, 104);
const pencil02 = new Productos('apple pencil 2', '-', 'white', '-', 'nuevo', false, 200, 105);
const airpods = new Productos('airpods pro serie 2 replica a+', '-', 'white', '-', 'nuevo', false, 36,26, 106);