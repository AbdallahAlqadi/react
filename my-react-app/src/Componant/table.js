import {useNavigate} from 'react-router-dom'
import '../style/table.css'



function Table(){
    //Json
var items=[
{id:'1',name:'Ahmad',amount:'100',spendData:'2024-2-1',catrgory:'category1'},
{id:'2',name:'Abdallah',amount:'200',spendData:'2024-2-1',catrgory:'category2'},
{id:'3',name:'Esa',amount:'300',spendData:'2024-2-1',catrgory:'category3'},
{id:'4',name:'Kamal',amount:'400',spendData:'2024-2-1',catrgory:'category4'},
{id:'5',name:'Saleh',amount:'500',spendData:'2024-2-1',catrgory:'category5'}

]

//هاي الجزئيه يلي بتنقلنا من صفحه لاخرى
const navigate=useNavigate();

var SeeDeatels= (item)=>{
    console.log(item)
    var query=new URLSearchParams(item).toString()  //برفع المعلومات
    console.log(query)
    navigate('/details?{query}')
}

var listitems=items.map(item=>(   //زي for loop
//map فقط بتعامل مع object
    <tr className='bord'>
<td className='bord'>{item.id}</td>
<td className='bord'>{item.name}</td>
<td className='bord'>{item.amount}</td>
<td className='bord'>{item.spendData}</td>
<td className='bord'>{item.catrgory}</td>
<td className='bord'><button className='button' onClick={()=>{SeeDeatels(item)}}>More-Info</button></td>

        </tr>
    ))

return(
<div id='table'>

    <table  className='table1' border='5' >
        <thead className='bord'>
        <th className='bord'>Id</th>
        <th className='bord'>Name</th>
        <th className='bord'>Amount</th>
        <th className='bord'>spendData</th>
        <th className='bord'>Category</th>
        <th className='bord'>More-Info</th>
        </thead>
        <tbody className='bord'>
            {listitems}
        </tbody>
    </table>
</div>

)

}

export default Table;