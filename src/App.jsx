 import { useState } from 'react';
import './App.css'

function App() {
  let [count, setcount]=useState(15);
const addValue=()=>{
  if(count < 20){
     let counter =count + 1;
setcount(counter);
  }else{
    alert("You Reached the limit ")
  }

 
}

const removeValue=()=>{
  if(count > 0){
  let counter =count - 1;

setcount(counter);
  }else{
    alert("You Reached the limit")
  }
}
  return (
    <>
     <h1> chai aur react</h1>
      <h2>counter value : {count }</h2>
    <button onClick={addValue}>add value </button>
    <br />
    <button onClick={removeValue}>remove   value </button>
    </>
  )
}

export default App
