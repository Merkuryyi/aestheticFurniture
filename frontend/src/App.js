import React from 'react';
import './styles/index.css';
import Header from './components/Header/Header';
import SectionInfoWebSite from './components/SectionInfoWebSite/SectionInfoWebSite';
import BlockInfo from "./components/BlockInfo/BlockInfo";
import FooterPanel from "./components/FooterPanel/FooterPanel";
import AboutCompany from "./components/AboutCompany/AboutCompany";

function App() {
    return (
        <div className="app-content">
            <main className="snap-container">
                <section className="snap-section" id="section">
                    <Header />
                </section>
                <section className="snap-section" id="section1">
                    <SectionInfoWebSite
                        imageSrc={`${process.env.PUBLIC_URL}/images/background-block.png`}
                        title="Эстетичная мебель - минималистичные и трендовые предметы интерьера, которые создадут гармонию и вдохновение в любой комнате."
                    />
                </section>

                <section className="snap-section" id="block1">
                    <BlockInfo
                        title="Современная эстетика для вашего дома"
                        description="Красота, комфорт и стиль в каждой детали. Вдохновляйтесь свежими интерьерными решениями каждый день."
                        imageSrc={`${process.env.PUBLIC_URL}/images/armchair.png`}
                        reverse={false}
                    />
                </section>

                <section className="snap-section" id="block2">
                    <BlockInfo
                        title="Идеальная мебель для уютной жизни"
                        description="У нас вы найдете минималистичные и трендовые предметы интерьера, которые создают гармонию и вдохновение в любой комнате."
                        imageSrc={`${process.env.PUBLIC_URL}/images/lamp.png`}
                        reverse={true}
                    />
                </section>

                <section className="snap-section" id="section2">
                    <SectionInfoWebSite
                        imageSrc={`${process.env.PUBLIC_URL}/images/modern-room.jpeg`}
                        title="Соберите уникальный образ комнаты — наши дизайнерские подборки помогут быстро подобрать гармоничные сочетания мебели и аксессуаров."
                    />
                </section>

                <section className="snap-section" id="about">
                    <AboutCompany />
                </section>
                <section className="snap-section" id="footer">
                    <FooterPanel />
                </section>
            </main>
        </div>
    );
}

export default App;