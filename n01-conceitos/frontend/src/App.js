import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

const App = () => {
    const [ projects, setProjects ] = useState(['Desenvolvimento de App', 'Front-end web']);

    useEffect( ()=> {
        api.get('projects').then(response => {
            console.log(response);
        });
    }, []);

    function handleAddProject() {
        setProjetos([ ...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projetos" />
            
            <ul>
                { projects.map( project => (  <li key={project}>{project}</li>  ))}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;