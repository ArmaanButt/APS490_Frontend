import React from 'react';

const imageUrl = process.env.BROWSER ? require('./static/mountains.jpg') : './static/mountains.jpg';

function TestComponent() {
  return (
    <div>
      <div className="woo">Hello world!</div>
      <img src={imageUrl} alt="mountains" />
    </div>
  );
}


export default TestComponent;
