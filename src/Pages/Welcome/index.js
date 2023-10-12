import React, { useEffect } from 'react';
import './styles.css';

function Welcome() {
  //fun section

  useEffect(() => {
    function calculateRotation(element, offset, event) {
      var x = element.offsetLeft + element.offsetWidth / 2;
      var y = element.offsetTop + element.offsetHeight / 2;
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = rad * (180 / Math.PI) * -1 + (230 + offset);

      element.style.transform = `rotate(${rot}deg)`;
    }

    function handleMouseMove(event) {
      var eye = document.querySelector(".trex-eye");
      var armBack = document.querySelector(".trex-arm-back");
      var armFront = document.querySelector(".trex-arm-front");

      calculateRotation(eye, 0, event);
      calculateRotation(armBack, 0, event);
      calculateRotation(armFront, 15, event);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="tracking-section">
      Click to Dashboard
      <div className="trex">  
        <div className="trex-arm-back">
          <img width="60" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1600105/trex-arm.png" alt="T-Rex Arm" />
        </div>
        <div className="trex-body">
          <div className="trex-eye"></div>
          <img width="300" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1600105/trex-body.png" alt="T-Rex Body" />
        </div>
        <div className="trex-arm-front">
          <img width="60" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1600105/trex-arm3.png" alt="T-Rex Front Arm" />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
