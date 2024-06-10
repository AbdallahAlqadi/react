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

//Delete
  function DeleteItem(id) {  
      const deleteItems = items.filter((item) => item.id !== id);
      setItems(deleteItems); 
    
  }

  //Update
  function UpdateItem(id) {  
   
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
        <Button variant="contained">Update</Button>
      </td>
      <td className="bord">
        <Button variant="contained" onClick={() => DeleteItem(item.id)}>
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <div id="table">
      <table className="table1" border="5">
        <thead className="bord">
          <th className="bord">Id</th>
          <th className="bord">Name</th>
          <th className="bord">Amount</th>
          <th className="bord">spendData</th>
          <th className="bord">Category</th>
          <th className="bord">More Info</th>
          <th className="bord">Update</th>
          <th className="bord">Delete</th>
        </thead>
        <tbody className="bord">
          {listItems}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
