import React,{Component} from "react";

class LifecycleDemo extends Component{

    constructor(props){ //اول
        super(props);
        this.state={

        data:null,
        loading:true
        }
        console.log('Constructor');
    }

    componentWillMount(){ //ثاني
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
    },1000)
}

renderTable(tableData){
    return(
        <table border='2'>


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