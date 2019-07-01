import React from 'react';

const Intro = props => {
  return (
    <div className="intro">
      <img className="intro__logo" src="./logo.svg" alt="bookmark logo" />
      <h2 className="intro__title">Your bookmarks</h2>
      <p>Add your favourite bookmarks here.</p>
      <p>Add, edit and delete.</p>
      <p>
        Stored bookmarks:
        <span className="intro__hl"> {props.count ? props.count : '0'}</span>
      </p>
    </div>
  );
};

export default Intro;
