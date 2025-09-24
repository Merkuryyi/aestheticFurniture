import React from 'react';
import './styles/index.css';
import Header from './components/Header/Header';
import SectionInfoWebSite from './components/SectionInfoWebSite/SectionInfoWebSite';
import BlockInfo from "./components/BlockInfo/BlockInfo";
import lampsImage from './images/lamps.jpg';
import sofaLampImage from './images/sofaLamp.jpg';
function App() {
    return (
        <div className="app-content">

            <Header />
            <SectionInfoWebSite />
            <BlockInfo
                title="Современная эстетика для вашего дома"
                description="Красота, комфорт и стиль в каждой детали. Вдохновляйтесь свежими интерьерными решениями каждый день."
                buttonText="View collection"
                imageSrc={lampsImage}
                reverse={false}
            />
            <BlockInfo
                title="Идеальная мебель для уютной жизни"
                description="У нас вы найдете минималистичные и трендовые предметы интерьера, которые создадут гармонию и вдохновение в любой комнате."
                buttonText="View collection"
                imageSrc={sofaLampImage}
                reverse={true}
            />

        </div>
    );
}

export default App;