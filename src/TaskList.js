import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList() {
    const [taskList, setTaskList] = useState([]);

    // Charger les tâches depuis localStorage au démarrage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTaskList(storedTasks);
    }, []);

    // Sauvegarder les tâches dans localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }, [taskList]);

    const addTask = (task) => { // fonction pour ajouter une tâche
        const newTask = { ...task, id: Date.now(), completed: false };
        setTaskList([...taskList, newTask]);
    };

    const deleteTask = (taskId) => { // fonction pour supprimer une tâche
        if (window.confirm('Est vous sûre de vouloir supprimer?')) {
            const newTaskList = taskList.filter(task => task.id !== taskId);
            setTaskList(newTaskList);
        }
    };

    const toggleComplete = (taskId) => { // fonction pour marquer une tâche comme complétée
        const newTaskList = taskList.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTaskList(newTaskList);
    };

    const editTask = (taskId, updatedTask) => { // fonction pour modifier une tâche
        const newTaskList = taskList.map(task =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTaskList(newTaskList);
    };

    return (
        <div>
            <TaskForm onSubmit={addTask} />
            <ul>
                {taskList.map((task) => ( // affiche la liste des tâches
                    <TaskItem
                        key={task.id} 
                        task={task}
                        onDelete={() => deleteTask(task.id)} // permet de supprimer une tâche
                        onToggleComplete={() => toggleComplete(task.id)} // permet de marquer une tâche comme complétée
                        onEdit={(updatedTask) => editTask(task.id, updatedTask)} // permet de modifier une tâche
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskList; // exporte le composant TaskList