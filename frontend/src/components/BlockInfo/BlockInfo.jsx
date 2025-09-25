import React from 'react';
import './BlockInfo.css';
import Button from '../ButtonHeader/Button';

function BlockInfo({ title, description, buttonText, imageSrc, reverse }) {
  return (
    <section className={`block-info ${reverse ? 'reverse' : ''}`}>
      <section className="background-description">
        <div className="blockText">
          <h1 className="title-infoBlock">{title}</h1>
          <span className="text-infoBlock">{description}</span>
        </div>
        <Button>{buttonText}</Button>
      </section>
      <div
        className="image-object"
        style={{ '--bg-image': `url(${imageSrc})` }}
      />
    </section>
  );
}
export default BlockInfo;