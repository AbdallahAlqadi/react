import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../style/table.css';
import { useState } from 'react';

function Table() {
  // JSON data (corrected variable name)
  var [items,setItems]=useState([
  
    { id: '1', name: 'Ahmad', amount: '100', spendData: '2024-2-1', category: 'category1' },
    { id: '2', name: 'Abdallah', amount: '200', spendData: '2024-2-1', category: 'category2' },
    { id: '3', name: 'Esa', amount: '300', spendData: '2024-2-1', category: 'category3' },
    { id: '4', name: 'Kamal', amount: '400', spendData: '2024-2-1', category: 'category4' },
    { id: '5', name: 'Saleh', amount: '500', spendData: '2024-2-1', category: 'category5' },
   ])

  // const [items, setItems] = useState(itemsData); // Initialize state with data
  const navigate = useNavigate();

  function SeeDetails(item) {
    console.log(item);
    const query = new URLSearchParams(item);
    console.log(query);
    navigate(`/details`, { state: item });
  }

  // Delete
  function DeleteItem(index) {

  [...items].splice(index)
  
     const newItems = [...items]; 
     newItems.splice(index, 1); 
     setItems(newItems); 
  }

 //update
 

  function UpdateItem(index) {
    var Id=document.getElementById('id');
    var Name=document.getElementById('name');
    var Amountt=document.getElementById('amount');
    var spendD=document.getElementById('spenddate');
    var Categ=document.getElementById('category');
    console.log(Id)
    if(Id.value==''){
      Id.value=items[index].id
      Name.value=items[index].name
     Amountt.value=items[index].amount
      spendD.value=items[index].spendData
      Categ.value=items[index].category
    }else{
      items[index].id=Id.value;
      items[index].name=Name.value;
      items[index].amount=Amountt.value;
      items[index].spendData=spendD.value;
      items[index].category=Categ.value;
      console.log(Id.value)
      setItems([...items])
    }




    



  }


  // Add


  function AddItem() {
    var Id=document.getElementById('id').value;
    var Name=document.getElementById('name').value;
    var Amountt=document.getElementById('amount').value;
    var spendD=document.getElementById('spenddate').value;
    var Categ=document.getElementById('category').value;
  
   var newitem={id: Id, name: Name, amount: Amountt, spendData: spendD, category: Categ} ;
items.push(newitem)
setItems([...items])

  }

  const listItems = items.map((item) => (
    <tr key={item.id} className="bord">
      <td className="bord">{item.id}</td>
      <td className="bord">{item.name}</td>
      <td className="bord">{item.amount}</td>
      <td className="bord">{item.spendData}</td>
      <td className="bord">{item.category}</td>
      
      <td className="bord">
        <Button variant="contained" onClick={() => SeeDetails(item)}>
          More Info
        </Button>
      </td>
      <td className="bord">
        <Button variant="contained" onClick={() => UpdateItem(items.indexOf(item))}>
          Update
        </Button>
      </td>
      <td className="bord">
        <Button variant="contained" onClick={() => DeleteItem(items.indexOf(item))}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="table1" border="5">
        <thead className="bord">
          <tr>
            <th className="bord">Id</th>
            <th className="bord">Name</th>
            <th className="bord">Amount</th>
            <th className="bord">Spend Date</th>
            <th className="bord">Category</th>
            <th className="bord">More Info</th>
            <th className="bord">Update</th>
            <th className="bord">Delete</th>
          </tr>
        </thead>
        <tbody className="bord">

          {listItems}
       
        </tbody>
      </table>
      <Button variant="contained" onClick={AddItem}>
        Add
      </Button>

      <form  className='form'>
      <h1 id='text'>Information</h1>
<input id='id' type='text' placeholder='Id'></input>
<input id='name' type='text' placeholder='Name'></input>
<input id='amount' type='text' placeholder='Amount'></input>
<input id='spenddate' type='text' placeholder='Spend Date'></input>
<input id='category' type='text' placeholder='Category'></input>
      </form>
    </div>
  );
}

export default Table;
