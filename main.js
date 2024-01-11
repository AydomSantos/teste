
class Herois{
  constructor(forca, velocidade){
    this.forca = forca;
    this.velocidade = velocidade;
  }

  classificar(){
    if (this.forca >= 50 && this.velocidade >= 50) {
      return "Herói Poderoso e Rápido";
    } else if(this.forca >= 50){
      return "Herói Poderoso"
    } else if(this.velocidade >= 50){
      return "Herói mais rapido"
    } else {
      return " Heroi comun"
    }
  }
  
}

let heroi1 = new Herois(70, 80);
let heroi2 = new Herois(30, 60);
let heroi3 = new Herois(50, 50);

console.log("Herói 1:", heroi1.classificar());
console.log("Herói 2:", heroi2.classificar());
console.log("Herói 3:", heroi3.classificar());