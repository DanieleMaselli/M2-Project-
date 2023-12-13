/*

import { useState } from "react";
import taskListStyles from './styles/TaskList.module.css'

function TaskList({taskList}) {
    const [tasks, setTasks] = useState(taskList);


    const handleDelete = (idToDelete) => {
    
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        setTasks(updatedTasks);
    };


    return (
        <div className={taskListStyles.taskList}>
        {tasks.map((task) => {
            return (
                <div id='{task.id}' className='task'>
                    <p>{task.task}: {task.completed ? "COMPLETED" : "NOT COMPLETED"}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            )
        }) 
        }
        </div>
    )
}

export default TaskList;
*/

import { useState } from "react";
import taskListStyles from './styles/TaskList.module.css'

function Task({task}) {
    const [isDeleted, setIsDeleted] = useState(false);
    if (isDeleted) {
        return null;
    }

    const handleDelete = () => {
        setIsDeleted(true);
    };

    return (
        <div id='{task.id}' className='task'>
            <p>{task.task}: {task.completed ? "COMPLETED" : "NOT COMPLETED"}</p>
            <button onClick= {handleDelete} >Delete</button>
        </div>
    )

}

export default Task

