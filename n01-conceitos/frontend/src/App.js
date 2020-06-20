import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/foto.jpeg';

import Header from './components/Header'

const App = () => {
    const [ projects, setProjects ] = useState(['Desenvolvimento de App', 'Front-end web']);
    console.log(projects);
    function handleAddProject() {
        setProjetos([ ...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projetos" />
            
            <img src={backgroundImage} />
            <ul>
                { projects.map( project => (  <li key={project}>{project}</li>  ))}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;