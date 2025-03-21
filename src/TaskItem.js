import React, { useState } from 'react';
import './App.css';

function TaskItem({ task, onDelete, onToggleComplete, onEdit }) { //fonction TaskItem pour éditer une tâche
    const [isEditing, setIsEditing] = useState(false); // initialisation de l'état de l'édition
    const [editedTaskName, setEditedTaskName] = useState(task.taskName); // initialisation des valeurs
    const [editedTaskDescription, setEditedTaskDescription] = useState(task.taskDescription); 

    const handleEdit = () => { //fonction pour éditer une tâche
        if (isEditing) { // vérifie si l'édition est activée
            onEdit({ taskName: editedTaskName, taskDescription: editedTaskDescription }); // envoie les valeurs au composant parent
        }
        setIsEditing(!isEditing); // active ou désactive l'édition
    };

    return (
        // affiche les tâches
        <li style={{ marginBottom: '10px' }}> 
            {isEditing ? ( // vérifie si l'édition est activée
                // affiche les champs de saisie si l'édition est activée
                <div> 
                    <input
                        type="text"
                        value={editedTaskName} // affiche la valeur de la tâche
                        onChange={(e) => setEditedTaskName(e.target.value)} // met à jour la valeur de la tâche
                    />
                    <input
                        type="text"
                        value={editedTaskDescription} // affiche la valeur de la description
                        onChange={(e) => setEditedTaskDescription(e.target.value)} // met à jour la valeur de la description
                    />
                    <button onClick={handleEdit} // envoie les valeurs au composant parent
                        className='save-button'
                    >Save</button>
                </div>
            ) : (
                <div className='task'>
                    <span
                        style={{ // style de la tâche
                            textDecoration: task.completed ? 'line-through' : 'none',
                            marginRight: '10px',
                        }}
                        onClick={onToggleComplete} // active ou désactive la tâche
                    >
                        {task.taskName} - {task.taskDescription}
                    </span>
                    <button onClick={handleEdit} // envoie les valeurs au composant parent
                        className='edit-button'
                    >Edit</button>
                    <button onClick={onDelete}
                        className='delete-button'
                    >Delete</button>
                </div>
            )}
        </li>
    );
}

export default TaskItem; // exporte le composant TaskItem