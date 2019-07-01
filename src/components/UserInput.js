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
    event.target.reset();
  };

  render() {
    return (
      <div className="user-input card">
        <form className="user-input__form" onSubmit={this.collectUserInput}>
          <input
            onChange={this.props.checkInput}
            className="user-input__input"
            placeholder="Bookmark name"
            ref={this.titleRef}
            defaultValue={this.props.currentEdit.title}
          />
          <input
            type="url"
            name="url"
            placeholder="https://example.com"
            pattern="https://.*"
            required
            className="user-input__input"
            ref={this.linkRef}
            defaultValue={this.props.currentEdit.link}
            onChange={this.props.checkInput}
          />
          <button
            className={`button button--positive ${
              this.props.showAdd ? 'show' : 'hide'
            }`}
            type="submit"
          >
            <p>Add Bookmark</p>
          </button>
        </form>
      </div>
    );
  }
}

export default UserInput;
