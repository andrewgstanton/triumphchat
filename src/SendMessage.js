import React, { useState } from 'react';
import { format } from 'date-fns';

function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime() {
    return format(new Date(), 'yyyy-MM-dd hh:mm:ss a')
}

function generateUserInput(colorTag, userName, userMessage) {
    return  "<p style='color:" + colorTag + "'>" + "<b>" + userName + "</b>&nbsp;" + "<span style='font-size:10px;'>" + formatTime() + "</span>" + "<br>" + userMessage + "</p>";
}

function generateRandomUserInput() {
    return generateUserInput("blue", "USER" + randomNumberInRange(1,100), "Lorem epsum lorem");
}

function setInitialChatState() {
    var initialChats = '';

    for (var i = 0; i < 5;i++) {

        initialChats += generateRandomUserInput();
    }
    return initialChats;
}


function SendMessage() {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [initialChats, setInitialChats] = useState(setInitialChatState());

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        // simulating random user adding to chat while sending new message to chatroom
        // this can also be triggered in a separate event handler that generates random user input every x seconds

        const newValue = generateUserInput("green", window.$userName, inputValue);
        setSubmittedValue((prevValue) => prevValue + generateRandomUserInput() + newValue);
        setInputValue('');
    };

  return (
    <div>

      <div dangerouslySetInnerHTML={{ __html: initialChats }}>
      </div>

      {submittedValue && (
        <div dangerouslySetInnerHTML={{ __html: submittedValue }}>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          Send Message:&nbsp;
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <button type="submit">Send</button>
      </form>

      <div><p><a href='http://localhost:3000' target='_blank'>Exit Chat</a></p></div>

    </div>
  );
}

export default SendMessage;

