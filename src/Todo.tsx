import Task from "./Task"
import { useState } from 'react'

type TaskData = {
    id: number;
    name: string;
  }

const Todo = () => {
    const [input, setinput] = useState<string>('')
    const [tasks , settasks] = useState<TaskData[]>([])
    const [donetasks , setdonetasks] = useState<TaskData[]>([])
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if(ev.key === "Enter") addtask()

    }
    const deleteFunc = (id: number) =>{
        const newTasks = tasks.filter(x => x.id !== id)
        settasks(newTasks)
        }
    const doneFunc = (Id: number) =>{
        let newid : number = 0
        let taskName : string = ''
        const newtodotask = tasks.filter(x => {
            if (x.id === Id){
                newid = x.id
                taskName = x.name
            }
            return x.id !== Id
        })
        const newdonetask = [{id: newid, name: taskName},...donetasks]
        settasks(newtodotask)
        setdonetasks(newdonetask)
        }
    const addtask = () => { 
        if(input !== "")
        { 
        // settasks(<div><Task name={input} ></Task>{tasks.props.children}</div>)
        const Id = (new Date()).getTime()
        const setnewtasks = [{id: Id, name: input},...tasks]
        document.querySelectorAll('input')[0].value = '' 
        settasks(setnewtasks)
        setinput('')
    } else {
        alert("Task cannot be empty")
        setinput('')
    }
       
        
    }
    return <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
            <input onChange={event => setinput(event.target.value)} className='border border-gray-400 w-full text-2xl'
                onKeyDown={onKeyDownCallback} ></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={addtask} >+</button>
            
        </div>
        {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteFunc} doneFn={doneFunc} status ={'not Done'}/>)}
        {donetasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteFunc} doneFn={doneFunc} status ={'Done'}/>)}
        </div>

}


export default Todo