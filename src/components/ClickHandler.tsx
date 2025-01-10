import React, { Component } from 'react'

type ClickHandlerState={
    message:string
}
type ClickHandlerProp={
    name:string
}
class ClickHandler extends Component<ClickHandlerProp,ClickHandlerState> {


  constructor(props: ClickHandlerProp) {
    super(props)
  
    this.state = {
       message: 'Welcome!'
    }
    //this.clickhandler= this.clickhandler.bind(this)
  }
    // clickhandler()
    // {
    //     this.setState({
    //         message: 'Goog bye'
    //     })
    // }

     clickhandler = ()=>{
        this.setState({
            message: `Goodbye  ${this.props.name}`
        })
     }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickhandler}>click here</button>
      </div>
    )
  }
}

export default ClickHandler


// import React, { Component } from 'react'

// type  ClickHandlerState={
//     isLogged: boolean
// }
// export class ClickHandler extends Component <{},ClickHandlerState >{
//     constructor(props: {}) {
//       super(props)
    
//       this.state = {
//          isLogged: true
         
//       }
//     } 
//   render() { 
    // if (this.state.isLogged)
    // return <div> Welocme Ermias</div>
    // else
    // return <div> Welcome Guest</div>
    // let msg 
    // if(this.state.isLogged)
    //     msg = <div>Welcome Ermiaso</div>
    // else
    //     msg = <div>Welocome Guest</div>    
   
    // return msg    

    
    // return this.state.isLogged ? <div>Welcome Ermias</div>:<div>Welcome Guest</div>
    // return this.state.isLogged && <div>Welcome Guest</div>

//   }
   
// }

// export default ClickHandler