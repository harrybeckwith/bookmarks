import React from 'react';

const Intro = props => {
  return (
    <div className="intro">
      <img className="intro__logo" src="./logo.svg" alt="bookmark logo" />
      <h2 className="intro__title">You bookmarks</h2>
      <p>Add your favourite bookmarks here.</p>
      <p>Add, edit and delete.</p>
      <p> Stored bookmarks: {props.count ? props.count : '0'}</p>
    </div>
  );
};

export default Intro;
