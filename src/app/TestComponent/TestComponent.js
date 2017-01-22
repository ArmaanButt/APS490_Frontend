import React from 'react';

import image from './static/mountains.jpg';

function TestComponent() {
  return (
    <div>
      <div className="woo">Hello world!</div>
      <img src={image} />
    </div>
  );
}


export default TestComponent;
