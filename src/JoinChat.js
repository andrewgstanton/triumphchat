import React, { useState } from 'react';
import SendMessage from './SendMessage';


function JoinChat() {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const [joinFormSubmitted, setJoinFormSubmitted] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setJoinFormSubmitted(true);
    window.$userName = inputValue;
  };

  return (
    <div>

        {!joinFormSubmitted && (
            <form onSubmit={handleSubmit}>
                <label>
                  Enter username:
                  <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Join Chat</button>
            </form>
        )}

        {submittedValue && (
            <div>
              <p><b>Welcome</b>&nbsp;&nbsp;{window.$userName}</p>
            </div>
        )}

        {joinFormSubmitted && (
            <SendMessage />
        )}

    </div>
  );
}

export default JoinChat;

