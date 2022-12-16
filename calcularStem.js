function calcula_densidad(){
  var masa= 14*5.97E24;
var radio= 4*6378e3;
var volumen= (4/3)*Math.PI*radio*radio*radio;
var densidad= masa/volumen;
var d=document.getElementById("resultadoA");
d.innerHTML='densidad de Urano: ' + densidad + 'kg/(metro cubico)';
  }
