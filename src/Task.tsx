import { useState } from 'react'
type Props = {
    id: number;
    name: string;
    deleteFn: Function;
    doneFn: Function;
    status: 'Done' | 'not Done'
}

const Task = ({id,name,deleteFn,doneFn,status}: Props) => {

    const [show,setshow] = useState(false)
    const showbutton = () =>{
        setshow(true)
    } 
    const hidebutton = () =>{
        setshow(false)
    } 
    if(status === 'Done'){
        return<div
        className="flex justify-between h-8 items-center py-6 border-b">
        <span className="text-2xl line-through"> {name} </span>
        
    </div>
    }
    return <div
        className="flex justify-between h-8 items-center py-6 border-b"
        onMouseEnter={showbutton} onMouseLeave={hidebutton}>
        <span className="text-2xl"> {name} </span>
        <div className="flex space-x-1 items-center">
            <button className="bg-green-400 w-24 text-2xl" onClick={ () => doneFn(id)} >{show ? 'Done' : ''}</button>
            <button className="bg-red-400 w-24 text-2xl" onClick={ () => deleteFn(id)} >{show ? 'Delete' : ''}</button>
        </div>
    </div>
}


export default Task