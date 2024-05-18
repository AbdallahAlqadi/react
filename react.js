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
        this.enginestart=false;
        this.enginestop=false;
    }

    startEngine(){
        if(this.enginestart==true){
        console.log(this.name+' Engine already Started');}
        else{
            this.enginestart=true;
            console.log(this.name+' Engine Started');  
        }
    }
    StopEngine(){
        if(this.enginestop==true){
        console.log(this.name+' Engine already Stop');}
        else{
            this.enginestop=true;
            console.log(this.name+' Engine Stop');
        }
    }   
}
var car1=new Car('GMC','RED',7000,2024);
var car2=new Car('BMW','GREEN',5000,2024);

car1.startEngine();
car1.startEngine();
car2.StopEngine();
car2.StopEngine();




