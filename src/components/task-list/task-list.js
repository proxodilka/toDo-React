import React from 'react';
import TaskItem from '../task-item/task-item.js';
import './task-list.css';

const TaskList = ({tasks, onDelete, onMarkImportant, onMarkDone})=>{
    return(
        <div className="tasksList">
            {tasks.map((task)=><TaskItem key={task.id}
                task={task}
                onDelete = {onDelete}
                onMarkImportant = {onMarkImportant}
                onMarkDone = {onMarkDone} />)}
        </div>
    );
}

export default TaskList;