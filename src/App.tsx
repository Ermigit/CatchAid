//import { useState } from 'react'
import { Home } from "./components/Home";
import Counter from "./components/Counter";
import ClickHandler from "./components/ClickHandler";
import ListRendering from "./components/ListRendering";
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

const myHobbies:string[] = ['Waching movies', 'reading financial books', 'Codding']

function App() {    
  return(
     <div>
       {/* <Home name="John" age={[2,6]} fun={adder} />;
       <Home name="John" age={[2,6]} fun={multiplier} />;
       <Home name="John" age={[2,6]} fun={divider} />; */}
       {/* <Counter/> */}
       {/* <ClickHandler name="Ermias"/> */}
       <ListRendering  hobbies={myHobbies}/>
     </div>
  )
}
export default App;
