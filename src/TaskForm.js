import React, { useState } from 'react';

function TaskForm({ onSubmit }) { // soumission du formulaire
  const [taskName, setTaskName] = useState('');// initialisation des valeurs
  const [taskDescription, setTaskDescription] = useState(''); 

  const handleSubmit = (e) => { 
    e.preventDefault();// empêche le rechargement de la page
    if (taskName && taskDescription) { // vérifie si les champs sont remplis
      onSubmit({ taskName, taskDescription }); // envoie les valeurs au composant parent
      setTaskName(''); // réinitialise les valeurs
      setTaskDescription(''); 
    } else { // affiche une alerte si les champs ne sont pas remplis
      alert('Please fill in both fields');
    }
  };

  return ( 
    <form onSubmit={handleSubmit}> 
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // met à jour la valeur nom
      />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)} // met à jour la valeur description
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm; // exporte le composant TaskForm