import React from 'react';

class UserInput extends React.Component {
  // connect to form inputs
  titleRef = React.createRef();
  linkRef = React.createRef();

  collectUserInput = event => {
    // prevent form reloading page
    event.preventDefault();
    // gather users input
    const bookmark = {
      title: this.titleRef.current.value,
      link: this.linkRef.current.value,
    };
    // parent func to update state with new bookmark
    this.props.addBookmark(bookmark);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.collectUserInput}>
          <input placeholder="bookmark name" ref={this.titleRef} />
          <input placeholder="bookmark link" ref={this.linkRef} />
          <button type="submit">Add Bookmark</button>
        </form>
      </div>
    );
  }
}

export default UserInput;
