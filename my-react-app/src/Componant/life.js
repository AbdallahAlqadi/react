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
            data:[{id:1,name:'ahmad',age:10},{id:2,name:'esa',age:20},{id:3,name:'abdallah',age:30}],
            loading:false
        });
        console.log('it fitch the Data')
    },1000)
}

renderTable(tableData){
    return(
        tableData.map(item=>(
         
            <div className="grid">
        <h5>Id: {item.id}</h5>
        <h5>Name: {item.name}</h5>
        <h5>Age: {item.age}</h5>
        </div>
    
        ))
      
    )
}

render(){ //ثالث
    console.log('render')
    const {data,loading}=this.state;
    return(
        <>
        {loading ? <h1>loading....</h1>:<h1>{this.renderTable(data)}</h1>}
        </>
    )
   
}

}


export default LifecycleDemo;