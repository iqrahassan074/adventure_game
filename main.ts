import inquirer from "inquirer";

class Player {
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncreese() {
        this.fuel = 100
    }
}

class Opponent{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}


let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "please enter your name",
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select your opponent",
        choices: ["skeleton","alien","zombie"]
    }
])

let P1 = new Player (player.name)
let O1 = new Opponent (opponent.select)

do{
    // skeleton
    if(opponent.select == "skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["attack","drink portion","run for your life.."]
            }
        ]);
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                
            }
            if(num > 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
            }       
          
        }
        if(ask.opt == "drink portion"){
            P1.fuelIncreese()
            console.log(`you drink health portion your fuel is ${P1.fuel}`);
            
        }
        if(ask.opt = "run for your life.."){
            console.log("you loose, better luck next time");
    }
    }

    // alien
    if(opponent.select == "alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["attack","drink portion","run for your life.."]
            }
        ]);
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                
            }
            if(num > 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
            }       
          
        }
        if(ask.opt == "drink portion"){
            P1.fuelIncreese()
            console.log(`you drink health portion your fuel is ${P1.fuel}`);
            
        }
        if(ask.opt = "run for your life.."){
            console.log("you loose, better luck next time");
    }
    }

    // zombie
    if(opponent.select == "zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["attack","drink portion","run for your life.."]
            }
        ]);
        if(ask.opt == "attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
                
            }
            if(num > 0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name} fuel is ${O1.fuel}`);
            }       
          
        }
        if(ask.opt == "drink portion"){
            P1.fuelIncreese()
            console.log(`you drink health portion your fuel is ${P1.fuel}`);
            
        }
        if(ask.opt = "run for your life.."){
            console.log("you loose, better luck next time");
    }
    }
}
while (true)






