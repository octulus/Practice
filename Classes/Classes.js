/*
class Animal {
    constructor(name, height, weight) {
        
        this.name = name;
        this.height = height;
        this.weight = weight;
        console.log("God has created a new animal", name, "cu inaltimea de", height, "si greutatea de", weight);
    }

    nameLength() {
        return this.name.length;
    }
    
}*/
/*
class Pasare extends Animal {
    super(name, height, weight);
    constructor(name, height, weight, aripi, cioc) {
        this.aripi = aripi;
        this.cioc = cioc;
    }

    cioc() {
        console.log(this.aripi);
    }
}
*/

class Animal {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight; 
    }

    nameLength() {
        return this.name.length;
    }
}
var dog = new Animal("Mario", 10, 10) ;
var fazan = new Animal("Ciupacabra", 5, 5, 2, 4) ;



console.log(dog.nameLength());
