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
            data:[{id:1,name:'ahmad'},{id:2,name:'esa'},{id:3,name:'abdallah'}],
            loading:false
        });
        console.log('it fitch the Data')
    },2000)
}

renderTable(tableData){
    return(
        <table border='1'>


<thead>

    <tr>
<th>id</th>
<th>name</th>
    </tr>
</thead>
<tbody>

    {
        tableData.map(item=>(
<tr>
<td>{item.id}</td>
<td>{item.name}</td>
</tr>

        ))
    }
</tbody>

        </table>
    )
}

render(){
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