import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

interface props {
  hobbies: string[];
}
export const Home = ({ hobbies }:props) => {
  return (
    <>
      <div>
        <p>This are my hobbies</p>
        <br></br>
        <div>
          {
          hobbies.map((hobby)=>{
            return <li>{hobby}</li>
          })
          }
          </div>
      </div>
    </>
  );
};

export default Home;
