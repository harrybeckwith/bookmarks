import React from 'react';

const Bookmark = props => {
  return (
    <div className="bookmarks__item card">
      <p className="bookmarks__title">Name: {props.title} </p>
      <p className="bookmarks__title bookmarks__url">Url: {props.link} </p>
      <p className="bookmarks__title">
        Link:{' '}
        <a target="_blank" href={props.link}>
          {props.title}
        </a>
      </p>
      <button
        className="bookmarks__button button button--negative button--full-width"
        onClick={() => props.removeBookmark(props.index)}
      >
        Remove bookmark
      </button>
      <button
        className="bookmarks__button button button--edit button--full-width"
        onClick={() => props.editBookmark(props.index)}
      >
        edit
      </button>
    </div>
  );
};

export default Bookmark;
