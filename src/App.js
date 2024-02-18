import React,{useState} from 'react'
import "./App.css"
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";


function App() {
  const[isCompleteScreen,setIsCompleteScreen] = useState(false); 
  return (
      <div className='App'>
        <h1>Welcome to Todo List Application</h1>

        <div className='center_container'>
          <div className='todo-input'>
            <div className='todo-input-items'>
              <label>Title</label>
              <input type='text' placeholder='Enter your todo lists'/>
            </div>
            <div className='todo-input-items'>
              <label>Discription</label>
              <input type='text' placeholder='Enter is the discription'/>
            </div>
            <div className='todo-input-items'>
            <button type='button' className='add-btn'>Add</button>
            </div>
          </div><hr/>

          <div className='btn-area'>
            <button className={`secondbtn ${isCompleteScreen === false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>TODO</button>
            <button className={`secondbtn ${isCompleteScreen === true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>COMPLETED</button>
          </div>
          <div className='todo-list'>
            <div className='todo-list-items'>
              <div>
                <h3>Task 1</h3>
                <p>Description</p>
              </div>
              <div>
                 <AiFillDelete className='icon'/>
                 <FaCheck className='check-icon'/>
              </div>
            </div>
          </div>
        </div>
      </div>    
  )
}

export default App 