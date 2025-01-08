//import { useState } from 'react'
import { Home } from "./components/Home";
import "./App.css";


const  adder= (n1: number, n2: number)=>
{
  return n1+n2
}
const  multiplier= (n1: number, n2: number)=>
{
  return n1*n2
}
const  divider= (n1: number, n2: number)=>
{
  return n1/n2
}
function App() {    
  return(
     <div>
       <Home name="John" age={[2,6]} fun={adder} />;
       <Home name="John" age={[2,6]} fun={multiplier} />;
       <Home name="John" age={[2,6]} fun={divider} />;
     </div>
  )
}
export default App;
