import React, { useState } from 'react';
import EventsList from './components/EventsList';
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function fetchEventsHandler() {
    setIsLoading(true);
    fetch(
      'https://cors-anywhere.herokuapp.com/https://thedistance.co.uk/wp-content/uploads/2020/01/eventbrite.json',
      {
        method: 'GET',
        mode: 'cors',
      }
      // Here I lost lot of time as I was acuring CORS error
      // I was not geting back response for my HTTP request
      // and didnt realy know how to overcome it
      // eventualy i found this
      // cors-anywhere.herokuapp.com/corsdemo
      // where i pressed that button and it worked
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data.events);
      });
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchEventsHandler}>Show Events</button>
      </section>
      <section>
        {!isLoading && events.length > 0 && <EventsList events={events} />}
        {!isLoading && events.length === 0 && <p>Could not find any events</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
