
import { useState } from 'react';


const fakeProducts = [
    {id: 1, name: 'Laptop', price: 1000},
    {id: 2, name: 'Phone', price: 500},
    {id: 3, name: 'Tablet', price: 300},
];

export default function FakeJson(){
    const [items, setItems] = useState(fakeProducts);
    return(
 
        <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
    );
}