import React from 'react';

import './SectionInfoWebSite.css';

function SectionInfoWebSite({title, imageSrc}) {

    return (
        <div className="background-info"
          style={{ '--bg-image': `url(${imageSrc})` }} >
          <span className="welcome-headline">{title}</span>
        </div>

    );
}

export default SectionInfoWebSite;