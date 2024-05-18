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


class Car{
    
constructor(name,color,price,year){
        this.name=name;
        this.color=color;
        this.price=price;
        this.year=year;
    }

    startEngine(){
        console.log(this.name+' Engine Started');
    }
   
}
var car1=new Car('GMC','RED',7000,2024);
var car2=new Car('BMW','GREEN',5000,2024);

car1.startEngine();
car2.startEngine();