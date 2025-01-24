import React from "react";

type ListRenderingProps = {
  hobbies: string[];
};

function ListRendering(props: ListRenderingProps) {

  return (
    <div>
      <ol>
     
    {  
        props.hobbies.map((hobby, index)=>
            <li key={index} >
              {hobby} 
          </li>
        )

     
        
    }
   
  
   </ol>
      
    </div>
  );
}

export default ListRendering;