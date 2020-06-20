import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header'

const App = () => {
    const [ projects, setProjects ] = useState([]);

    useEffect( ()=> {
        api.get('projects').then(response => {
            /* const titles = response.data.map( project => project.title); */
            
            setProjects([...projects, ...response.data]);
        });
    }, []);

    function handleAddProject() {
        setProjetos([ ...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projetos" />
            
            <ul>
                { projects.map( project => (  <li key={project.id}>{project.title}</li>  ))}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;