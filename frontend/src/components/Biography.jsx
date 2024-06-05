import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            DocVita is revolutionizing the way people access healthcare by
            providing a seamless platform for booking doctor appointments.
            Founded with a vision to make healthcare more accessible and
            convenient, DocVita connects patients with trusted doctors, allowing
            them to schedule appointments effortlessly. .
          </p>
          <p>We are all in 2024!</p>
          <p>
            Our user-friendly interface and efficient booking system streamline
            the appointment process, saving time and reducing stress for
            everyone involved. Join us in our mission to make quality healthcare
            accessible to all. Experience the future of healthcare with DocVita
            today With DocVita, patients can browse through a diverse range of
            healthcare providers, select a suitable doctor based on specialty
            and location, and book appointments at their convenience..
          </p>
          <p>
            Our platform prioritizes user privacy and security, ensuring that
            personal information is always protected. At DocVita, we are
            committed to enhancing the healthcare experience for both patients
            and doctors.
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
