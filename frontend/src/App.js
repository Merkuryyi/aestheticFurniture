import React from 'react';
import './styles/index.css';
import Header from './components/Header/Header';
import SectionInfoWebSite from './components/SectionInfoWebSite/SectionInfoWebSite';
import BlockInfo from "./components/BlockInfo/BlockInfo";
import FooterPanel from "./components/FooterPanel/FooterPanel";
import armchairImage from './images/armchair.png';
import lampImage from './images/lamp.png';
import backgroundImage from './images/background-block.png';
import modernBackgroundImage from './images/modern-room.jpeg';
import AboutCompany from "./components/AboutCompany/AboutCompany";
function App() {
    return (
        <div className="app-content">

            <Header />
            <SectionInfoWebSite
                imageSrc={backgroundImage}
                title="Эстетичная мебель - инималистичные и трендовые предметы интерьера, которые создадут гармонию и вдохновение в любой комнате."
            />
            <BlockInfo
                title="Современная эстетика для вашего дома"
                description="Красота, комфорт и стиль в каждой детали. Вдохновляйтесь свежими интерьерными решениями каждый день."
                buttonText="View collection"
                imageSrc={armchairImage}
                reverse={false}
            />
            <BlockInfo
                title="Идеальная мебель для уютной жизни"
                description="У нас вы найдете минималистичные и трендовые предметы интерьера, которые создадут гармонию и вдохновение в любой комнате."
                buttonText="View collection"
                imageSrc={lampImage}
                reverse={true}
            />
            <SectionInfoWebSite
                imageSrc={modernBackgroundImage}
                title="Соберите уникальный образ комнаты — наши дизайнерские подборки помогут быстро подобрать гармоничные сочетания мебели и аксессуаров."
            />
            <AboutCompany />
            <FooterPanel />


        </div>
    );
}

export default App;