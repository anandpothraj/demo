import React from 'react';
import { registerfunc } from './services/Api';

const App = () => {

  const sendMessage = async () => {
    try {

      const header = {
        "Content-Type": "application/json"
      }

      const data = {
        "name" : "Anand Pothraj",
        "email" : "anandpothraj@gmail.com",
        "message" : "Message",
      }

      const response = await registerfunc(data,header);

      if (response.status === 200) {
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