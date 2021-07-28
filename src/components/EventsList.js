import React from 'react';

import Events from './Events';
import './EventsList.css';

function EventsList(props) {
  return (
    <ul className={['events-list']}>
      {props.events.map((events) => (
        <Events
          // as events have same id:12345
          // I tried here diferent methods even to
          // get random nr for ID as map function
          // requires diferent key
          // so I even tried like:
          // Date.now() + Math.random()
          // wich have 1 milisecound diference
          // but still was failing for me
          // so I used URL which probably
          // is not the best way I think
          key={events.url}
          name={events.name.text}
          startDate={events.start.local}
          view={events.description.text}
          url={events.url}
        />
      ))}
    </ul>
  );
}

export default EventsList;
