import React from "react";

type ListRenderingProps = {
  hobbies: string[];
};
function ListRendering(props: ListRenderingProps) {
  return (
    <div>
      <ol>
    {
        props.hobbies.map((h, index)=>
            <li key={index}>
                {h}
            </li>
        )
    }
   </ol>
      
    </div>
  );
}

export default ListRendering;