import React from 'react';

const Bookmark = props => {
  return (
    <div>
      <a href={props.link}>
        <h3>{props.title}</h3>
      </a>
    </div>
  );
};

export default Bookmark;
