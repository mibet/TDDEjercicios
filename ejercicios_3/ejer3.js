var assert=require("assert");

function persona(nombre,edad, pasatiempo){
  //atributos
  this.nombre=nombre;
  this.edad=edad;
  this.pasatiempo=pasatiempo;

  //metodo
  this.habla= function(){
    return "hola soy "+this.nombre+" tengo "+this.edad+" años y me gusta "+this.pasatiempo
  };
}

var p1= new persona("Amalia", 18, "jugar");

console.log(p1.habla());

describe("Funcion que habla",function(){
  it("Amalia,18,jugar", function(){
    assert.equal("hola soy Amalia tengo 18 años y me gusta jugar",p1.habla());
  });
});
