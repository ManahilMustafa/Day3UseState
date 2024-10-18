import React, { useState } from 'react'

const NameInput = () => {
    const [name, setName] = useState("");
  return (
    <div>
      <input type="text"
      placeholder='Enter your name'
      value={name}
      onChange={(e) => setName(e.target.value)}
       />
       <p>Hello, {name ? name : "stranger"}! </p>
    </div>
  );
};

export default NameInput
