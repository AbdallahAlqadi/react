import React,{Component} from "react";
import '../style/life.css'
class LifecycleDemo extends Component{

    constructor(props){
        super(props);
        this.state={

            data:null,
           loading:true
        }
    }

    componentWillMount(){ //ثاني
        console.log('componentWillMount'); 
    }

    componentDidMount(){
        console.log('componentDidMount');
     this.fetchData();
    }

fetchData(){
    setTimeout(()=>{   //على constructor بعدل
        this.setState({
            data:[{id:1,fname:'ahmad',lname:'alqadi',age:10,gender:'Male'},{id:2,fname:'esa',lname:'alqadi',age:20,gender:'Male'},{id:3,fname:'abdallah',lname:'alqadi',age:30,gender:'Male'}],
            loading:false
        });
        console.log('it fitch the Data')
    },1000)
}

renderTable(tableData){

    return(
        
       
        tableData.map(item=>(
         
            <div className="grid">
        <h5 id="item">Id: {item.id}</h5>
        <h5 id="item">Name: {item.fname}</h5>
        <h5 id="item">Name: {item.lname}</h5>
        <h5 id="item">Age: {item.age}</h5>
        <h5 id="item">Gender: {item.gender}</h5>
   
        </div>
      
        ))
      
    )
    
}

render(){ //ثالث
    console.log('render')
    const {data,loading}=this.state;
    return(
        <>
        {loading ? <h1>loading....</h1>:<h1 id="gridall">{this.renderTable(data)}</h1>}
        </>
    )
   
}

}


export default LifecycleDemo;