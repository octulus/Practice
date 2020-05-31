class ceaci {
    constructor (name, year, joys) {
        this.name = name;
        this.year = year;
        this.joys = joys;
    }
}

class individual extends ceaci {
    constructor(name, year, joys, passions, job) {
    super(name, year, joys);
        this.passions = passions;
        this.job = job;  
    }
}

var tavi = new ceaci ("Oca", 4, "Ispiration", "Technohead", "freelancer");
var armand = new ceaci ("Armand" ,4 , "Social", "Ale", "JavaDev");
var shon = new ceaci ("Shon", 5, "DnB", "Dej", "injiner");
var sergiu = new ceaci ("Sergiu", 5, "Tinkering", "Latest and greatest tech", "injiner");

var func = function() {
    return this.job;
}

console.log(tavi.func);


