import React from 'react';
import './App.scss';
import UserInput from './components/UserInput';
import Bookmark from './components/Bookmark';

class App extends React.Component {
  state = {
    bookmarks: [],
  };

  addBookmark = bookmark => {
    // create a copy of bookmarks
    const newBookmarks = [...this.state.bookmarks];
    // add new bookmark
    newBookmarks.push(bookmark);
    // update state with new bookmark
    this.setState({
      bookmarks: newBookmarks,
    });
  };

  render() {
    return (
      <div>
        <UserInput addBookmark={this.addBookmark} />
        <Bookmark />
      </div>
    );
  }
}

export default App;

// keep count of number of bookmarks
// click to show all bookmarks
// keep add toolbar to add title and link

// 1. create functionality input bar add, edit and remove items.
// 2. add styles BEM
// 3. add storage option
// 4. deploy
