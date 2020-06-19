import React from 'react';

import Header from './components/Header'

const App = () => {
    return (
        <>
            <Header title="teste1">
                <ul>
                    <li>algo</li>
                    <li>algo2</li>
                </ul>
            </Header>
            <Header title="outro"/>
            <Header title="mais um"/>
            <Header />
            <Header title="ultimo"/>
        </>
        );
}

export default App;