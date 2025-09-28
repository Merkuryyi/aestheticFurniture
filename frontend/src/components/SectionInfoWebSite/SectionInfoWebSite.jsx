import React from 'react';
import './SectionInfoWebSite.scss';

function SectionInfoWebSite({title, imageSrc}) {
    return (
        <div className="section-info"
          style={{ '--bg-image': `url(${imageSrc})` }} >
          <span className="section-info__headline">{title}</span>
        </div>
    );
}

export default SectionInfoWebSite;