//import { useState } from 'react'
import { Home } from "./components/Home";
import "./App.css";

let Hobbies: string[]=
[
  "Reading financial book",
  "Trading crypto",
  "Codding"
]
function App() {    
  return <Home hobbies={Hobbies} />;
}
export default App;
