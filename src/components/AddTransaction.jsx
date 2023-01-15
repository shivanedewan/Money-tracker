import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext)

    function add(e){
      e.preventDefault();
      const obj={
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(obj)
    }
  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={add}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." onChange={(e)=>setText(e.target.value)}  value={text} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" placeholder="Enter amount..." onChange={(e)=>setAmount(e.target.value)}  value={amount}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
