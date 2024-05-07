import React, { useState } from "react";

const BoxComponent = () => {
  const [maximizedBox, setMaximizedBox] = useState(null);

  // Define content variables
  const box1Content = (
    <div>
      <h1 className="text-3xl text-center">Defensa de la competencia</h1>
    </div>
  );

  const box2Content = (
    <div>
      <h1>Box 2</h1>
      <p>This is some content for Box 2</p>
    </div>
  );

  const box3Content = (
    <div>
      <h1>Box 2</h1>
      <p>This is some content for Box 2</p>
    </div>
  );

  const box4Content = (
    <div>
      <h1>Box 2</h1>
      <p>This is some content for Box 2</p>
    </div>
  );

  const box5Content = (
    <div>
      <h1>Box 2</h1>
      <p>This is some content for Box 2</p>
    </div>
  );

  const box6Content = (
    <div>
      <h1>Box 2</h1>
      <p>This is some content for Box 2</p>
    </div>
  );


  const boxData = [
    { id: 1, content: box1Content, bgColor: "gray" },
    { id: 2, content: box2Content, bgColor: "blue" },
    { id: 3, content: box3Content, bgColor: "orange" },
    { id: 4, content: box4Content, bgColor: "gray" },
    { id: 5, content: box5Content, bgColor: "blue" },
    { id: 6, content: box6Content, bgColor: "orange" },
    // Add more box data with content variables
  ];

  const handleBoxClick = (boxId) => {
    setMaximizedBox(boxId);
  };

  const handleCloseBox = () => {
    setMaximizedBox(null);
  };

  return (
    <div className="flex flex-wrap mx-4 md:mx-0 h-full relative">
      {boxData.map((box) => (
        <div
          key={box.id}
          className={`w-1/2 md:w-1/3 h-48 md:h-96 bg-${box.bgColor}-box ${
            maximizedBox === box.id ? "maximized" : "normal"
          } transition-all duration-500 ease-in-out`}
          onClick={() => handleBoxClick(box.id)}
        >
          <div className="border border-gray-300 h-full w-full flex items-center justify-center cursor-pointer">
            <div>{box.content}</div>
          </div>
        </div>
      ))}
      {maximizedBox && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div
            className={`bg-white w-full h-full p-8 maximized-content relative`}
          >
            <button
              className="absolute top-4 right-4 text-3xl"
              onClick={handleCloseBox}
            >
              &#10005;
            </button>
            <div className="text-4xl font-bold mb-4">
              {boxData.find((box) => box.id === maximizedBox).content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxComponent;
