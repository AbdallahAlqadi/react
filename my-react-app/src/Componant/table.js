import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../style/table.css';
import { useState } from 'react';

function Table() {
  // JSON data (corrected variable name)
  const itemsData = [
    { id: '1', name: 'Ahmad', amount: '100', spendData: '2024-2-1', category: 'category1' },
    { id: '2', name: 'Abdallah', amount: '200', spendData: '2024-2-1', category: 'category2' },
    { id: '3', name: 'Esa', amount: '300', spendData: '2024-2-1', category: 'category3' },
    { id: '4', name: 'Kamal', amount: '400', spendData: '2024-2-1', category: 'category4' },
    { id: '5', name: 'Saleh', amount: '500', spendData: '2024-2-1', category: 'category5' },
  ];

  const [items, setItems] = useState(itemsData); // Initialize state with data
  const navigate = useNavigate();

  function SeeDetails(item) {
    console.log(item);
    const query = new URLSearchParams(item);
    console.log(query);
    navigate(`/details`, { state: item });
  }

  // Delete
  function DeleteItem(id) {  
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems); 
  }

 
  function UpdateItem(id) {
   
  }

  // Add
  function AddItem() {
    var th1= document.createElement('th');
th1.className = 'th1';
th1='111';

var th2= document.createElement('th');
th2.className = 'th2';
th2='222';

var th3= document.createElement('th');
th3.className = 'th3';
th3='333';

var th4= document.createElement('th');
th4.className = 'th4';
th4='444';

var th5= document.createElement('th');
th5.className = 'th5';
th5='555';


var tr1= document.createElement('tr');
tr1.className = 'tr1';
tr1.append(th1)
tr1.append(th2)
tr1.append(th3)
tr1.append(th4)
tr1.append(th5)


listItems.append(tr1)

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
        <Button variant="contained" onClick={() => UpdateItem(item.id)}>
          Update
        </Button>
      </td>
      <td className="bord">
        <Button variant="contained" onClick={() => DeleteItem(item.id)}>
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
    </div>
  );
}

export default Table;
