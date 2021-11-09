import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.881251711351!2d-112.03291649005212!3d33.51116856509776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0d695b9a4d93%3A0x5cb4b0cf40c144d4!2sPhoenix%2C%20AZ%2085016!5e0!3m2!1sen!2sus!4v1634108467428!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
