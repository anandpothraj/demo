import React from 'react';

const App = () => {

  const name = "Anand Pothraj";
  const email = "anandpothraj@gmail.com";
  const message = "Message";

  const sendMessage = async () => {
    try {
      const res = await fetch("https://backend-portfolio-anand.onrender.com/api/contact/sendMessage", {
        method: "POST",
        mode : "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, message
        })
      });
      const data = await res.json();
      if (data.status === 201) {
        console.log(data);
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