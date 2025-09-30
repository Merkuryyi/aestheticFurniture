import React from 'react';
import './AboutCompany.scss';

function AboutCompany() {
    return (
        <div className="about-company">
            <div className="about-company__section">
                <span className="about-company__brand">Aesthetic Furniture</span>
                <div className="about-company__contacts-block">
                    <div className="about-company__title">Контакты:</div>
                    <div className="about-company__contact">Телефон: +7 (999) 999-99-99</div>
                    <div className="about-company__contact">Email: info@aestheticfurniture.ru</div>
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;