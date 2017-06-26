
var assert = require('assert');

function rectangulo(base, altura){
  this.base=base;
  this.altura=altura;
  this.area= function(){
    return this.base * this.altura;
  };
}

var miRectangulo = new rectangulo(6,8);
console.log(miRectangulo);
console.log("El area del rectangulo es: "+miRectangulo.area());

describe("Area del Rectangulo", function(){
  it("area de 6b x 8a",function(){
    assert.equal(48,miRectangulo.area());
  });
});
