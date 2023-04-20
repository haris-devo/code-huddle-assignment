import React from 'react';

const MapComp = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13276.188714097563!2d73.0497919!3d33.7077281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb0f4f77379%3A0xf8c50b8651f56d02!2sThe%20Centaurus%20Mall!5e0!3m2!1sen!2s!4v1681987898842!5m2!1sen!2s";

  return (
    <React.Fragment>
      <div className="map_area">
        <div className="map px-4">
          <iframe
            title="map"
            src={`${mapSrc}`}
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MapComp;
