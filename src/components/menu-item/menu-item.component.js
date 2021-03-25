
import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.css';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
    <div className='content'>
      <h1 className='title text-light'>{title}</h1>
      <span className='subtitle bg-dark text-light'>SHOP NOW</span>
    </div>
  </div>
  </div>
);

export default withRouter(MenuItem);