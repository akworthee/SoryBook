import React, {Component} from "react";
import "./index.scss";
import {refProps} from "../../constant.js"

class DragDrop extends Component{
  constructor(props){
    super(props)
    this.state = {
  list:[
    {
      name: "Angular",
      ticketId: "PROJ-1",
      category: "todo"
    },
    {
      name: "React",
      ticketId: "PROJ-2",
      category: "todo"
    },{
      name: "Vue",
      ticketId: "PROJ-3",
      category: "blocked"
    },{
      name: "ASP",
      ticketId: "PROJ-4",
      category: "inprogress"
    },{
      name: "C#",
      ticketId: "PROJ-5",
      category: "mergepen"
    },{
      name: "Java",
      ticketId: "PROJ-6",
      category: "mergecom"
    },{
      name: "Node",
      ticketId: "PROJ-7",
      category: "done"
    }
  ]
}
  }

handleDragStart = (item) => {
  refProps.doc = item;
}

handleDragLeave = (e) =>{
  e.target.style.backgroundColor = "grey";
  e.target.style.opacity = 5;
  e.preventDefault();
}

handleDrop = (e,item) =>{
  let tasks =  this.state.list.filter((task)=>{
    if(task.name == refProps.doc){
      task.category = item;
    }
    return task;
  });
  this.setState({
    ...this.state,tasks
  })
}
render(){
  var tasks = {
    todo: [],
    blocked: [],
    inprogress: [],
    mergepen: [],
    mergecom: [],
    done:[]
  }
  this.state.list.forEach((t)=>{
    tasks[t.category].push(
      <article draggable
      key={t.name}
      onDragStart={()=>this.handleDragStart(t.name)}
      onDragOver={(e)=>e.preventDefault()}
      >
      <h5>{t.ticketId}</h5>
      {t.name}
      </article>
    )
  })
  return(
    <>
    <header>
    <h4>ToDo</h4>
    <h4>Blocked</h4>
    <h4>InProgress</h4>
    <h4>Merge Pending</h4>
    <h4>Merge Complete</h4>
    <h4>Done</h4>
    </header>
    <main className="main">
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"todo")}  onDragOver={(e)=>e.preventDefault()}>
      {tasks.todo}
      </section>
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"blocked")}  onDragOver={(e)=>e.preventDefault()}>
      {tasks.blocked}
      </section>
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"inprogress")}  onDragOver={(e)=>e.preventDefault()}>
      {tasks.inprogress}
      </section>
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"mergepen")}  onDragOver={(e)=>e.preventDefault()}>
      {tasks.mergepen}
      </section>
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"mergecom")} onDragOver={(e)=>e.preventDefault()}>
      {tasks.mergecom}
      </section>
      <section className="dnd" onDrop={(e)=>this.handleDrop(e,"done")}  onDragOver={(e)=>e.preventDefault()}>
      {tasks.done}
      </section>
          </main>
    </>
  )
}
}

export default DragDrop;