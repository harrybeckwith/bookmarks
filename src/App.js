import React from 'react';
import './App.scss';
import UserInput from './components/UserInput';
import Bookmark from './components/Bookmark';

class App extends React.Component {
  state = {
    bookmarks: [],
    currentEdit: {
      title: '',
      link: '',
    },
  };

  addBookmark = bookmark => {
    // create a copy of bookmarks
    const bookmarks = [...this.state.bookmarks];
    // add new bookmark
    bookmarks.push(bookmark);
    // update state with new bookmark
    // remove any edited in form
    this.setState({
      bookmarks,
      currentEdit: {
        title: '',
        link: '',
      },
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

  editBookmark = selected => {
    // 1. get clicked from state
    const currentEdit = this.state.bookmarks[selected];
    // 2. add back in to input feilds
    this.setState({
      currentEdit,
    });
    // 3. remove edit clicked
    this.removeBookmark(selected);
  };

  render() {
    return (
      <div>
        <UserInput
          addBookmark={this.addBookmark}
          currentEdit={this.state.currentEdit}
        />
        {Object.keys(this.state.bookmarks).map((item, index) => (
          <Bookmark
            title={this.state.bookmarks[item].title}
            link={this.state.bookmarks[item].link}
            key={index}
            index={index}
            removeBookmark={this.removeBookmark}
            editBookmark={this.editBookmark}
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
