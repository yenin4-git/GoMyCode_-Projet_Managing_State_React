import React, { useState } from 'react';
import './App.css';

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) { //fonction TaskItem pour éditer une tâche
    const [isEditing, setIsEditing] = useState(false); // initialisation de l'état de l'édition
    const [editedTaskName, setEditedTaskName] = useState(task.taskName);
    const [editedTaskDescription, setEditedTaskDescription] = useState(task.taskDescription);

    const handleEdit = () => {
        if (isEditing) {
            onEdit({ taskName: editedTaskName, taskDescription: editedTaskDescription });
        }
        setIsEditing(!isEditing);
    };

    return (
        <li style={{ marginBottom: '10px' }}>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editedTaskDescription}
                        onChange={(e) => setEditedTaskDescription(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                </div>
            ) : (
                <div className='task'>
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            marginRight: '10px',
                        }}
                        onClick={onToggleComplete}
                    >
                        {task.taskName} - {task.taskDescription}
                    </span>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </div>
            )}
        </li>
    );
}

export default TaskItem;