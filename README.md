## Steps to Run Triump Chat Box

1. Install npm on your machine (npm install -g npm on command line to update to the latest version or use this https://docs.npmjs.com/cli/v7/configuring-npm/install to install from scratch on your machine).
2. clone this repo to your local filesystem (git clone https://github.com/andrewgstanton/triumphchat.git)
6. cd to the place in your local filesystem where you cloned triumphchat (cd ~/triumphchat)
7. install node_modules with all dependencies (npm install)
8. run the application (npm start)
9. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Technical Overview

1. This simulates a real-time chat room but is not connected to any apis or external databases. 
2. You enter your username to "join" the chat.  
3. Random messages will appear from other users once you join the chatroom.
4. You can send a message once you enter the chat room and it will be seen in the list of messages sorted by timestamp.  
5. Your messages will be color coded with "green" and those of others in the chatroom "blue" to make it easier to see your messages
6. To exit the chatroom, click "Exit Chatroom"

8. I created an initial react app bootstrapped with "Create React App" (https://github.com/facebook/create-react-app) to create a basic react app and added two modules:
  - JoinChat.js to join the chat 
  - SendMessage.js to send mesages to the chat. This module also generates a list of random messages and prepends them to the chat message history when you first join the chat.  It also generates a random message from another user whenever you send a message to simulate others joining and posting messages while you are using the service.

## Areas to optimize or improve

1. tie this to a real database to store the messages and usernaes  This is more involved.  You would also need a way to authenticate and manage users logins with tokens in
2. If you still wanted to make this a simulated system you could also write a listener and handler that generates random messages periodically and add thsm to the chat room while you are in the chat room (maybe you could trigger it run every 5 min)

## Time spent building this app 

1. 6/8/2023 -- approx 5 hours running the bootstrap and writing the two modules
2. 6/9/2023 -- approx 1 hour getting it deployed to github and validating I can run through all the steps above to run the application
