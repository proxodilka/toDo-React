import React from 'react';
import './task-item.css';


class TaskItem extends React.Component{

    render(){
        const {task, onDelete, onMarkDone, onMarkImportant} = this.props;
        const {important, done} = task;

        const styleClass = `taskText nonActiveTaskUnit ${important?"important":""} ${done?"done":""}`;

        console.log('reRender');

        return (
            <div className='taskUnit'>
                <input onChange={()=>onMarkDone(task.id)}type="checkbox" id={task.id} checked={done}></input>
                <label className={styleClass} htmlFor={task.id}>
                    <div className="inputField" ref={"editable "+task.id}>
                        {task.text}
                    </div>
                </label>
                {/* <button onClick = {()=>this.refs["editable "+task.id].} className="btn btn-outline-warning actSelector">
                    <i className="fa fa-pencil"></i>
                </button> */}
                <button onClick = {()=>onMarkImportant(task.id)} className="btn btn-outline-primary actSelector">
                    <i className="fa fa-exclamation"></i>
                </button>
                <button onClick={()=>onDelete(task.id)} className="btn btn-outline-danger actSelector">
                    <i className="fa fa-trash-o"></i>
                </button>
            </div>);
    }
}

export default TaskItem;