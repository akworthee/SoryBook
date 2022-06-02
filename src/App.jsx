import React, { Component} from "react"
import Graph from "./Components/Graph/index.jsx"
import DragDrop from "./Components/DragDrop/index.jsx"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      caption: "Arun"
    }
  }
  render(){
  return (
    <div style={{"width": "100%", "height": "400px"}}>
    <header>
      <h1> Story Book</h1>
    </header>
    <main>
    <DragDrop />
      <Graph/>
    </main>
    </div>
  )
  }
}


export default App;