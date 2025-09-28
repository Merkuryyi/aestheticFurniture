import React from 'react';
import './BlockInfo.scss';
import Button from '../ButtonHeader/Button';

function BlockInfo({ title, description, buttonText, imageSrc, reverse }) {
  return (
    <section className={`block-info ${reverse ? 'block-info--reverse' : ''}`}>
      <section className="block-info__description">
        <div className="block-info__text">
          <h1 className="block-info__title">{title}</h1>
          <span className="block-info__description-text">{description}</span>
        </div>
        <Button>{buttonText}</Button>
      </section>
      <div
        className="block-info__image"
        style={{ '--bg-image': `url(${imageSrc})` }}
      />
    </section>
  );
}

export default BlockInfo;