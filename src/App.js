import React, {useState} from 'react';
import './App.css';
import Receipt from './components/Receipt/Receipt';

const initialState = [
  {
    id: 1,
    person: 'Billie',
    order: {
      main: 'Burrito',
      protein: 'Skirt Steak',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Thai Iced Tea',
      cost: 22,
    },
    paid: true,
  },
  {
    id: 2,
    person: 'Kareem',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Chicken',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Andrew',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
];

function App() {

 const [receipts, setReceipts] = useState(initialState)
 const [newReceipt, setNewReceipt] = useState({
    id: 5,
    person: '',
    order: {
      main: '',
      protein: '',
      rice: '',
      sauce: "",
      // toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: '',
      cost: 0,
    },
    paid: false
 })

 const addReceipt = (e) => {
  e.preventDefault();
  // alert("ADD SKILL CLICKED");
  setReceipts([...receipts,newReceipt])
  setNewReceipt({
    id: 10,
    person: '',
    order: {
      main: '',
      protein: '',
      rice: '',
      sauce: "",
      // toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: '',
      cost: 0,
    },
    paid: false
 })
};

 const handleChange = (e) => {
  const { dataset, name, value } = e.target;
  console.log('dataset',dataset.id)
  console.log('name', name)
  console.log('value', value)

  if (Object.keys(newReceipt.order).includes(name)){
    setNewReceipt({
      ...newReceipt,
      order: {
        ...newReceipt.order,
        [name]: value
      }
    })
    // only set the person
  } else {
    setNewReceipt({
      ...newReceipt,
      [e.target.name]: e.target.value,
    })
  }
}


  return (
    <div>
    <div class="form-container">
      <div class="input-container">
        <label for="person">Person</label>
        <input name="person" type="text" data-id="" value={newReceipt.person} placeholder="Person"  onChange={handleChange}/>
      </div>
      <div class="order-container">
        <label for="person">Order</label>
          <div> 
            <div class="input-container">
              <label htmlFor="main">Main </label>
              <input name="main" data-id="order" data-nested="order" type="text" placeholder="Main" value={newReceipt.order.name}  onChange={handleChange}/>
            </div>
            <div class="input-container">
              <label htmlFor="protein">Protein </label>
              <input name="protein" data-id="order" data-nested="order" type="text" placeholder="Protein" onChange={handleChange}/>
            </div>
            <div class="input-container">
              <label htmlFor="rice">Rice </label>
              <input name="rice" data-id="order" data-nested="order" type="text" placeholder="Rice" onChange={handleChange}/>
            </div>
            <div class="input-container">
              <label htmlFor="sauce">Sauce </label>
              <input name="sauce" data-id="order" data-nested="order" type="text" placeholder="Sauce" onChange={handleChange}/>
            </div>
            <div class="input-container">
              <label htmlFor="drink">Drink </label>
              <input name="drink" data-id="order" data-nested="order" type="text" placeholder="Drink" onChange={handleChange}/>
            </div>
            <div class="input-container">
              <label htmlFor="cost">Cost </label>
              <input name="cost"  data-id="order" data-nested="order" type="text" placeholder="Cost" onChange={handleChange}/>
            </div>
          </div>
      </div>
      <button type="submit" onClick={addReceipt}>Add Receipt</button>
      </div>
      <div class="receipts-container">
       {receipts.map(item => {
        
          if(item.paid){
           return <Receipt key={item.id} receipt={item}></Receipt>
            }
            return null
          }
            
          )}
      </div>
    </div>
  );
}

export default App;
