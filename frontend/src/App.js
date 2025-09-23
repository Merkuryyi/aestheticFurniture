import React from 'react';
import './styles/index.css';

function App() {
    return (
        <div className="app-content">
            <div className="black-stripe"></div>
            <nav className="navigation-block">
                <h1 className="name-website">Aesthetic Furniture</h1>
                <button className="button-navigation" aria-label="Create project">
                    <span className="button-text">Create project</span>
                </button>
            </nav>
            <section className="background-info"></section>
            <section className="block-info">
                <section className="background-description">

                </section>
                <div className="image-object"></div>
            </section>
        </div>
    );
}

export default App;