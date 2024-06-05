import React,{Component} from "react";

class LifecycleDemo extends Component{

    constructor(props){
        super(props);
        this.state={

        data:null,
        loading:true
        }
        console.log('Constructor');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
     this.fetchData();
    }

fetchData(){
    setTimeout(()=>{
        this.setState({
            data:'this is Data',
            loading:false
        });
        console.log('it fitch the Data')
    },2000)
}

render(){
    console.log('render')
    const {data,loading}=this.state;
    return(
        <>
        {loading ? <h1>loading....</h1>:<h1>{data}</h1>}
        </>
    )
   
}

}


export default LifecycleDemo;