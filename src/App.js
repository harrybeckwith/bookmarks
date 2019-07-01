import React from 'react';
import './styles/App.scss';
import UserInput from './components/UserInput';
import Bookmark from './components/Bookmark';
import Intro from './components/Intro';

class App extends React.Component {
  state = {
    bookmarks: [],
    currentEdit: {
      title: '',
      link: '',
    },
    editing: false,
    showAdd: false,
  };

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

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
      editing: false,
      showAdd: false,
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
      editing: true,
      showAdd: true,
    });
    // 3. remove edit clicked
    this.removeBookmark(selected);
  };

  checkInput = e => {
    // check if users has typed
    // if so show the button
    // else hide

    const input = e.target.value;
    if (input.length > 0) {
      this.setState({
        showAdd: true,
      });
    } else {
      this.setState({
        showAdd: false,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Intro count={this.state.bookmarks.length} />
        <UserInput
          addBookmark={this.addBookmark}
          currentEdit={this.state.currentEdit}
          bookmarks={this.state.bookmarks}
          checkInput={this.checkInput}
          showAdd={this.state.showAdd}
        />
        <div className={this.state.editing ? '' : 'hide'}>
          Currently editing - please complete edit.
        </div>
        <h3 className={this.state.bookmarks.length > 0 ? '' : 'hide'}>
          Bookmarks
        </h3>
        <div className={this.state.editing ? 'hide' : 'bookmarks'}>
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
