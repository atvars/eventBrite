import React from 'react';

import './Events.css';

function Events(props) {
  return (
    <li className={'events'}>
      <h2>{props.name}</h2>
      <h3>{props.startDate}</h3>
      <p>{props.view}</p>
      <iframe
        width='400px'
        height='400px'
        title='eventBrite'
        src={props.url}
      ></iframe>
      <button className='eventButton'>
        <a href={props.url} target='_blank'>
          Open Events
        </a>
      </button>
    </li>
  );
}
// As I was googling for web view but it came up for react native so I decided to put iframe insted

export default Events;
