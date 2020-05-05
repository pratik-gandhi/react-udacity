# MyReads Project

The 'MyReads' project, allows you to select and 
categorize books you have read, are currently reading, 
or want to read.

You may also search for new books and add them to 
your reading list. 

## Prerequisites

This project requires `node v8.9.0` to set up and run.

## Setting up the project

- Clone this repository on a local or remote computer
- `cd` into the project directory 
- Run `npm install` to set up project dependencies 

## Running the project

- Run `npm start` to run the project
- By default, the project runs on port `3000`. 
- The application may fail to start if port `3000` 
is in use by any other process


## Supported routes in the App

- `/` displays books dashboard
- `/search` displays search page to search for new books
- `search-keywords*` displays whitlisted search keywords

*available only `useWhiteList` is set to `true`


## Project Structure

The project is structured as follows,
 
```bash
├── README.md # This file, includes instructions to setup and run project
└── src
    ├── api 
        ├── BooksAPI.js # Client functions to communicate with server
    ├── common
        ├── ShelfType.js # Shelf types (or categories) to display
        ├── URLPaths.js # Enum for supported URL paths
    ├── components 
        ├── book # Components for displaying books
        ├── bookshelf # Components for displaying bookshelves
        ├── layout  # Components for layout
        ├── search  # Components for searching books
    ├── config 
        ├── Config.js # Allows altering app behaviour
    ├── utils # Common utility functions
``` 

## Configuration

The app can be configured in following ways.

#### config/Config.js

- `appName` allows modifying application name
- `useWhiteList` configures search behaviour 
to either use or ignore of whitelist of search keywords.
If set to `true`, a results will only be fetched if a search query
matches one of the whitelisted search keywords 
- `queryWhiteList` is a list of whitelist of search keywords,
 used only if `useWhiteList` is set to `true`.   

#### common/ShelfTypes.js

- `show` property of a ShelfType can be used configure whether 
to show a Shelf on the home page or not

## Acknowledgements & Dependencies

- This project is developed using [react](https://github.com/facebook/react)
- This project is developed on top of [Myreads Starter](https://github.com/udacity/reactnd-project-myreads-starter) 
provided by [Udacity](https://www.udacity.com/)
- Package [react-throttle](https://github.com/gmcquistin/react-throttle) is used to throttle search requests
- Package [prop-types](https://github.com/facebook/prop-types) is used to define expected types of components

## License

MIT 