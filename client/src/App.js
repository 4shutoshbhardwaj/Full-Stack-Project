import React from 'react';
import './App.css';

const initState={
  amount:"",
  description:"",
  date:"",
}

function App() {

  const [form,setForm]=React.useState(initState);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(form);
    const res=await fetch(`http::/localhost:4444/transaction`,{
      method:"POST",
      body:form
    })
    console.log(res);
  }
  
  const handleChange=(e)=>{
    console.log(e.target.value,e.target.name);
    setForm({...form,[e.target.name]:e.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" value={form.amount} onChange={handleChange} placeholder="Enter Transaction Amount" />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Enter Transaction Details" />
        <input type="date" name="date" value={form.date} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
