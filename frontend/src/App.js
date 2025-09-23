import React from 'react';
import './styles/index.css';
import Header from './components/Header/Header';
import SectionInfoWebSite from './components/SectionInfoWebSite/SectionInfoWebSite';
import BlockInfo from "./BlockInfo/BlockInfo";

function App() {
    return (
        <div className="app-content">

            <Header />
            <SectionInfoWebSite />
            <BlockInfo />

        </div>
    );
}

export default App;