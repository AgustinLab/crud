import React, {useState} from 'react'
import { isEmpty } from 'lodash'
import { shortid } from 'shortid'
import './App.css';


function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = (e) =>
  {
    e.preventDefault();    
    if (isEmpty(task))
    {
      //clg ==> console.log("Task empty")      
      console.log("Task empty")
      return    
    }

    const newtask ={
      id: shortid.generate(),
      name: task
    }    

    setTask([ ...task, newtask])
    setTask("")
  }

  return (
     <div className="container mt-5" >
       <h2>Tareas</h2>
       <hr></hr>
       <div className="row">
         <div className="col-8">
           <h4 className="text-center">Lista de tareas</h4>
           <ul className="list-group">
             {
               task.map((task) => {               
              <li className="list-group-item" key={task.id}>
                 <span className="lead">{task.name}</span> 
                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>              
                <button className="btn btn-warning btn-sm float-right">Modificar</button>              
              </li>
             })
             }
           </ul>
         </div>
         <div className="col-4">
           <h4 className="text-center">Formulario</h4>
           <form onSubmit={addTask}>
             <input type="text" className="form-control mb-2" placeholder="Ingrese la tarea..."
             onChange={(text)=> setTask(text.target.value)}
             value={task}
             />
             <button type="submit" className="btn btn-dark bnt-block">Agregar</button>

           </form>

         </div>
        </div> 
            
     </div>    
  );}

export default App;