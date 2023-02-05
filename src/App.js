import React from 'react';
import axios from 'axios';

const App = () => {

  const sendMessage = async () => {
    try {
      const sendMessageDetails = {
        "name" : "name",
        "email" : "email@gmail.com",
        "message" : "message"
      }
      const config = {
        "Content-type": "application/json"
      };
      const response = await axios.post('https://backend-portfolio-anand.onrender.com/api/contact/sendMessage',sendMessageDetails,{ headers: config });
      if (response.status === 201) {
        console.log(response);
      }
    } catch (e) {
      if (e.response && e.response.status !== 201) {
        console.log(e.response.data.message);
      }
    }
  }

  return (
    <div>
      <button onClick={sendMessage}>Post message</button>
    </div>
  )
}

export default App