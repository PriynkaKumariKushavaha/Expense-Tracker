import React, {useState, useContext} from 'react'
import { GlobalContext, GlobalProvider } from '../context/GlobalState';

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const handleSubmit =(e) =>{
    e.preventDefault();

    if (!text || !amount) {
      alert('Please fill in all fields.');
    } else {
      const newTransaction = {
        id : Math.floor(Math.random()*1000000),
        text,
        amount : +amount
      }
      addTransaction(newTransaction)
      alert('Feild added successfuly')
    }
  }

  
  
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input className='input-field' type="text" placeholder="Enter text..."  value={text} onChange={ (e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input className='input-field' type="number" placeholder="Enter amount..." value={amount} onChange={ (e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
