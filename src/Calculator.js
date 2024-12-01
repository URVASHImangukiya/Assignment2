import React, { useState } from 'react';
import Button from './Button';  // Import Button component

function KeyPadComponent() {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false);  // State to toggle image visibility

  // ClickHandle function to handle button clicks
  const ClickHandle = (e) => {
    if (e.target.value === "C") {
      setText("");  // Clear the display
    } else if (e.target.value === "=") {
      setText(eval(text1));  // Evaluate the expression entered
    } else if (e.target.value === "Show Me") {
      setShowImage(!showImage);  // Toggle image visibility
    } else if (e.target.value === "Square") {
      const number = parseFloat(text1);  // Convert the text to a number
      if (!isNaN(number)) {
        setText(number * number);  // Calculate the square of the number
      } else {
        setText("Invalid input");  // Handle invalid input
      }
    } else {
      setText(text1 + e.target.value);  // Append the clicked value to the display
    }
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>
      <div>
        <Button label="1" ClickHandle={ClickHandle} />
        <Button label="2" ClickHandle={ClickHandle} />
        <Button label="3" ClickHandle={ClickHandle} />
        <Button label="+" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="4" ClickHandle={ClickHandle} />
        <Button label="5" ClickHandle={ClickHandle} />
        <Button label="6" ClickHandle={ClickHandle} />
        <Button label="-" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="7" ClickHandle={ClickHandle} />
        <Button label="8" ClickHandle={ClickHandle} />
        <Button label="9" ClickHandle={ClickHandle} />
        <Button label="*" ClickHandle={ClickHandle} />
      </div>
      <div>
        <Button label="." ClickHandle={ClickHandle} />
        <Button label="0" ClickHandle={ClickHandle} />
        <Button label="=" ClickHandle={ClickHandle} />
        <Button label="/" ClickHandle={ClickHandle} />
      </div>
      <div>
        {/* New Show Me button */}
        <Button label="Show Me" ClickHandle={ClickHandle} />
        {/* New Square button */}
        <Button label="Square" ClickHandle={ClickHandle} />
      </div>

      {/* Conditionally render the image when "Show Me" is clicked */}
      {showImage && (
        <div className="image-container">
            <img src="/my-image.jpeg" alt="my-image.jpeg" />
        </div>
      )}
    </div>
  );
}

export default KeyPadComponent;
