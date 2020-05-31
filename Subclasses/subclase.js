class ceaci {
    constructor (nume, an, dependente) {
        this.nume = nume;
        this.an = an;
        this.dependente = dependente;
        
    }


}

class individual extends ceaci {
    constructor(nume, an, dependente, pasiuni, job) {
    super(nume, an, dependente);
        this.pasiuni = pasiuni;
        this.job = job; 
        
    }

    
    dati() {
        return this.job;
    }

}

var tavi = new ceaci ("Oca", 4, "Tabac", "RUPETICAPUPEROMINIMALE", "freelancer");
var armand = new ceaci ("Armand" ,4 , "Boabe", "Ale", "JavaDev");
var shon = new ceaci ("Shon", 5, "PREA MULTE BOABE IN PULA MEA", "Boabe", "injiner");
var sergiu = new ceaci ("Sergiu", 5, "Alcool", "Latest and greatest tech", "injiner");

console.log(tavi.dati());


