import React from 'react';

import './AboutCompany.scss';

function AboutCompany() {

    return (
        <div className="about-company">
            <div className="about-company-section">
                <span className="name-website">Aesthetic Furniture</span>
                <div className="block-text-about-company">
                    <div className="title-about-company">Быстрые ссылки:</div>
                    <div className="text-about-company">Каталог мебели</div>
                    <div className="text-about-company">О нас</div>
                    <div className="text-about-company">Доставка и оплата</div>
                    <div className="text-about-company">Контакты</div>

                </div>
                <div className="block-text-about-company">
                    <div className="title-about-company">Контакты:</div>
                    <div className="text-about-company">Телефон: +7 (999) 999-99-99</div>
                    <div className="text-about-company">Email: info@aestheticfurniture.ru</div>
                </div>
            </div>


        </div>

    );
}

export default AboutCompany;