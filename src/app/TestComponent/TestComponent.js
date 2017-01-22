import React from 'react';

import image from './static/mountains.jpg';

function TestComponent() {
  return (
    <div>
      <div className="woo">Hello world!</div>
      <img src={image} alt="mountains" />
    </div>
  );
}


export default TestComponent;
