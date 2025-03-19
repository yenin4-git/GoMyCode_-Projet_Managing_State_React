import React from 'react';
import TaskList from './TaskList'; // Importation de TaskList
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Task List</h1>
            <TaskList /> {/* Utilisation TaskList  */}
        </div>
    );
}

export default App;


