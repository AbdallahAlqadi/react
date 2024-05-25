// var person={
//     Name:{
//         first :'Abdallah',
//         last :'Alqadi'
//     },
//     age:30,
//     gender:'male',
//     greeting:function(){
//         alert('Hello')
//     }


// }

// console.log(person.greeting())





// class Car{
    
// constructor(name,color,price,year){
//         this.name=name;
//         this.color=color;
//         this.price=price;
//         this.year=year;
//         this.enginestart=false;
//         this.enginestop=false;
//     }

//     startEngine(){
//         if(this.enginestart==true){
//         console.log(this.name+' Engine already Started');}
//         else{
//             this.enginestart=true;
//             console.log(this.name+' Engine Started');  
//         }
//     }
//     StopEngine(){
//         if(this.enginestop==true){
//         console.log(this.name+' Engine already Stop');}
//         else{
//             this.enginestop=true;
//             console.log(this.name+' Engine Stop');
//         }
//     }   
// }
// var car1=new Car('GMC','RED',7000,2024);
// var car2=new Car('BMW','GREEN',5000,2024);

// car1.startEngine();
// car1.startEngine();
// car2.StopEngine();
// car2.StopEngine();






// class Player_Character{

//     constructor(name,price,clothing){
//  this.name=name;
//  this.price=price;
//  this.clothing=clothing; 
//  this.changecharctar=false;
//  this.notchangecharctar=false;
//     }


//     character_change(){
//         if(this.changecharctar==true){
//             console.log('charctar already change')
//         }
//         else{
// this.changecharctar=true;
//             console.log('character changed')
//         }

//     }

//     character_not_change(){
//         if(this.notchangecharctar==true){
//             console.log('charctar already notchange')
//         }
//         else{
// this.notchangecharctar=true;
//             console.log('character notchanged')
//         }
//     }

//  delete(){
//     this.name=null;
//  this.price=null;
//  this.clothing=null;
//  }

//  update(name,price,clothing){
//     this.nam=name;
//     this.price=price;
//     this.clothing=clothing;

//  }


// }



// var player1=new Player_Character('AA',700,'lava');
//  var player2=new Player_Character('BB',300,'Kano');


//  player1.character_change()
//  player1.character_change()
//  player2. character_not_change()
//  player2. character_not_change()
//  player2.delete()
//  player2. character_not_change()
//  console.log(player2)



//  player1.update('SS',250,'lava')
// console.log(player1)






// class Animal{


//     constructor(name){
//  this.name=name;
//     }

//     speack(){
// console.log(this.name+' is speaking')

//     }
// }


// class Dog extends Animal{

//     speack(){
//         console.log(this.name+' is barking')
//     }

// }

// var animal1=new Animal('SSS');
// animal1.speack();
// var dog1=new Dog('MMM');
// dog1.speack();






class CarFactory{
    
    constructor(name,color,price,year,models,maxspeed,drivemode,engin){
        this.name=name;
        this.color=color;
        this.price=price;
        this.year=year;
        this.models=models;
        this.maxspeed=maxspeed;
        this.drivemode=drivemode;
        this.engin=engin;
        this.enginstatus=false;
    }

startengine(){
    if(this.enginstatus==true){
console.log(this.name+'engine allready started');
    }
    else{
        this.enginstatus=true;
        console.log(this.name+'engine started');

    }

}


 Drivemode(drivemode){
this.drivemode=drivemode;

}

}


//class2

class Cvu extends CarFactory{

constructor(name,color,price,year,models,maxspeed,drivemode,engin,chaires,height){
   super(name,color,price,year,models,maxspeed,drivemode,engin)
    this.chaires=chaires;
    this.height=height;
}

}


//class3

class Beakup extends CarFactory{
constructor(name,color,price,year,models,maxspeed,drivemode,engin,handewight,fultype,weels,cylendres){
   super (name,color,price,year,models,maxspeed,drivemode,engin)
    this.handewight=handewight;
    this.fultype=fultype;
    this.weels=weels;
    this.cylendres=cylendres;
}
}






    var beakup=new Beakup('AA ','grean',4000,2024,2021,220,'street','zz',200,'WW',100);
   var cvu =new Cvu('BB','yellow',10000,2024,2020,210,'mountainous','mm','chaires',150)

    beakup.startengine()
    cvu.startengine()


    

