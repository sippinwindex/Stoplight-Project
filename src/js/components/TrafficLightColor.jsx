import React from 'react';
import './TrafficLight.css'; //

const TrafficLightColor = ({ chosenColor }) => {

  return (

    <>
      <div 
        onClick={( => setColor (chosenColor)}
        className={`${color} light ` ${color === 'red' ? `selected` : ``}`}>
      </div>
    </>
  );
}

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null); // 

  const handleLightClick = (color) => {
    setActiveLight(color); //
  };

  return (
    <div className="traffic-light-container">
      <div className="traffic-light-stick"></div>
      <div className="traffic-light-face">
        {['red', 'yellow', 'green'].map((color) => (
          <div
            key={color}
            className={`light ${color} ${activeLight === color ? 'active' : ''}`}
            onClick={() => handleLightClick(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLightColor
