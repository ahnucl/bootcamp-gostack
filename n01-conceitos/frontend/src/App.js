import React, { useState } from 'react';

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
            
            <ul>
                { projects.map( projeto => (  <li key={projects}>{projeto}</li>  ))}
            </ul>
            
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
        );
}

export default App;