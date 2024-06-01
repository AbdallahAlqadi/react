import '../style/table.css'

function Table(){
var items=[

{id:'1',name:'name1',amount:'100',spendData:'2024-2-1',catrgory:'category1'},
{id:'2',name:'name2',amount:'200',spendData:'2024-2-1',catrgory:'category2'},
{id:'3',name:'name3',amount:'300',spendData:'2024-2-1',catrgory:'category3'},
{id:'4',name:'name4',amount:'400',spendData:'2024-2-1',catrgory:'category4'},
{id:'5',name:'name5',amount:'500',spendData:'2024-2-1',catrgory:'category5'}

]

var listitems=items.map(item=>(

    <tr className='bord'>
<td className='bord'>{item.id}</td>
<td className='bord'>{item.name}</td>
<td className='bord'>{item.amount}</td>
<td className='bord'>{item.spendData}</td>
<td className='bord'>{item.catrgory}</td>

        </tr>
    ))

return(
<div id='table'>

    <table border='5'>
        <thead className='bord'>
            <tr className='bord'></tr>
        <th className='bord'>Id</th>
        <th className='bord'>Name</th>
        <th className='bord'>Amount</th>
        <th className='bord'>spendData</th>
        <th className='bord'>Category</th>
        </thead>
        <tbody className='bord'>
            {listitems}
        </tbody>
    </table>
</div>

)

}

export default Table;