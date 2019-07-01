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
    const bookmarks = [...this.state.bookmarks];
    // add new bookmark
    bookmarks.push(bookmark);
    // update state with new bookmark
    this.setState({
      bookmarks,
    });
  };

  removeBookmark = selected => {
    // create a copy of bookmarks
    const bookmarks = [...this.state.bookmarks];
    // remove selected bookmark
    bookmarks.splice(selected, 1);
    // update state with removed bookmark
    this.setState({
      bookmarks,
    });
  };

  render() {
    return (
      <div>
        <UserInput addBookmark={this.addBookmark} />
        {Object.keys(this.state.bookmarks).map((item, index) => (
          <Bookmark
            title={this.state.bookmarks[item].title}
            link={this.state.bookmarks[item].link}
            key={index}
            index={index}
            removeBookmark={this.removeBookmark}
          />
        ))}
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
