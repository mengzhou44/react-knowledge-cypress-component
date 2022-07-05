import React, { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        id="text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button type="submit" id="btnSubmit">
        Submit
      </button>
      {submitted && <h2 id="submitted">Form Submitted</h2>}
    </form>
  );
};

export default App;
