import React, { useState } from 'react';
import './TrafficLight.css'; // Keep this path relative to the component

const TrafficLight = () => {
  // State to track the currently active light color ('red', 'yellow', 'green', or null)
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (color) => {
    // Set the clicked light as active. If the same light is clicked again, turn it off (set to null)
    setActiveLight(prevActiveLight => prevActiveLight === color ? null : color);
  };

  // Define the colors for the lights
  const colors = ['red', 'yellow', 'green'];

  return (
    <div className="traffic-light-container">
      {/* The pole/stick */}
      <div className="traffic-light-stick"></div>
      {/* The main housing for the lights */}
      <div className="traffic-light-face">
        {/* Map over the colors array to render each light */}
        {colors.map((color) => (
          <div
            key={color}
            // Apply CSS classes:

            className={`light ${color} ${activeLight === color ? 'active' : ''}`}
            // Set the onClick handler to change the active light
            onClick={() => handleLightClick(color)}
          >
            {/* CRT Scanline Effect Overlay */}
            <div className="scanline-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the TrafficLight component as the default export
export default TrafficLight;