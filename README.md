# Your Bookmarks App

Bookmark app built using react-create-app.

### start program

```sh
npm install
npm start
```

### Netlify

The application has been deployed using Netlify and can be viewed here:
https://your-bookmarks.netlify.com

### Technical notes

The application uses three different components:

#### 1. UserInput component

This takes the input from the user and syncs back up the parent app using refs. The add button creates a new book mark which holds a name and url link. Validation is checked on the url input field to make sure it has a valid url. It uses the form to submit the created data on submit of the add bookmarks button. The button will only display once the user starts typing.

#### 2. Bookmark component

This component is the individual card component for each bookmark added by the user. On click of remove the clicked item is removed from the state and the ui updated. Click edit and the card details are placed back into the userInput component for any changes needed - click add bookmark to complete edit.

#### 3. Intro component

This component display a welcome message and logo, it also keeps count of the number of bookmarks added.

#### Local storage

Local storage is used to capture and store the bookmark details and will stay on the page after refresh and closure of the page.

#### Styles

BEM used to style each component. Components have their own file. node-sass npm package added so sass can be used. Some color variables stored in variables and global styles in UI file. Each file gets imported into the App.scss.
